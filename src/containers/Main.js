import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import CertificationsSection from "./certificationsSection/CertificationsSection";
import AchievementsSection from "./achievementsSection/AchievementsSection";
import ProjectsSection from "./projectsSection/ProjectsSection";
import LeadershipSection from "./leadershipSection/LeadershipSection";
import Footer from "../components/footer/Footer";
import Education from "./education/Education";
import ScrollToTopButton from "./topbutton/Top";
import Profile from "./profile/Profile";
import SplashScreen from "./splashScreen/SplashScreen";
import { splashScreen } from "../portfolio";
import { StyleProvider } from "../contexts/StyleContext";
import "./Main.scss";

import TimelineExperience from "../containers/TimelineExperience/TimelineExperience";

const Main = () => {
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] = useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => clearTimeout(splashTimer);
    }
  }, []);

  return (
    <div className="dark-mode">
      <StyleProvider value={{ isDark: true }}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <>
            <Header />
            <Greeting />
            <ProjectsSection />
            <Education />
            <TimelineExperience />
            <CertificationsSection />
            <LeadershipSection />
            <AchievementsSection />
            <Profile />
            <Footer />
            <ScrollToTopButton />
          </>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;
