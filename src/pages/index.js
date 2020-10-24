import React from 'react';
import Layout from '../components/Layout';
import { Row, Col } from 'react-bootstrap';

export default class IndexPage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Layout>
        <Row>
          <Col md={12}>Hello World!</Col>
        </Row>
      </Layout>
    );
  }
}
