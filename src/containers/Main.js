import React, {useEffect, useState} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
// import StackProgress from "./skillProgress/skillProgress";
// import WorkExperience from "./workExperience/WorkExperience";
// import Projects from "./projects/Projects";
// import StartupProject from "./StartupProjects/StartupProject";
import CertificationsSection from "./certificationsSection/CertificationsSection";
import AchievementsSection from "./achievementsSection/AchievementsSection";
// import Achievement from "./projectsSection/ProjectsSection";
import ProjectsSection from "./projectsSection/ProjectsSection";
import LeadershipSection from "./leadershipSection/LeadershipSection";


// import Blogs from "./blogs/Blogs";                 # removed for now
import Footer from "../components/footer/Footer";
// import Talks from "./talks/Talks";
// import Podcast from "./podcast/Podcast";           # removed for now
import Education from "./education/Education";
import ScrollToTopButton from "./topbutton/Top";
// import Twitter from "./twitter-embed/twitter";     # removed for now
import Profile from "./profile/Profile";
import SplashScreen from "./splashScreen/SplashScreen";
import {splashScreen} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import "./Main.scss";

//////////////////////////////////////////////////////////////////////////////////
import TimelineExperience from "../containers/TimelineExperience/TimelineExperience";
///////////////////////////////////////////////////////////////////////////////////



const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <>
            <Header />
            <Greeting />
            <Skills />
            {/* <StackProgress />  */}
            <ProjectsSection />
            <Education />
            <TimelineExperience />    {/* # moved the work ex timline afte the education */}           
            {/* <Projects /> */}
            <CertificationsSection />
            <AchievementsSection />
            {/* <WorkExperience />         this is the old work experience and I need to convert this into the extra curriculars section */}
            {/* <StartupProject /> */}
            {/* <Blogs />         # not needed in the curent portfolio */}
            {/*<Talks />          # not needed in the curent portfolio */}
            {/* <Twitter />       # not needed in the current portfolio*/}
            {/* <Podcast />       # not needed in the current portfolio*/}
            <LeadershipSection />
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
