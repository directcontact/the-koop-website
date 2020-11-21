import Header from './Header';
import Nav from './Nav';

const Layout = (props) => {
  return (
    <>
      <div className="cover-container d-flex p-3 mx-auto flex-column max-height">
        {props.children}
      </div>
    </>
  );
};

export default Layout;
