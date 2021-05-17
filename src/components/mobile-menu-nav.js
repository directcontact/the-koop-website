import { useState } from 'react';
import Select from 'react-select';

const MobileMenuNav = (props) => {
  const navItemsOptions = [
    'CHICKEN',
    'APPETIZERS',
    'RICE DISHES',
    'TROTTER',
    'SOUPS',
    'SIDES',
  ];
  const options = navItemsOptions.map((option) => {
    return {
      label: option,
      value: option,
    };
  });
  console.log(options);
  const [selectedNav, selectedNavChanged] = useState(null);

  return (
    <Select
      defaultValue={selectedNav}
      onChange={selectedNavChanged}
      options={options}
      instanceId="mobilenavmenu"
    />
  );
};

export default MobileMenuNav;
