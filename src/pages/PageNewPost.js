import React from 'react';
import { Link } from "react-router-dom";

const PageNewPost = ({add, value, onInput, error, addError, clear}) => {
    const inputReg = /[<>/{}\][]/

    return (
        <div className='new-post'>
            <div className="header-new">
                <ul>
                    <div>Публикация</div>
                    <div>Фото/Видео</div>
                    <div>Прямой эфир</div>
                    <div>Еще</div>
                </ul>
                <Link to='/' className='close' onClick={() => clear('')}>&#10006;</Link>
            </div>
            <div className="form">
                <input value={value} onChange={(e) => !inputReg.test(e.target.value) ? onInput(e) : false} />
                {
                    value ?
                    <Link to='/' className='btn public' onClick={() => add()}>Опубликовать</Link> :
                    <div className='btn public' onClick={() => addError()}>Опубликовать</div>   
                }
            </div>
            <div className="error-text">{error}</div>
        </div>
    );
}

export default PageNewPost;
