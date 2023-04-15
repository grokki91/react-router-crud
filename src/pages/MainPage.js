import React, { useEffect } from 'react';
import Post from '../components/Post';
import Add from '../components/Add';
import { Link } from 'react-router-dom';

const MainPage = ({posts, fetchPosts}) => {

    useEffect(() => {
        fetchPosts()
        // eslint-disable-next-line
    }, [])

    return (
        <div className="posts">
            <Add />
            { 
                !posts.length ?
                <div>Постов нет!</div> :
                posts.map((post, index) => {
                    return(
                        <Link className="btn post-item" to={`/posts/${post.id}`} key={index}>
                            <Post post={post} />
                        </Link>
                    )
                })
            } 
        </div>
    );
}

export default MainPage;
