import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';
import NavigationBar from './NavigationBar'; // Import the NavigationBar component
import '../styling/RestaurantList.css'; // Import your CSS file for styling
import Footer from './footer';

function RestaurantList() {
  return (
    <div>
      <NavigationBar /> {/* Include the NavigationBar component */}
      
      <div className="about-us">
        <h1>Welcome to Restaurant App!</h1>
        <p>We are dedicated to bringing you the best dining experiences.</p>
      </div>

      <div className="restaurant-list">
        <h1>Restaurants</h1>
        <div className="cards-container">
          {data.map((restaurant) => (
            <div key={restaurant.id} className="restaurant-card">
              <Link to={`/menu/${restaurant.id}`} className="card-link">
                <img src={restaurant.image} alt={restaurant.name} className="card-image" />
                <div className="card-details">
                  <h2 className="card-title">{restaurant.name}</h2>
                  <div className="card-rating">{renderStars(restaurant.rating)}</div>
                  <p className="card-location">{restaurant.location}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

const renderStars = (rating) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<span key={i} className="star filled"></span>);
    } else {
      stars.push(<span key={i} className="star"></span>);
    }
  }
  return stars;
};

export default RestaurantList;
