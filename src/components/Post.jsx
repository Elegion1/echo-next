import { formatDistanceToNowStrict, differenceInMinutes, differenceInHours, differenceInDays, differenceInMonths, differenceInYears } from 'date-fns';
import CommentIcon from "../icons/CommentIcon"
import RetweetIcon from "../icons/RetweetIcon"
import LikeIcon from "../icons/LikeIcon"
import GraphIcon from "../icons/GraphIcon"
import BookmarkIcon from "../icons/BookmarkIcon"
import ShareIcon from "../icons/ShareIcon"
import ProfileImg from "./ProfileImg"
import { useState } from 'react';
import AddCommentModal from "../components/AddCommentModal"
import UserDisplay from "../components/UserDisplay"
import Link from "next/link"

export default function Post({
    id,
    name,
    username,
    verified,
    profileImage,
    postTime,
    content,
    postImage,
    comments,
    retweets,
    likes,
    views,
}) {

    const [isCommentModalOpen, setCommentModalOpen] = useState(false);
    const [postComments, setPostComments] = useState(comments);

    const addComment = (newCommentText) => {
        const newComment = {
            id: postComments.length + 1,
            username: "nuovoutente",
            text: newCommentText,
        };
        setPostComments([...postComments, newComment]);
    };

    const imageToShow = profileImage || "https://picsum.photos/300";

    const getConciseTimeAgo = (date) => {
        const now = new Date();

        const diffYears = differenceInYears(now, date);
        if (diffYears > 0) {
            return `${diffYears}a`;
        }

        const diffMonths = differenceInMonths(now, date);
        if (diffMonths > 0) {
            return `${diffMonths}m`;
        }

        const diffDays = differenceInDays(now, date);
        if (diffDays > 0) {
            return `${diffDays}g`;
        }

        const diffHours = differenceInHours(now, date);
        if (diffHours > 0) {
            return `${diffHours}h`;
        }

        const diffMinutes = differenceInMinutes(now, date);
        if (diffMinutes > 0) {
            return `${diffMinutes}min`;
        }

        return 'Ora';
    };

    const timeAgo = getConciseTimeAgo(new Date(postTime));

    return (
        <div className="grid grid-cols-10 gap-2 p-4 border-t border-gray-400">
            <div className="col-span-2">
                <ProfileImg profileImage={imageToShow} imageAlt={username} size={50} />
            </div>
            <div className="col-span-8">
                <UserDisplay name={name} username={username} verified={verified} timeAgo={timeAgo} />

                <Link href={`/posts/${id}`}>
                    <p className="pe-4 pb-4">{content}</p>
                </Link>

                {postImage && (
                    <img className="rounded-xl" src={postImage} alt="Post content" />
                )}
                <div className="flex justify-between items-center mt-2 text-xs">

                    <button onClick={() => setCommentModalOpen(true)}>
                        <div className="flex items-center space-x-1">
                            <CommentIcon size={20} />
                            <small>{postComments.length}</small>
                        </div>
                    </button >

                    <div className="flex items-center space-x-1">
                        <RetweetIcon size={20} />
                        <small>{retweets}</small>
                    </div>
                    <div className="flex items-center space-x-1">
                        <LikeIcon size={20} />
                        <small>{likes}</small>
                    </div>
                    <div className="flex items-center space-x-1">
                        <GraphIcon size={20} />
                        <small>{views}</small>
                    </div>
                    <BookmarkIcon size={20} />
                    <ShareIcon size={20} />
                </div>
            </div>

            {/* Modale dei commenti */}
            <AddCommentModal
                isOpen={isCommentModalOpen}
                onClose={() => setCommentModalOpen(false)}
                post={{ name, username, verified, postTime, content, imageToShow }}
                onAddComment={(commentText) => addComment(commentText)}
            />
        </div>
    );
}
