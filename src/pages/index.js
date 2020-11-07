import React from 'react';
import Layout from '../components/Layout';

export default class IndexPage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Layout>
        <div className="main">
          <h1 className="main__header">THE KOOP</h1>
          <h2 className="main__subheader">
            KOREAN CHICKEN | CUISINE | JOCKBAL
          </h2>
        </div>
      </Layout>
    );
  }
}
