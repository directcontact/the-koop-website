const MenuItem = (props) => {
  return (
    <div className="menuitem col-md-4">
      <h3 className="menuitem__title">{props.item.name}</h3>
      <img src={props.item.src} className="menuitem__img" />
    </div>
  );
};

export default MenuItem;
