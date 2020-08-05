import React from 'react';
import { Menu } from '@progress/kendo-react-layout';
import { items } from './items.js';

function AppMenu() {
  return (
    <>
      <Menu primary={true} items={items} />
    </>
  );
}

export default AppMenu;
