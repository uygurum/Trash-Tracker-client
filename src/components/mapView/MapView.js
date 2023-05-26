import React from "react";

export const MapView = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797221.2300920845!2d5.981405624908434!3d46.79127685704961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c64ef6f596d61%3A0x5c56b5110fcb7b15!2sSwitzerland!5e0!3m2!1sen!2sch!4v1683733299823!5m2!1sen!2sch"
      style={{ border: 0, width: "100%", height: "100vh", overflow: "scroll" }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};
