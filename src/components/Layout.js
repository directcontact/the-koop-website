import Header from './Header';
import Nav from './Nav';

const Layout = (props) => {
  return (
    <>
      <Header />
      <Nav />
      <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
        {props.children}
      </div>
    </>
  );
};

export default Layout;
