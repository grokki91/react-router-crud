import React from 'react';
import { Link, NavLink } from "react-router-dom";

const PageNewPost = ({add, value, onInput, error, addError, close, toClose}) => {

    const inputReg = /[<>/{}\][]/

    return (
        <div className='new-post'>
            <div className="header-new">
                <ul>
                    <NavLink to='/posts/new/pub'>Публикация</NavLink>
                    <NavLink to='/posts/new/foto'>Фото/Видео</NavLink>
                    <NavLink to='/posts/new/efir'>Прямой эфир</NavLink>
                    <NavLink to='/posts/new/else'>Еще</NavLink>
                </ul>
                <Link to='/' className='close'>&#10006;</Link>
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
