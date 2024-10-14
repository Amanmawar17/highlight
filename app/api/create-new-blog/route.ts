import { prisma } from '@/prisma/prisma';
import { uploadImage, uploadImages } from '@/utils/cloudinary';

export async function POST(request: Request) {
  try {
    // Parse the request body
    const { title, heroimage, text, images, authorId } = await request.json();

    // Input validation
    if (!title || !heroimage || !text || !authorId) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Missing required fields",
        }),
        { status: 400 }
      );
    }

    // Ensure author exists
    const authorExists = await prisma.user.findUnique({
      where: { id: authorId },
    });

    if (!authorExists) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Author not found",
        }),
        { status: 404 }
      );
    }

    // Upload hero image to Cloudinary
    const hero = await uploadImage(heroimage); // Assuming this returns an object with secure_url

    // Upload body images to Cloudinary (optional)
    let blogbodypictures: { secure_url: string; }[] = [];
    if (images && images.length > 0) {
      blogbodypictures = await uploadImages(images); // Assuming this returns an array of response objects
    }

    // Create the article and related BlogImage records within a transaction
    const blogPost = await prisma.$transaction(async (prisma) => {
      // Create article
      const createdArticle = await prisma.article.create({
        data: {
          title,
          content: text,
          featuredImg: hero.secure_url, // Save the hero image URL in the article
          author: {
            connect: { id: authorId }, // Connect the author to the article
          },
        },
      });

      // Create related BlogImage records
      if (blogbodypictures.length > 0) {
        await prisma.blogImage.createMany({
          data: blogbodypictures.map((image: { secure_url: string }) => ({
            imagePath: image.secure_url, // Create BlogImage records with the image URLs
            articleId: createdArticle.id, // Connect BlogImage to the created article
          })),
        });
      }


      return createdArticle;
    });

    // Return success response
    return new Response(
      JSON.stringify({
        success: true,
        data: blogPost,
        message: "Blog post created successfully",
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error creating blog post', error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Error creating blog post",
      }),
      { status: 500 }
    );
  }
}
