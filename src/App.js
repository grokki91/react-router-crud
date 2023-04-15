import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import PageNewPost from './pages/PageNewPost';
import PageNotFound from './pages/PageNotFound';
import Card from './pages/Card';

function App() {
  const [post, setPost] = useState('');
  const [posts, setPosts] = useState([]);
  const [errorText, setErrorText] = useState('');
  const [close, setClose] = useState(false);

  const url = 'http://localhost:7070/posts';
  const handlerInputPost = (e) => {
    if (e.target.value) {
      setErrorText('')
    }
    setPost(e.target.value)
  };

  const fetchGetPosts = () => {
    fetch(url)
        .then(response => response.json())
        .then(res => setPosts(res))
  }

  const fetchAddPosts = async () => {
    if (!post) {
      return
    }

    const newPost = {
      id: 1 || post.id++,
      content: post,
      created: new Date(),
    }

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'applicaton/json' },
      body: JSON.stringify(newPost)
    }

    const response = await fetch(url, options);
    if (response.ok) {
      setPosts(response);
      setPost('')
      fetchGetPosts()
    } else {
      console.error(response)
    }
  }

  const addErrorText = () => setErrorText('Вы ничего не написали');


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainPage posts={posts} fetchPosts={fetchGetPosts} />} />
        <Route path='/posts/new' element={<PageNewPost
          add={fetchAddPosts} 
          value={post} 
          onInput={handlerInputPost}
          error={errorText}
          addError={addErrorText}
          close={close}
          toClose={setClose}
        />} />
        <Route path='/posts/:id' element={<Card post={post}/>} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
