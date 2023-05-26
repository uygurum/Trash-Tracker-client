import React from "react";
import { Container, Row } from "react-bootstrap";
import { footerImg } from "./FooterImg";

function Footer() {
  return (
    <footer
      className="text-white position-fixed bottom-0 w-100"
      style={{ backgroundColor: "#e1e1e1" }}
    >
      <Container>
        <Row className="justify-content-center align-items-center">
          <div xs={12} sm={6} md={4} className="text-center">
            <p className="m-2 text-danger">&copy; 2023 Trash Tracker</p>
          </div>
          <div xs={12} sm={6} md={4} className="text-center">
            <div className="d-flex justify-content-center align-items-center">
              {footerImg.map((image) => (
                <div key={image.id} className="dropdown-item">
                  {image.img && (
                    <img
                      src={`footerImg/${image.img}.png`}
                      alt={image.alt}
                      style={{
                        height: "50px",
                        width: "50px",
                        marginRight: "5px",
                      }}
                    />
                  )}
                  {!image.img && image.alt}
                </div>
              ))}
            </div>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
