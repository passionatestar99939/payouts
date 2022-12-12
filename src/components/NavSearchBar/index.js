import React from "react"

import NavBar from "../NavBar"
import SearchBar from "../SearchBar"

const NavSearchBar = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <NavBar />
      <SearchBar />
    </div>
  )
}

export default NavSearchBar
