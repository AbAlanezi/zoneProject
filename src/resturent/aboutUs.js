import React from 'react';
import '../styling/AboutUsPage.css'; // Import your CSS file for styling
import NavigationBar from './NavigationBar';
import Footer from './footer';
import { Link } from 'react-router-dom';

const RestaurantCard = ({ imgUrl, cuisine, description }) => {
  return (
    <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
      <div className="cardImgContainer">
        <img className="cardImg" src={imgUrl} alt={cuisine} />
      </div>
      <div className="cardText">
        <p className="text-blk cardHeading">{cuisine}</p>
        <p className="text-blk cardSubHeading">{description}</p>
      </div>
    </div>
  );
};

function AboutUsPage() {
  return (
    <div>
      <NavigationBar />
      <div className="responsive-container-block bigContainer">
        <div className="responsive-container-block Container">
          <div className="imgContainer">
            {/* <img className="blueDots" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1176ab2f-1d64-4cab-86df-aaed5818bb37/dd9lfss-b16d98f9-a8b9-4503-8910-824c5ae91108.png/v1/fill/w_1280,h_960,q_80,strp/restaurant_food_app_design_by_uishohid_dd9lfss-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTYwIiwicGF0aCI6IlwvZlwvMTE3NmFiMmYtMWQ2NC00Y2FiLTg2ZGYtYWFlZDU4MThiYjM3XC9kZDlsZnNzLWIxNmQ5OGY5LWE4YjktNDUwMy04OTEwLTgyNGM1YWU5MTEwOC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.sDzcnwUKoEX6qr7p5EfzH_lw8bF6J1iLSLWdVxc2G70" alt="blue dots" /> */}
            <img className="mainImg" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1176ab2f-1d64-4cab-86df-aaed5818bb37/dd9lfss-b16d98f9-a8b9-4503-8910-824c5ae91108.png/v1/fill/w_1280,h_960,q_80,strp/restaurant_food_app_design_by_uishohid_dd9lfss-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTYwIiwicGF0aCI6IlwvZlwvMTE3NmFiMmYtMWQ2NC00Y2FiLTg2ZGYtYWFlZDU4MThiYjM3XC9kZDlsZnNzLWIxNmQ5OGY5LWE4YjktNDUwMy04OTEwLTgyNGM1YWU5MTEwOC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.sDzcnwUKoEX6qr7p5EfzH_lw8bF6J1iLSLWdVxc2G70" alt="main" />
          </div>
          <div className="responsive-container-block textSide">
            <p className="text-blk heading">Restaurant Classification</p>
            <p className="text-blk subHeading">
              Explore various cuisines and restaurants. Find your favorite spots and discover new tastes!
            </p>
            <RestaurantCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMuh6U2T86UIDxrjwkw99128g1nYcHAiC5wH-YIvwJMA&s" cuisine="Italian" description="Authentic Italian cuisine with a modern twist." />
            <RestaurantCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9xZwEsgltzYw6uSHzZs4HZaqyfHarY5i_Ar70atgPzA&s" cuisine="Mexican" description="Spicy and flavorful Mexican dishes for every palate." />
            <RestaurantCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4T7PXPxVDFuufiIsDVk4ttv_M3gEeebjJhdCULQQ_tA&s" cuisine="Indian" description="Rich and aromatic Indian curries and spices." />
            <RestaurantCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3qRkdJcp4URFej6XXpCEsYpT1mt0W-EipqkhilKRr7w&s" cuisine="Japanese" description="Sushi, sashimi, and more from the land of the rising sun." />
            <a href="#">
              <button className="explore"><Link to="/restaurant">Explore Restaurants</Link></button>
            </a>
          </div>
          <img className="redDots" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/cw3.svg" alt="red dots" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUsPage;
