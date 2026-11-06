import "./index.css";
// @ts-ignore: allow importing image asset without type declarations
// import image_one from "../assets/husky.jpg"
import React from "react";
import Banner from "./banner/index";
import RecentEvents from "./recent/RecentEvents";
import { recentEvents } from "../../mock-data/homePageData";
import InfoGrid from "./info/index"

function HomePage() {
  return (
    <>
      <section>
        <Banner bannerText={"welcome to the Uconn student tool."}/>
        <div className="">
          <InfoGrid description="Explore tools and information for UConn students." />
          {/*  pass in the info from the grid (props) */}   
        </div>
          <div className="event-grid">
            <RecentEvents events={recentEvents} title={"Recent Events"} />
         </div>
          <div className="career-grid">
            {/* career center and resources */}
          </div>
      </section >
    </>
  );
}


export default HomePage;
