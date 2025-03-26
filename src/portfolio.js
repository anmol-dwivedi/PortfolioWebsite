/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Anmol Dwivedi",
  title: "Hi all, I'm Anmol",
  subTitle: emoji(
    "A passionate Data Scientist 📊 with experience in building data-driven solutions, predictive models, and interactive dashboards using Python, SQL, Power BI, and cloud platforms like AWS ☁️. Always curious, always learning!"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1TVsSlA0dXkRQEvS5-jgKeRYHY4qshL7X/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

//////////////////////////////////////////////////////////////////////////////////////////////

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/anmol-dwivedi",
  linkedin: "https://www.linkedin.com/in/anmol-dwivedi-2537691a0/",
  gmail: "dwivedi.anmol1996@gmail.com",
  instagram: "https://www.instagram.com/anmoldwivedi1996/",
  facebook: "https://www.facebook.com/anmol.dwivedi.39/",
  // kaggle:
  // medium: "", // not provided
  // stackoverflow: "", // not provided

  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

//////////////////////////////////////////////////////////////////////////////////////////////

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "DATA SCIENTIST WHO BUILDS, SHIPS, AND DEPLOYS IMPACTFUL ML SOLUTIONS",
  skills: [
    emoji(
      "⚡ Build scalable machine learning models for regression, classification, and recommendation systems using Python"
    ),
    emoji(
      "⚡ Design and automate end-to-end data pipelines using SQL, PySpark, and Airflow on cloud platforms like AWS"
    ),
    emoji(
      "⚡ Develop and deploy data science apps with Streamlit and FastAPI to enable business decision-making in real-time"
    ),
    emoji(
      "⚡ Tell compelling stories using Power BI and Tableau dashboards, driving insights from millions of rows of raw data"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "PySpark",
      fontAwesomeClassname: "fas fa-fire" // symbolic for Spark
    },
    {
      skillName: "TensorFlow",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      // skillName: "PyTorch",
      // fontAwesomeClassname: "fas fa-brain" // same brain icon for DL frameworks
    },
    {
      skillName: "Scikit-Learn",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
    {
      skillName: "Airflow",
      fontAwesomeClassname: "fas fa-wind" // symbolic for workflow automation
    },
    {
      skillName: "Streamlit",
      fontAwesomeClassname: "fas fa-desktop"
    },
    {
      skillName: "FastAPI",
      fontAwesomeClassname: "fas fa-rocket"
    },
    {
      skillName: "Power BI",
      fontAwesomeClassname: "fas fa-chart-bar"
    },
    {
      skillName: "Tableau",
      fontAwesomeClassname: "fas fa-chart-pie"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Anaconda",
      fontAwesomeClassname: "fas fa-circle-notch" // symbolic, since no official icon
    },
    {
      skillName: "JIRA",
      fontAwesomeClassname: "fas fa-tasks" // symbolic for project/task management
    }
  ],
  display: true
  // Set false to hide this section, defaults to true
};

//////////////////////////////////////////////////////////////////////////////////////////////

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Texas at Dallas",
      logo: require("./assets/images/utd_logo.png"),
      subHeader: "Master of Science in Business Analytics & AI",
      duration: "August 2023 - May 2025",
      gpa: "3.96/4.00",
      descBullets: [
        "Pursuing Master’s in Business Analytics and Artificial Intelligence (GPA: 3.96) with advanced coursework in Machine Learning, Predictive Modeling, and Cloud Computing using AWS and BigQuery.",
        "Selected as a Dean’s Excellence Scholar and appointed as a Graduate Teaching Assistant for Predictive Analytics and AWS Cloud Fundamentals, mentoring students and supporting certification prep.",
        "Held leadership roles including Vice President of Infinity Lion’s Club and Sergeant at Arms, UTD Toastmasters, and actively engaged in Envision Data Storytelling Club and the I-Friend Program.",
        "Applied advanced analytics and AI techniques through hands-on projects in predictive modeling, neural networks, and LLM-based NLP pipelines using Python, R, PyTorch, TensorFlow, and MLflow."
      ]
    },
    {
      schoolName: "Great Lakes Institute of Management",
      logo: require("./assets/images/gl-logo.png"),
      subHeader: "Master of Science in Data Science",
      duration: "January 2020 - Feb 2021",
      gpa: "4.00/4.00",
      descBullets: [
        "Completed a rigorous one-year Data Science program focused on Python, SQL, Tableau, statistics, data mining, and machine learning; ranked 3rd in a cohort of 60 students based on academic performance and project evaluations.",
        "Developed strong expertise in data manipulation, wrangling, and analysis using Python (Pandas, NumPy) and SQL, working with large, messy datasets in graded assignments and real-world case studies.",
        "Ranked Top 10 in a national-level hackathon for predicting restaurant turnover using regression modeling, data wrangling, and advanced feature engineering techniques.",
        "Applied data mining and machine learning algorithms (regression, classification, clustering) across multiple projects, including a Customer Churn Prediction capstone using feature engineering, model tuning, and cross-validation."
      ]
    },
    {
      schoolName: "KIIT University",
      logo: require("./assets/images/KIIT-Logo.png"),
      subHeader: "Bachelor of Science in Mechanical Engineering",
      duration: "September 2013 - April 2017",
      gpa: "8.89/10.00",
      descBullets: [
        "Designed and simulated complex mechanical components using tools like AutoCAD, CATIA, Ansys, and SolidWorks for academic projects focused on aerodynamics and propulsion systems.President at KIIT Aeronautical Society",
        "Led the KIIT Aeronautical Society as President, organizing 10+ technical workshops and competitions in aeromodelling, CFD, and propulsion design; boosted student engagement in core mechanical domains by 40%."
      ]
    }
  ]
};

//////////////////////////////////////////////////////////////////////////////////////////////

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

//////////////////////////////////////////////////////////////////////////////////////////////

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Graduate Teaching Assistant",
      company: "University of Texas at Dallas",
      companylogo: require("./assets/images/utd_logo.png"),
      date: "Aug 2024 – Present",
      desc: "Graduate Teaching Assistant for Predictive Analytics under Proff Shervin Tehrani and AWS Cloud Fundamentals under Proff. Abdul Raheem",
      descBullets: [
        "Coordinate and communicate important course announcements to ensure timely and effective student communication.",
        "Support and mentor students by addressing their questions and clarifying doubts to facilitate a deeper understanding of course concepts.",
        "Evaluate, grade, and provide feedback on assignments and exams to help students improve their performance and grasp of the subject matter."
      ]
    },
    {
      role: "Jr. Data Scientist",
      company: "Grant Thornton",
      companylogo: require("./assets/images/gt_logo.png"),
      date: "mar 2022 – Aug 2023",
      desc: "Worked as a Business Analyst, delivering data-driven audit automation, financial risk analysis, and executive reporting solutions for clients across banking and insurance domains.",
      descBullets: [
        "Designed and deployed 50+ Power BI dashboards to automate internal audit processes, reducing audit turnaround time by 30% and surfacing $500K in potential financial risks.",
        "Led a pre-implementation audit review for a $2B Commercial & Industrial Loan Portfolio’s CECL model, identifying compliance gaps and risk exposure.",
        "Developed Key Risk Indicators (KRIs) and continuous monitoring dashboards for an insurance client, improving real-time oversight of underwriting and claims metrics.",
        ""
      ]
    },
    {
      role: "Data Analyst",
      company: "L S Digital Pvt Limited",
      companylogo: require("./assets/images/ls.png"),
      date: "Feb 2021 – Mar 2022",
      desc: "Served as the first Data Analyst on the Data Solutions team, spearheading the development of marketing intelligence and automation frameworks from the ground up using Python, AWS, and BI tools for multi-channel digital campaigns.",
      descBullets: [
        "Built a Python-based proof-of-concept lead scoring model, increasing qualified leads by 10% and improving conversion targeting for the sales team.",
        "Automated data ingestion pipelines from 20+ marketing sources using AWS (Lambda, S3, Glue), reducing manual effort and enabling real-time dashboarding.",
        "Developed interactive AWS Quicksight dashboards for performance tracking and insights, eliminating 80+ hours of monthly manual reporting."
      ]
    },
    {
      role: "Application Development Associate",
      company: "Accenture",
      companylogo: require("./assets/images/accenture.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Worked as an Application Development Associate, leveraging Python and SQL to process large datasets and improve reporting efficiency in enterprise data systems.",
      descBullets: [
        "Gained Hands on Experience on Python, SQL, HTML, CSS, JavaScript",
        "Analyzed and processed large datasets using Python, SQL, and HTML to generate actionable insights, improving reporting efficiency by 10% for a client-facing application."
      ]
    }
  ]
};

//////////////////////////////////////////////////////////////////////////////////////////////

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

//////////////////////////////////////////////////////////////////////////////////////////////

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Projects 🏆 "),
  subtitle:
    "Some Cool Projects that I have worked on !",

  achievementsCards: [
    {
      title: "Project 1",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "GitHub Code",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Live Demo",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Project 2",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "GitHub Code",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Live Demo",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        }
      ]
    },

    {
      title: "Project 3",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "GitHub Code",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Live Demo",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        }
      ]
    },

    {
      title: "project 4",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "GitHub Code",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Live Demo",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        }
      ]
    },

    {
      title: "Project 5",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "GitHub Code",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Live Demo",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        }
      ]
    },

    {
      title: "Project 6",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "GitHub Code",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Live Demo",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};



// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};






// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};








// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-4699619975",
  email_address: "dwivedi.anmol1996@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

// /////////////////////////////////////////////////////////////////////////
const timelineExperience = [
  {
    title: "Graduate Teaching Assistant",
    company: "UT Dallas",
    location: "Dallas, TX",
    date: "Aug 2024 – Present",
    icon: require("./assets/images/utd_logo.png"),
    summary: "Graduate Teaching Assistant for Predictive Analytics under Proff Shervin Tehrani and AWS Cloud Fundamentals under Proff. Abdul Raheem",
    description: [
      "Coordinate and communicate important course announcements to ensure timely and effective student communication.",
      "Support and mentor students by addressing their questions and clarifying doubts to facilitate a deeper understanding of course concepts.",
      "Evaluate, grade, and provide feedback on assignments and exams to help students improve their performance and grasp of the subject matter."
    ]
  },
  {
    title: "Jr. Data Scientist",
    company: "Grant Thornton",
    location: "Bengaluru, India",
    date: "Mar 2022 – Aug 2023",
    icon: require("./assets/images/gt_logo.png"),
    summary: "Worked as a Data Scientist, delivering data-driven audit automation, financial risk analysis, and executive reporting solutions for clients across banking and insurance domains.",
    description: [
      "Designed and deployed 50+ Power BI dashboards to automate internal audit processes, reducing audit turnaround time by 30% and surfacing $500K in potential financial risks.",
      "Led a pre-implementation audit review for a $2B Commercial & Industrial Loan Portfolio’s CECL model, identifying compliance gaps and risk exposure.",
      "Developed Key Risk Indicators (KRIs) and continuous monitoring dashboards for an insurance client, improving real-time oversight of underwriting and claims metrics."
    ]
  },
  {
    title: "Data Analyst",
    company: "LS Digital",
    location: "Mumbai, India",
    date: "Feb 2021 – Mar 2022",
    icon: require("./assets/images/ls.png"),
    summary: "Served as the first Data Analyst on the Data Solutions team, spearheading the development of marketing intelligence and automation frameworks from the ground up using Python, AWS, and BI tools for multi-channel digital campaigns.",
    description: [
      "Built a Python-based proof-of-concept lead scoring model, increasing qualified leads by 10% and improving conversion targeting for the sales team.",
      "Automated data ingestion pipelines from 20+ marketing sources using AWS (Lambda, S3, Glue), reducing manual effort and enabling real-time dashboarding.",
      "Developed interactive AWS Quicksight dashboards for performance tracking and insights, eliminating 80+ hours of monthly manual reporting."
    ]
  },
  {
    title: "Application Development Associate",
    company: "Accenture",
    location: "Hyderabad, India",
    date: "Apr 2018 – Aug 2018",
    icon: require("./assets/images/accenture.png"),
    summary: "Worked on front-end and back-end development to support enterprise solutions.",
    description: [
      "Gained Hands on Experience on Python, SQL, HTML, CSS, JavaScript",
      "Analyzed and processed large datasets using Python, SQL, and HTML to generate actionable insights, improving reporting efficiency by 10% for a client-facing application.", 
    ]
  }
];



/////////////////////////////////////////////////////////////////////////


export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection,
  timelineExperience
};
