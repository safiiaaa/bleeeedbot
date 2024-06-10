import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebaseConfig';
import { useState } from 'react';

const SignUp = () => {
  const [user] = useAuthState(auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = () => {
    auth.createUserWithEmailAndPassword(email, password);
  };

  if (user) {
    return <p>Welcome, {user.email}</p>;
  }

  return (
    <div>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={signUp}>Sign Up</button>
    </div>
  );
};

export default SignUp;
