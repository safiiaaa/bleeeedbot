import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, firestore } from '../firebaseConfig';
import { useState, useEffect } from 'react';
import firebase from 'firebase/app';

const Home = () => {
  const [user] = useAuthState(auth);
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      const postsCollection = await firestore.collection('posts').orderBy('createdAt', 'desc').get();
      setPosts(postsCollection.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchPosts();
  }, []);

  const addPost = async () => {
    if (newPost.trim()) {
      await firestore.collection('posts').add({
        text: newPost,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        user: user.email
      });
      setNewPost('');
    }
  };

  if (!user) {
    return <p>Please sign in.</p>;
  }

  return (
    <div>
      <h1>Welcome, {user.email}</h1>
      <input
        type="text"
        value={newPost}
        onChange={(e) => setNewPost(e.target.value)}
        placeholder="What's on your mind?"
      />
      <button onClick={addPost}>Post</button>
      <div>
        {posts.map(post => (
          <div key={post.id}>
            <p>{post.user}: {post.text}</p>
            <p>{post.createdAt?.toDate().toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
