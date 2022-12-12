import MenuItems from "./MenuItems"
import { menuItems } from "../../data/constants"

import "./index.css"

const NavBar = () => {
  return (
    <nav>
      <ul className="menus">
        {menuItems.map((menu, index) => {
          const depthLevel = 0
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />
        })}
      </ul>
    </nav>
  )
}

export default NavBar
