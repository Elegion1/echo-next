// contexts/PostContext.js
import { createContext, useContext, useState, useEffect } from 'react';

const PostContext = createContext();

export const usePostContext = () => useContext(PostContext);

export const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            try {
                // Qui simuleremo il fetch dei post; sostituisci con l’URL dell’API quando pronto
                const response = await fetch('/api/posts');  // Cambia con l'URL del backend
                if (!response.ok) throw new Error('Errore nel fetch dei dati');
                
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error('Errore nel fetch dei post:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    const addNewComment = (postId, comment) => {
        setPosts((prevPosts) =>
            prevPosts.map((post) =>
                post.id === postId
                    ? { ...post, comments: [...post.comments, comment] }
                    : post
            )
        );
    };

    return (
        <PostContext.Provider value={{ posts, setPosts, loading, addNewComment }}>
            {children}
        </PostContext.Provider>
    );
};