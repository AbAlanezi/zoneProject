import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import resturent from '../data';
import '../styling/MenuPage.css';
import NavigationBar from './NavigationBar';
import Footer from './footer';

function MenuPage() {
  const { restaurantId } = useParams();
  const [restaurant, setRestaurant] = useState(resturent.find(restaurant => restaurant.id === parseInt(restaurantId)));
  const [userRating, setUserRating] = useState(restaurant.rating);

  const handleRatingChange = (newRating) => {
    setUserRating(newRating);
    setRestaurant(prevRestaurant => ({
      ...prevRestaurant,
      rating: newRating
    }));
  };

  if (!restaurant) {
    return <div>Restaurant not found</div>;
  }

  return (
    <div>
      <NavigationBar />
      <div className="menu-page">
        <div className="restaurant-header">
          <h1 className="restaurant-name">{restaurant.name}</h1>
          <img src={restaurant.image} alt="Restaurant Logo" className="restaurant-logo" />
          <div className="rating-section">
            <span className="rating-label">Rating:</span>
            <StarRating rating={userRating} onRatingChange={handleRatingChange} />
          </div>
        </div>
        <h2 className="section-title">Available Dates</h2>
        <p className="item-available-dates">{restaurant.availableDates.join(', ')}</p>
        <h2 className="section-title">Menu</h2>
        <div className="menu-list">
          {restaurant.menu.map((menuItem) => (
            <div key={menuItem.id} className="menu-item">
              <div className="item-image">
                <img src={menuItem.image} alt={menuItem.name} className="item-img" />
              </div>
              <div className="item-details">
                <span className="item-name">{menuItem.name}</span>
                <span className="item-description">{menuItem.description}</span>
                <span className="item-price">${menuItem.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

const StarRating = ({ rating, onRatingChange }) => {
  const handleClick = (newRating) => {
    if (onRatingChange) {
      onRatingChange(newRating);
    }
  };

  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          className={index < rating ? "star filled" : "star"}
          onClick={() => handleClick(index + 1)}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default MenuPage;