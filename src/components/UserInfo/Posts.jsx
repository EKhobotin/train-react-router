import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPostsByUserId } from "../../services/api";
import { Modal } from "../Modal/Modal";

export const Posts = () => {
  const { userId } = useParams();
  const [posts, setPosts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);

  useEffect(() => {
    fetchPostsByUserId(userId).then((data) => setPosts(data.posts));
  }, [userId]);

  const handleShowPost = (post) => {
    setIsOpen(true);
    setCurrentPost(post);
  };

  return (
    <div>
      <h2>Posts</h2>
      <ol>
        {posts?.map((item) => (
          <li onClick={() => handleShowPost(item)} key={item.id}>
            {item.title}
          </li>
        ))}
      </ol>
      {isOpen ? (
        <Modal closeModal={() => setIsOpen(false)}>
          <h2>{currentPost.title}</h2>
          <h3>{currentPost.body}</h3>
          <h3>Tags:</h3>
          <ul>
            {currentPost.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </Modal>
      ) : null}
    </div>
  );
};
