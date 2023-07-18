import React, { useState } from 'react';
import { movie_lists } from './movie_data.js';

function Action() {
  const [count, setCount] = useState(0); 

  const handleLike = () => {
    setCount(count + 1);
  };

  const handleDislike = () => {
    setCount(count - 1);
  };

  return (
    <>
      <img id="thumbs-up" src="LikeButton.png" onClick={handleLike} />
      <div className="count">{count}</div>
      <img id="thumbs-down" src="dislike.png" onClick={handleDislike} />
    </>
  );
}

export default Action;

