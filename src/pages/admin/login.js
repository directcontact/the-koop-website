import { useState } from 'react';
import { useRouter } from 'next/router';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const auth = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('../api/auth', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (res.status === 200) {
        router.push('/admin/order');
      } else if (res.status === 403) {
        alert('Sorry, wrong username and password.');
      } else {
        alert('Sorry, something went wrong');
      }
    } catch (err) {
      alert('Sorry, something went wrong.');
    }
  };

  return (
    <div className="login">
      <img
        className="login__img u-margin-bottom-medium"
        src="/static/images/koop_logo.png"
      />
      <h2 className="login__header u-margin-bottom-medium">ADMIN PORTAL</h2>
      <div className="login__container">
        <h3 className="login__container-header u-margin-bottom-small">
          SIGN IN
        </h3>
        <form className="login__container-form">
          <input
            type="text"
            className="login__container-form--input"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            className="login__container-form--input"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <a className="u-margin-bottom-small">Forgot Password?</a>

          <button
            className="login__container-form--btn"
            type="submit"
            onClick={auth}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
