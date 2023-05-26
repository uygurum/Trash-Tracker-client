import React from "react";
import NavigationBar from "../navigation/NavigationBar";
import Footer from "../components/footer/Footer";
import FavoritesView from "../components/favoritesView/FavoritesView";

const Favorites = () => {
  return (
    <div>
      <NavigationBar />
      <FavoritesView />
      <Footer />
    </div>
  );
};

export default Favorites;
