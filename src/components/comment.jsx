// Comments.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Comments = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetch comments from the JSON Server
    axios.get('http://localhost:5173/placedetail')
      .then(response => {
        if (Array.isArray(response.data)) {
          setComments(response.data);
        } else {
          console.error('Invalid response format - expected an array');
        }
      })
      .catch(error => console.error('Error fetching comments:', error));
  }, []);


  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>
            <strong>{comment.username}</strong>: {comment.comment}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
