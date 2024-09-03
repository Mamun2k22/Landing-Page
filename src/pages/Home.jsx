import React from "react";

import { Nav } from "./Nav";
import MusicPlayer from "./MusicPlayer";
import Cover from "./DiscoverPrice";
import Plan from "./Plan";
import JoinUsForm from "./JoinUsForm";
import Price from "./Price";
import Contact from "./Contact";
import DiscoverPrice from "./DiscoverPrice";

const Home = () => {
  return (
    <div>
      <Nav />

      <MusicPlayer />
      
      <DiscoverPrice />
      <Plan />
     

      <JoinUsForm/>
      

      <Contact />
     
      {/* <ContactTwo /> */}
    </div>
  );
};

export default Home;
