'use client';

import React, { useState } from "react";

const CommentSection = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  const addComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div className="comment-section bg-white shadow-md rounded-lg p-6 mt-8">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Comments</h3>
      <ul className="space-y-4">
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <li
              key={index}
              className="bg-gray-100 p-3 rounded-md shadow-sm border-l-4 border-blue-500"
            >
              <p className="text-gray-700">{comment}</p>
            </li>
          ))
        ) : (
          <p className="text-gray-500 italic">No comments yet. Be the first to comment!</p>
        )}
      </ul>
      <div className="mt-6">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add your comment here..."
          className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
          rows={4}
        />
        <button
          onClick={addComment}
          className="bg-blue-500 text-white px-6 py-2 mt-4 rounded-md hover:bg-blue-600 transition duration-200 shadow-lg w-full sm:w-auto"
        >
          Submit Comment
        </button>
      </div>
    </div>
  );
};

export default CommentSection;
