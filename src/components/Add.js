import React from 'react';
import { Link } from 'react-router-dom';

const Add = () => {
    return (
        <div className='add'>
            <Link to='/posts/new' className='btn'>Создать пост</Link>
        </div>
    );
}

export default Add;
