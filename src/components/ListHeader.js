import React from "react"

const ListHeader = ({ items }) => {
  return (
    <div
      className="bg-white m-1 lg:m-24 p-6 rounded-lg list mb-20"
      style={{
        margin: `auto auto`,
        maxWidth: 960,
      }}
    >
      <p className="mt-0 pt-0 font-medium">
        We have <span className="text-yellow-800">{items.length} items</span>{" "}
        currently in our wishlist list.
      </p>
      <hr className="mt-4" />
      <div className="mt-8 font-semibold text-gray-600 list lg:grid-cols-4  grid-cols-6 hidden md:grid ">
        <div className="md:col-span-3 lg:col-span-2 md:text-2xl text-black">
          ITEM
        </div>
        <div className="md:col-span-1 lg:col-span-1 md:text-2xl text-black">
          PRICE
        </div>
        <div className="md:col-span-2 lg:col-span-1"></div>
      </div>
    </div>
  )
}

export default ListHeader
