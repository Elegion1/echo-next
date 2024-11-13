"use client";

import React, { useEffect, useState } from "react";
import Post from "../components/Post";
import CreatePost from "../components/CreatePost";
import ProfileImg from "../components/ProfileImg";

// const initialPosts = [
//   {
//     id: 1,
//     name: "Mario Rossi",
//     username: "mariorossi",
//     profileImage: null,
//     verified: true,
//     postTime: "2024-10-29T08:30:00Z",
//     content: "Sto imparando React! Qualcuno ha suggerimenti per iniziare?",
//     postImage: "http://picsum.photos/300",
//     comments:[
//       {id: 1, username: "utente1", text: "prova"},
//       {id: 2, username: "utente31", text: "prova 2"},
//     ],
//     retweets: "120",
//     likes: "500",
//     views: "20K",
//   },
//   {
//     id: 2,
//     name: "Lucia Bianchi",
//     username: "luciabianchi",
//     profileImage: null,
//     verified: false,
//     postTime: "2024-09-29T09:00:00Z",
//     content: "Amo questa community! Grazie a tutti per il supporto ❤️",
//     postImage: null,
//     comments: [
//       {id: 1, username: "utente1", text: "prova"},
//       {id: 2, username: "utente31", text: "prova 2"},
//     ],
//     retweets: "300",
//     likes: "1K",
//     views: "15K",
//   },
//   {
//     id: 3,
//     name: "Giovanni Verdi",
//     username: "giovanniverdi",
//     profileImage: null,
//     verified: true,
//     postTime: "2024-08-28T18:45:00Z",
//     content: "I miei consigli su come programmare in JavaScript...",
//     postImage: "http://picsum.photos/301",
//     comments:[
//       {id: 1, username: "utente1", text: "prova"},
//       {id: 2, username: "utente31", text: "prova 2"},
//     ],
//     retweets: "1K",
//     likes: "10K",
//     views: "100K",
//   },
//   {
//     id: 4,
//     name: "Elena Azzurri",
//     username: "elenaazzurri",
//     profileImage: null,
//     verified: false,
//     postTime: "2023-10-28T17:15:00Z",
//     content: "In arrivo il mio primo progetto in React Native!",
//     postImage: "http://picsum.photos/302",
//     comments:[
//       {id: 1, username: "utente1", text: "prova"},
//       {id: 2, username: "utente31", text: "prova 2"},
//     ],
//     retweets: "500",
//     likes: "2K",
//     views: "18K",
//   },
//   {
//     id: 5,
//     name: "Luca Gialli",
//     username: "lucagialli",
//     profileImage: null,
//     verified: false,
//     postTime: "2023-10-27T14:20:00Z",
//     content: "C'è qualche novità su JavaScript ES2022?",
//     postImage: null,
//     comments:[
//       {id: 1, username: "utente1", text: "prova"},
//       {id: 2, username: "utente31", text: "prova 2"},
//     ],
//     retweets: "40",
//     likes: "200",
//     views: "5K",
//   },
//   {
//     id: 6,
//     name: "Sara Viola",
//     username: "saraviola",
//     profileImage: null,
//     verified: false,
//     postTime: "2023-10-27T10:30:00Z",
//     content: "Ho appena completato un corso avanzato di CSS! 💪",
//     postImage: "http://picsum.photos/303",
//     comments: [
//       {id: 1, username: "utente1", text: "prova"},
//       {id: 2, username: "utente31", text: "prova 2"},
//     ],
//     retweets: "620",
//     likes: "3K",
//     views: "22K",
//   },
//   {
//     id: 7,
//     name: "Marco Blu",
//     username: "marcoblu",
//     profileImage: null,
//     verified: true,
//     postTime: "2023-10-26T21:15:00Z",
//     content: "Qualcuno conosce qualche tool per ottimizzare il codice?",
//     postImage: null,
//     comments:[
//       {id: 1, username: "utente1", text: "prova"},
//       {id: 2, username: "utente31", text: "prova 2"},
//     ],
//     retweets: "150",
//     likes: "600",
//     views: "8K",
//   },
//   {
//     id: 8,
//     name: "Anna Rosa",
//     username: "annarosa",
//     profileImage: null,
//     verified: true,
//     postTime: "2023-10-25T16:45:00Z",
//     content: "Ecco il mio ultimo progetto: un sito responsive in Bootstrap!",
//     postImage: "http://picsum.photos/304",
//     comments: [
//       {id: 1, username: "utente1", text: "prova"},
//       {id: 2, username: "utente31", text: "prova 2"},
//     ],
//     retweets: "1.2K",
//     likes: "6K",
//     views: "35K",
//   },
//   {
//     id: 9,
//     name: "Paolo Marrone",
//     username: "paolomarrone",
//     profileImage: null,
//     verified: false,
//     postTime: "2023-10-24T13:10:00Z",
//     content: "Chi conosce un buon tutorial su Node.js?",
//     postImage: null,
//     comments:[
//       {id: 1, username: "utente1", text: "prova"},
//       {id: 2, username: "utente31", text: "prova 2"},
//     ],
//     retweets: "25",
//     likes: "100",
//     views: "3K",
//   },
//   {
//     id: 10,
//     name: "Giulia Bianca",
//     username: "giuliabianca",
//     profileImage: null,
//     verified: false,
//     postTime: "2023-10-24T09:20:00Z",
//     content: "Il mio articolo su Vue.js è online! 📝",
//     postImage: "http://picsum.photos/305",
//     comments: [
//       {id: 1, username: "utente1", text: "prova"},
//       {id: 2, username: "utente31", text: "prova 2"},
//     ],
//     retweets: "2K",
//     likes: "15K",
//     views: "50K",
//   },
// ];

/**
 * Funzione per creare un nuovo post e aggiungerlo alla lista
 * @param {string} content Testo del post
 */
const addPost = (content) => {
  const newPost = {
    id: posts.length + 1, // ID univoco basato sulla lunghezza dell'array
    name: "Nuovo Utente",
    username: "nuovoutente",
    profileImage: null,
    verified: false,
    postTime: new Date().toISOString(),
    content,
    postImage: null,
    comments: [],
    retweets: "0",
    likes: "0",
    views: "0",
  };

  // Aggiungi il nuovo post in cima e aggiorna lo stato
  setPosts([newPost, ...posts]);
};

export default function Home() {
  // Imposta lo stato dei post iniziali
  const [posts, setPosts] = useState(initialPosts);

  return (
    <>
      <div className="container relative h-screen overflow-y-auto">
        <div className="h-20">
          <button className="btn btn-square btn-ghost absolute top-0 left-0 m-2">
            <ProfileImg profileImage="https://picsum.photos/100" size={50} />
          </button>
          <button className="btn btn-square btn-ghost absolute top-0 left-1/2 transform -translate-x-1/2 mt-2">
            <img src="./media/echo-logo.png" alt="Echo Logo" />
          </button>
        </div>
        <div className="container flex justify-around items-center border-b border-gray-400 pb-3">
          <p>Per te</p>
          <p>Seguiti</p>
        </div>
        <CreatePost onPost={addPost} /> {/* Passa la funzione addPost */}
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            name={post.name}
            username={post.username}
            verified={post.verified}
            profileImage={post.profileImage}
            postTime={post.postTime}
            content={post.content}
            postImage={post.postImage}
            comments={post.comments}
            retweets={post.retweets}
            likes={post.likes}
            views={post.views}
          />
        ))}
        <div className="h-96"></div>
      </div>
    </>
  );
}
