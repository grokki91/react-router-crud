import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import PageNewPost from './pages/PageNewPost';
import PageNotFound from './pages/PageNotFound';
import Card from './pages/Card';
import EditCard from './pages/EditCard';

function App() {
  const [post, setPost] = useState('');
  const [posts, setPosts] = useState([]);
  const [errorText, setErrorText] = useState('');
  const [editText, setEditText] = useState('');
  const url = 'http://localhost:7070/posts/';
  
  const handlerInputPost = (e) => {
    if (e.target.value) {
      setErrorText('')
    }
    setPost(e.target.value)
  }

  const handlerEditPost = (e) => {
    setEditText(e.target.value);
  }

  const fetchGetPosts = () => {
    fetch(url)
        .then(response => response.json())
        .then(res => setPosts(res))
  }

  const fetchAddPosts = async () => {
    if (!post) {
      return
    }

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'applicaton/json' },
      body: JSON.stringify({content: post})
    }

    fetch(url, options)
      .then(response => {
        setPosts(response);
        setPost('');
      })
      .catch(err => console.error(err));
  }

  const fetchEditPost = (id) => {
    const options = {
        method: 'PUT',
        headers: { 'Content-Type': 'applicaton/json' },
        body: JSON.stringify({content: editText})
      }

    fetch(`${url}${id}`, options)
      .then(response => setPost(response))
      .catch(err => console.error(err))
  }

  const fetchDeletePost = (id) => {
    fetch(`${url}${id}`, {method: 'DELETE'})
  }

  const addErrorText = () => {
    return setErrorText('Вы ничего не написали');
  }

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
          clear={setPost}
        />} />
        <Route path='/posts/:id' element={<Card posts={posts} remove={fetchDeletePost} />} />
        <Route path='/posts/:id/edit' element={<EditCard 
          edit={handlerEditPost}
          put={fetchEditPost}
          text={editText}
          clear={setPost}
          />} 
        />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
