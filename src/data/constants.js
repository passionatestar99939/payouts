export const sortBy = {
  "Revenue Generated": ["Highest first", "Lowest first"],
  "Most Recent Referral": ["Newest first", "Oldest first"],
}

export const filterBy = ["All pending payouts", "Ready Payouts", "No Leaks"]

export const actions = ["Mark as paid", "Reject", "Send payouts"]

export const tableHeaders = [
  "Affiliate Name",
  "Most recent referral",
  "Revenue Generated",
  "Paid Payouts",
  "Unpaid Payouts",
  "Ready Payouts",
  "Breakdown",
  "Type",
  "Actions",
]

export const menuItems = [
  {
    title: "Sort by",
    url: "/",
    submenu: [
      {
        title: "Revenue Generated",
        submenu: [
          {
            title: "Highest first",
          },
          {
            title: "Lowest first",
          },
        ],
      },
      {
        title: "Most Recent Feferral",
        submenu: [
          {
            title: "Newest first",
          },
          {
            title: "Oldest first",
          },
        ],
      },
    ],
  },
  {
    title: "Filter by",
    submenu: [
      {
        title: "All pending payouts",
      },
      {
        title: "Ready Payouts",
      },
      {
        title: "No Leaks",
      },
    ],
  },
  {
    title: "Actions",
    submenu: [
      { title: "Mark as paid" },
      { title: "Reject" },
      { title: "Send payouts" },
    ],
  },
]