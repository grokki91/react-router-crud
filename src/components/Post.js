import moment from "moment/moment";

const Post = ({post}) => {

    return (
        <>
            <div className="date">{moment(post.created).format('DD-MM-YYYY HH:MM')}</div>
            <div className="content">{post.content}</div>
        </>
    );
}

export default Post;
