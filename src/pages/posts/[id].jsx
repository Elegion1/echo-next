// pages/posts/[id].js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { usePostContext } from '../../contexts/PostContext';
import Post from '../../components/Post';

export async function getServerSideProps({ params }) {
    const { id } = params;

    // Sostituisci con l'URL effettivo del backend per recuperare un singolo post tramite l'id
    const res = await fetch(`http://localhost:3000/api/posts/${id}`);
    const post = await res.json();

    return { props: { initialPost: post } };
}

/**
 * Pagina di dettaglio di un singolo post
 * @param {object} initialPost Post iniziale recuperato dal server
 * @returns {JSX.Element}
 */
export default function PostDetailPage({ initialPost }) {
    const router = useRouter();
    const { posts, addNewComment } = usePostContext();
    const [post, setPost] = useState(initialPost);

    useEffect(() => {
        /**
         * Se il post non  stato trovato, cerca di trovare il post corrispondente
         * all'id della query string nella lista dei post
         */
        if (!post) {
            const foundPost = posts.find((p) => p.id === router.query.id);
            setPost(foundPost);
        }
    }, [router.query.id, posts]);

    /**
     * Funzione per aggiungere un nuovo commento ad un post
     * @param {string} commentText Testo del commento
     */
    const addComment = (commentText) => {
        const newComment = { id: post.comments.length + 1, username: "nuovoutente", text: commentText };
        addNewComment(post.id, newComment);
        setPost((prevPost) => ({
            ...prevPost,
            comments: [...prevPost.comments, newComment],
        }));
    };

    if (!post) {
      return <p>Loading...</p>;
    }

    return (
        <div className="container mx-auto p-4">
            <Post {...post} />

            <div className="container p-3">
                <textarea
                    className="w-full resize-none p-2 mb-3 border border-gray-300 rounded"
                ></textarea>
                <div className="flex justify-end">
                    <button onClick={() => addComment(newComment)} className="btn btn-sm btn-info text-white">
                        Posta
                    </button>
                </div>
            </div>

            <div>
                <h3 className="text-lg font-bold mt-4">Commenti</h3>
                <ul className="mt-2">
                    {post.comments.map((comment) => (
                        <li key={comment.id} className="border-b py-2">
                            <p className="font-bold">{comment.username}</p>
                            <p>{comment.text}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
