import React from "react";
import  EventPage  from "../components/EventsPage";
import Hero from "../components/CompetitionHero";
import Footer from "../components/Footer";

function Home() {
  return (
    <div style={{background:"radial-gradient(circle at center, #151515 10%, #0d0d0d 100%)"}}>
        <Hero/>
        <EventPage/>
        <Footer/>
    </div>
  );
}

export default Home;