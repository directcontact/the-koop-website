import React from 'react';
import Router from 'next/router';

class CompletePage extends React.Component {
  constructor() {
    super();
    this.state = {};

    this.checkAuthentication.bind(this);
  }

  componentDidMount() {
    this.checkAuthentication();
  }

  checkAuthentication() {
    const loggedIn = localStorage.getItem('login');

    if (!loggedIn) {
      Router.push('/admin/login');
    }
  }

  render() {
    return <div>test</div>;
  }
}

export default CompletePage;
