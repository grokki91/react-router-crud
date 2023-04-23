import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const EditCard = ({put, edit, text, clear}) => {
    const { id } = useParams('');

    return (
        <div className='card'>
            <Link to='/' className='close' onClick={() => clear('')}>&#10006;</Link>
            <h2>Редактировать публикацию</h2>
            <input value={text} onChange={edit}/>
            <Link to='/' className='btn' onClick={() => put(id)}>Сохранить</Link>
        </div>
    );
}

export default EditCard;
