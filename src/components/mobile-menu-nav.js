import { useState } from 'react';
import Dropdown from 'react-dropdown';

const MobileMenuNav = (props) => {
  const options = props.navItems;
  const defaultOption = options[0];
  console.log(options);

  return (
    <Dropdown
      options={options}
      value={defaultOption}
      placeholder="Select an option"
    />
  );
};

export default MobileMenuNav;
