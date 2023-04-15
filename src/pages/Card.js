import React from 'react';
import { useParams } from 'react-router-dom';
import Post from '../components/Post';

const Card = ({post}) => {
    const { id } = useParams();

    return (
        <Post post={post}/>
    );
}

export default Card;
