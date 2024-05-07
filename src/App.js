import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RestaurantList from './resturent/RestaurantList';
import AboutUsPage from './resturent/aboutUs';
import MenuPage from './resturent/MenuPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/restaurant" exact element={<RestaurantList />} />
        <Route path="/" element={<AboutUsPage />} />
        <Route path="/menu/:restaurantId" element={<MenuPage />} />
      </Routes>
    </Router>
  );
}

export default App;






// import React, { useState } from 'react';
// import data from './data';

// function App() {
//   const [selectedRestaurant, setSelectedRestaurant] = useState(null);

//   const handleRestaurantClick = (id) => {
//     setSelectedRestaurant(id === selectedRestaurant ? null : id);
//   };

//   return (
//     <div className="App">
//       {data.map((restaurant) => (
//         <div key={restaurant.id} onClick={() => handleRestaurantClick(restaurant.id)}>
//           <h2>{restaurant.name}</h2>
//           <p>Rating: {restaurant.rating}</p>
//           <p>Location: {restaurant.location}</p>
//           <p>Available Dates: {restaurant.availableDates.join(', ')}</p>
//           <p>Phone Number: {restaurant.phoneNumber}</p>
//           <p>Website: <a href={restaurant.website}>{restaurant.website}</a></p>
//           {selectedRestaurant === restaurant.id && (
//             <div>
//               <p>Menu:</p>
//               <ul>
//                 {restaurant.menu.map((menuItem) => (
//                   <li key={menuItem.id}>{menuItem.name} - ${menuItem.price}</li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;


// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;
