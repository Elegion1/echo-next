import { useState } from "react";
import ImageIcon from "../icons/ImageIcon";
import GifIcon from "../icons/GifIcon";

export default function CreatePost({ onPost }) {
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    if (content.trim()) {
      onPost(content); // Aggiungi il nuovo post passando il contenuto
      setContent(""); // Resetta il campo textarea
    }
  };

  return (
    <>
      <div className="container p-3">
        <textarea
          name=""
          id=""
          placeholder="Che c'è di nuovo?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full resize-none p-2 mb-3"
        ></textarea>
        <div className="flex justify-end">
          <button onClick={handleSubmit} className="btn btn-sm btn-info text-white">
            Posta
          </button>
        </div>
      </div>
      <div className="flex content-center items-center border-t border-gray-300 p-3 text-blue-400">
        <ImageIcon />
        <GifIcon />
      </div>
    </>
  );
}