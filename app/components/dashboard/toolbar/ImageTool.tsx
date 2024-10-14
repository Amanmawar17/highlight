import { Editor } from "@tiptap/react";
import { Images } from "lucide-react";
import { useState } from "react";

export default function ImageTool({
    editor,
}: {
    editor: Editor | null;
}) {
    const [active, setActive] = useState(false);
    if (!editor) return null;
    const handleImg = (url: string) => {
        editor.chain().focus().setImage({ src: url }).run();
        setActive((prev) => !prev); // Toggling active state
      };
      
  return (
    <button onClick={() => handleImg} className={active ? "" : ""}>
        <Images className="size-5" />
    </button>
  )
}
