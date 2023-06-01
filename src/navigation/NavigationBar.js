import React, { useEffect, useState } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../Trash-tracker.png";
import RecyclingSearch from "../components/RecyclingSearch/RecyclingSearch";
import TypesOfMaterials from "../components/typesOfMaterials/TypesOfMaterials";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../components/logoutButton/LogoutButton";
import LoginButton from "../components/loginButton/LoginButton";
import LanguageOption from "../components/languageOption/LanguageOption";
import { useTranslation } from "react-i18next";
import Profile from "../components/profile/Profile";

function NavigationBar() {
  const { t } = useTranslation();
  const { isAuthenticated, user, isLoading } = useAuth0();


  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      <div class="d-flex justify-content-end align-items-center">
        <LanguageOption />
      </div>
      <div className="container d-flex">
        <div className="col-sm-8 col-md-6 col-lg-4 d-flex align-items-center">
          <Nav.Link as={NavLink} to="/" exact>
            <div className="logo-container">
              <img
                className="App-logo"
                src={logo}
                alt="My Logo"
                style={{ width: "150px", height: "auto" }}
              />
            </div>
          </Nav.Link>

          <h3 className="title my-auto" style={{ marginLeft: "-10px" }}>
            Trash Tracker
          </h3>
        </div>
        <div class="col-sm-8 col-md-6 col-lg-4 mx-auto my-auto">
          <RecyclingSearch />
          <TypesOfMaterials />
        </div>
      </div>

      <Navbar variant="dark" expand="lg" style={{ backgroundColor: "#27a64a" }}>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/map">
                {t("Map")}
              </Nav.Link>
              <Nav.Link as={NavLink} to="/list">
                {t("List")}
              </Nav.Link>
              <Nav.Link as={NavLink} to="/collectedItems">
                {t("Collected items")}
              </Nav.Link>
              <Nav.Link as={NavLink} to="/favorites">
                {t("Favorites")}
              </Nav.Link>
              <Nav.Link as={NavLink} to="/info">
                {t("Info")}
              </Nav.Link>
            </Nav>

            <Nav>
              <Profile />
              {isAuthenticated ? <LogoutButton /> : <LoginButton />}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
