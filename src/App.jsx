// src/App.jsx
import React from "react";
import { Navigation } from "./components/Navigation";
import { Header } from "./components/Header";
import { BodyParagraph } from "./components/BodyParagraph";
import { Footer } from "./components/Footer";
import CardInfo from "./components/CardInfo";

export const App = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <BodyParagraph />
      <CardInfo /> 
      <Footer />
    </div>
  );
};


