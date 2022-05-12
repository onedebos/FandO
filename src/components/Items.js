import React from "react"

const Items = ({ items }) => {
  return (
    <div className="divide-y divide-gray-300 divide-opacity-50 p-8 md:p-0 m-auto md:max-w-2xl lg:max-w-5xl">
      {items.allItemsJson.nodes.map(item => {
        return (
          <div className="grid md:grid-cols-6 p-6 m-auto" key={item.id}>
            <div className="md:col-span-1">
              <img
                src={`${item.imageUrl}`}
                alt="Femi and Olamide's wedding register"
                data-sal="slide-up"
                data-sal-delay="5"
                data-sal-easing="ease"
                className="sal-disabled md:sal-animate"
              />
            </div>
            <div className="md:col-span-2 lg:col-span-2 ml-2">
              <p className="font-semibold note-text mt-4 md:ml-2 lg:text-xl">
                {item.itemName}
              </p>
              <p className="text-sm text-gray-600 md:ml-2">
                {item.unitAndColor}
              </p>
            </div>
            <div className="md:col-span-1 lg:col-span-1 ml-2 md:ml-2 font-medium text-gray-600 md:mt-5">
              {item.price}
            </div>
            <div className="md:col-span-2 lg:col-span-2">
              <div className="col-span-6 mt-4 md:mt-5">
                <a
                  href="https://flutterwave.com/pay/femiolamideollf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="w-full md:w-auto list py-2 px-10 font-bold bg-black text-red-300 hover:bg-yellow-500 hover:text-black font-bold rounded outline-none ">
                    GIFT US
                  </button>
                </a>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Items
