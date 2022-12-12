import React from "react"
import { useSelector, useDispatch } from "react-redux"

import Card from "../Card"

const Header = () => {
  const totalValueData = useSelector((state) => state.totalValue.data)

  // console.log(`???=>totalValueData:${totalValueData}`)
  return (
    <div>
      <div>Payouts Overview</div>
      <div style={{ display: "flex" }}>
        <Card title="Total Paid Payouts" value={totalValueData.paid} />
        <Card
          title="Total Unpaid Payouts"
          value={totalValueData.unpaid}
        />
        <Card
          title="Total Ready Payouts"
          value={totalValueData.ready}
          isReadyPayouts={true}
        />
      </div>
    </div>
  )
}

export default Header
