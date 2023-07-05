import React from "react";
import NavigationBar from "../navigation/NavigationBar";
import Footer from "../components/footer/Footer";
import DashboardView from "../components/dashboardView/DashboardView";

const Dashboard = () => {
  return (
    <>
      <NavigationBar />
      <DashboardView />
      <Footer />
    </>
  );
};

export default Dashboard;
