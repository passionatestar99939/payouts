import React from "react"

import {sortBy} from "../../data/constants"

const SearchBar = () => {
  return (
    <div>
      <select
        className="ms_select"
        id="cutbacksStr"
        // onChange={(e) => handleChangeWindowOption(e)}
      >
        {Object.keys(sortBy).map((value, index) => (
          <option
            key={index}
            value={value}
            // selected={
            //   value === measuresheetData.windowTable.cutbacksStr
            //     ? "selected"
            //     : ""
            // }
          >
            {value}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SearchBar
