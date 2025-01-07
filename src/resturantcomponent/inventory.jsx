import RestaurantTables from "../resturantcomponent/restaurant-transactionTable"

import RestaurantSidebar from "./restaurantSidebar"


const inventory = () => {
  return (
    <div className='flex flex-col lg:flex-row min-h-screen bg-gray-100'>
      <RestaurantSidebar/>
        <div className='flex-1 p-6 mt-1'>

     <RestaurantTables/>
        </div>
    </div>
  )
}

export default inventory
