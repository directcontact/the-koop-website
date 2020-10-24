import Header from './Header';
import { Container, Row, Col } from 'react-bootstrap';

const Layout = (props) => {
  return (
    <>
      <Header />
      <Container fluid="md">{props.children}</Container>
    </>
  );
};

export default Layout;
