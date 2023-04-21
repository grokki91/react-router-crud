import { Link, useParams } from 'react-router-dom';
import Post from '../components/Post';

const Card = ({posts, remove}) => {
    const { id } = useParams('');

    return (
        <div className="card">
            <Post post={posts.filter(el => el.id === id)}/>
            <div className="buttons">
                <Link to='edit' className='btn'>Изменить</Link>
                <Link to='/' className='btn del'onClick={() => remove(id)}>Удалить</Link>
            </div>
        </div>
    );
}

export default Card;
