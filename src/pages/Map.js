import React from "react";
import NavigationBar from "../navigation/NavigationBar";
import Footer from "../components/footer/Footer";
import { MapView } from "../components/mapView/MapView";

const Map = () => {
  return (
    <div>
      <NavigationBar />
      <MapView />
      <Footer />
    </div>
  );
};

export default Map;
