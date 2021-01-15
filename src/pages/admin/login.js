import React from 'react';
import Router from 'next/router';
import lscache from 'lscache';

class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };

    this.authenticate.bind(this);
  }

  async authenticate(e) {
    const { username, password } = this.state;
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
        lscache.set('login', 'true', 100000);
        Router.push('/admin/incomplete');
      } else if (res.status === 403) {
        alert('Sorry, wrong username and password.');
      } else {
        alert('Sorry, something went wrong');
      }
    } catch (err) {
      console.log(err);
      alert('Sorry, something went wrong.');
    }
  }

  render() {
    const { username, password } = this.state;
    return (
      <div className="login">
        <img
          className="login__img u-margin-bottom-medium"
          src="/static/images/koop_logo.png"
        />
        <h2 className="login__header u-margin-bottom-medium">ADMIN PORTAL</h2>
        <div className="login__container">
          <h3 className="login__container-header u-ma rgin-bottom-small">
            SIGN IN
          </h3>
          <form className="login__container-form">
            <input
              type="text"
              className="login__container-form--input"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => this.setState({ username: e.target.value })}
            />
            <input
              type="password"
              className="login__container-form--input"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
            <a className="u-margin-bottom-small">Forgot Password?</a>

            <button
              className="login__container-form--btn"
              type="submit"
              onClick={(e) => this.authenticate(e)}
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginPage;
