import { useSelector } from "react-redux"
import MenuItems from "./MenuItems"
import { menuItems } from "../../data/constants"

import "./style.css"

const NavBar = () => {
  const tableData = useSelector((state) => state.mainTable.data)
  return (
    <nav>
      <ul className="menus">
        {menuItems.map((menu, index) => {
          const depthLevel = 0
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />
        })}
        {tableData.length} pending payouts
      </ul>
    </nav>
  )
}

export default NavBar
