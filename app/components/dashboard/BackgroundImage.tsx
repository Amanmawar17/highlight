import React, { useState } from "react";

const ImageBackgroundInput: React.FC = (handleImageChange) => {
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);

  // Handle file input change
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBackgroundImage(reader.result as string);
      };
      reader.readAsDataURL(file); // Convert image file to base64 string
    }
  };

  return (
    <div className="space-y-4">
      {/* Image Upload Input */}
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="block text-sm text-gray-500"
      />

      {/* Background Image Preview */}
      <div
        className="h-64 w-full bg-gray-200 bg-cover bg-center"
        style={{
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        }}
      >
        {!backgroundImage && (
          <div className="flex items-center justify-center h-full text-gray-400">
            No Image Selected
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageBackgroundInput;
