import React from 'react';
import Image from 'next/image';

const MenuItem = (props) => {
  return (
    <div className="menu__list-item">
      <div className="card">
        <img
          src={props.item.src}
          className="card-img-top menu__list-item--img"
        />
        <h5 className="card-title">{props.item.name}</h5>
      </div>
    </div>
  );
};

export default MenuItem;
