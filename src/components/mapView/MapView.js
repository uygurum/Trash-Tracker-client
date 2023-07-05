import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { SearchContext } from "../../contexts/SearchContext";
import { loadGoogleMapsAPI } from "./loadGoogleMapsAPI"; // Özel bir yardımcı fonksiyon

const MapView = () => {
  const { t } = useTranslation();
  const { searchResults } = useContext(SearchContext);
  const [center, setCenter] = useState({ lat: 46.948, lng: 7.4474 }); // Başlangıç merkez koordinatları
  const [zoom, setZoom] = useState(8); // Zoom düzeyi

  useEffect(() => {
    if (searchResults.length > 0) {
      // Arama sonuçları varsa merkez noktayı ve zoom düzeyini güncelle
      const coordinates = searchResults.map((result) => ({
        lat: result.latitude,
        lng: result.longitude,
      }));

      // En uygun zoom düzeyini hesapla
      const bounds = new window.google.maps.LatLngBounds();
      coordinates.forEach((coord) => {
        bounds.extend(coord);
      });

      const newCenter = bounds.getCenter();
      setCenter({ lat: newCenter.lat(), lng: newCenter.lng() });
      setZoom(calculateZoomLevel(bounds));
    }
  }, [searchResults]);

  useEffect(() => {
    loadGoogleMapsAPI().then(() => {
      // Google Haritalar API yüklendiğinde çalışacak kod
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: center,
        zoom: zoom,
      });

      // Tüm koordinatları işle
      searchResults.forEach((data) => {
        const marker = new window.google.maps.Marker({
          position: { lat: data.latitude, lng: data.longitude },
          map: map,
        });
      });
    });
  }, [center, zoom, searchResults]);

  // Zoom düzeyini hesaplamak için yardımcı fonksiyon
  const calculateZoomLevel = (bounds) => {
    const WORLD_DIM = { height: 256, width: 256 };
    const ZOOM_MAX = 21;

    const ne = bounds.getNorthEast();
    const sw = bounds.getSouthWest();

    const latFraction =
      (Math.abs(ne.lat() - sw.lat()) / 180) * WORLD_DIM.height;
    const lngFraction = (Math.abs(ne.lng() - sw.lng()) / 360) * WORLD_DIM.width;

    const latZoom = Math.ceil(Math.log2(WORLD_DIM.height / latFraction));
    const lngZoom = Math.ceil(Math.log2(WORLD_DIM.width / lngFraction));

    return Math.min(latZoom, lngZoom, ZOOM_MAX);
  };

  return <div id="map" style={{ width: "100%", height: "100vh" }}></div>;
};

export default MapView;
