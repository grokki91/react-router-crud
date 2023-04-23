import { Link, useParams } from 'react-router-dom';
import Post from '../components/Post';

const Card = ({posts, remove}) => {
    let { id } = useParams();

    const getPost = () => posts.find(el => {
        if (el.id === Number(id)) {
            return el;
        }
    });

    return (
        <div className="card">
            <Post post={getPost()}/>
            <div className="buttons">
                <Link to='edit' className='btn'>Изменить</Link>
                <Link to='/' className='btn del'onClick={() => remove(id)}>Удалить</Link>
            </div>
        </div>
    );
}

export default Card;
