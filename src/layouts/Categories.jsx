import React from "react";
import { Menu } from 'semantic-ui-react'

export default function Categories() {
  return (
    <div>
      <Menu pointing vertical>
        <Menu.Item
          name="Category1"
        />
        <Menu.Item
          name="Category2"
        />
        <Menu.Item
          name="Category3"
        />
      </Menu>
    </div>
  );
}
