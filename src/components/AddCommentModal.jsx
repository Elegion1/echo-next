// AddCommentModal.js
import React, { useState } from "react";
import ProfileImg from "./ProfileImg";
import UserDisplay from "./UserDisplay";

export default function AddCommentModal({ isOpen, onClose, post, onAddComment }) {
    const [comment, setComment] = useState("");

    const handleAddComment = () => {
        if (comment.trim()) {
            onAddComment(comment);
            setComment("");
            onClose();
        }
    };

    if (!isOpen) {
      return null;
    }

    return (
        <dialog open className="modal">
            <div className="modal-box">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={onClose}>✖</button>
                <div className="grid grid-cols-10 gap-2 p-1">

                    <div className="col-span-2">
                        <ProfileImg profileImage={post.imageToShow} imageAlt={post.username} size={50} />
                    </div>
                    <div className="col-span-8">
                        <UserDisplay name={post.name} username={post.username} verified={post.verified} timeAgo={post.timeAgo} />
                        <p className="pe-4 pb-4">{post.content}</p>
                    </div>
                </div>

                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Aggiungi un commento..."
                    className="w-full p-2 mb-4 m-2">
                </textarea>
                <div className="modal-action">
                    <button className="btn btn-primary" onClick={handleAddComment}>Invia</button>
                </div>
            </div>
        </dialog>
    );
}