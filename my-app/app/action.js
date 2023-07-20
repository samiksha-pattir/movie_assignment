import React, { useState } from 'react';
import { movie_lists } from './movie_data.js';

function Action({onClickLike,onClickDislike,like}) {

    return (
        <>
            <img id="thumbs-up" src="LikeButton.png" onClick={onClickLike} />
            <div className="count">{like}</div>
            <img id="thumbs-down" src="dislike.png" onClick={onClickDislike} />
        </>
    );
}

export default Action;

