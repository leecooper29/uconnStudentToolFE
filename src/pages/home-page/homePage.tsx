import "./homepage.css";
// @ts-ignore: allow importing image asset without type declarations
// import image_one from "../assets/husky.jpg"
import React from "react";
import Banner from "./ui/Banner";
import WelcomeSection from "./ui/WelcomeSection";
import RecentEvents from "./ui/RecentEvents";
import { recentEvents } from "./ui/data";
// import MainNav from "../../components/main-nav/mainNav";

function HomePage() {
  return (
    <>
      <section>
        <Banner />
        <WelcomeSection />
        <div className="event-grid">
          <RecentEvents events={recentEvents} />
        </div>
      </section >
    </>
  );
}
export default HomePage;
