import React from "react";
import NavigationBar from "../navigation/NavigationBar";
import CollectedItemsList from "../components/collectedItemsList/CollectedItemsList";
import Footer from "../components/footer/Footer";

const CollectedItems = () => {
  return (
    <div>
      <NavigationBar />
      <CollectedItemsList />
      <Footer />
    </div>
  );
};

export default CollectedItems;
