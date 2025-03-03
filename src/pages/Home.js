import {React,useEffect, useState} from "react";
import Hero from "../components/Hero";
import Desc from "../components/Desc";
import Footer from "../components/Footer";
import Middele from "../components/Middele";
import audioFile from "../assets/gateOpen (1).mp3";
function Home() {
  useState(() => {
    const audio = new Audio(audioFile);
    
    // Play audio when component mounts
    const playAudio = async () => {
      try {
        await audio.play();
      } catch (error) {
        console.error("Error playing audio:", error);
      }
    };

    playAudio(); // Call function to play audio

    return () => {
      // Clean up the audio on unmount
      audio.pause();
      audio.currentTime = 0; // Reset playback time
    };
  }, []);
  return (
    <div>
      <Hero />
      <Desc />
      <Middele />
      <Footer />
    </div>
  );
}

export default Home;
