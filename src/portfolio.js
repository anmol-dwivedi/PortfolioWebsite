/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import projectsSection from "./projectsData";



import lionsClubImage from "./assets/images/IMG-20231014-WA0039.png";
import toastmastersImage from "./assets/images/TM_Conference.png";
import kiitImage from "./assets/images/IMG_20180406_114356872_HDR.png";

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
  resumeLink: process.env.PUBLIC_URL + "/Anmol_Resume_Full_Time_Data_Scientist.pdf", // Set to empty to hide the button
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
  youtube: "https://www.youtube.com/@anmoldwivedi7205",
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
  display: false
  // Set false to hide this section, defaults to true
};

//////////////////////////////////////////////////////////////////////////////////////////////

// Education Section

const educationInfo = {
  display: true,
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
      ],
      footerLinks: [
        // Uncomment when degree is ready
        // {
        //   name: "View Degree",
        //   url: require("./assets/Education Docs/UTD_Degree.pdf")
        // },
        {
          name: "View Transcript",
          url: require("./assets/Education Docs/UTD_Unofficial_Transcript.pdf")
        }
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
      ],
      footerLinks: [
        {
          name: "View Degree",
          url: require("./assets/Education Docs/GL_Merged.pdf")
        },
        {
          name: "View Transcript",
          url: require("./assets/Education Docs/PGP DSBA Transcript.pdf")
        }
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
      ],
      footerLinks: [
        {
          name: "View Degree",
          url: require("./assets/Education Docs/KIIT btech Degree.pdf")
        },
        {
          name: "View Transcript",
          url: require("./assets/Education Docs/KIIT Final Grade Card - Transcript.pdf")
        }
      ]
    }
  ]
};



//////////////////////////////////////////////////////////////////////////////////////////////



const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

//////////////////////////////////////////////////////////////////////////////////////////////



// const projectsSection = {
//   title: emoji("Projects 🛠️ "),
//   subtitle:
//     "Some Cool Projects that I have worked on !",

//   achievementsCards: [
//     {
//       title: "Customer Churn Prediction",
//       subtitle: "Built a classification model to predict customer churn using logistic regression, achieving 82% accuracy.",
//       image: require("./assets/Project_Thumbnails/churn.webp"),
//       imageAlt: "Customer Churn Project",
//       footerLink: [
//         { name: "GitHub Code", url: "https://github.com/anmol-dwivedi/Ecommerce_Customer_Churn" },
//         { name: "Live Demo", url: "https://ecommercecustomerchurn-jcdaayd4gbbatcnsnyussf.streamlit.app/" }
//       ],
//       category: ["Machine Learning"],
//       technologies: ["Python", "Scikit-Learn", "Pandas"]
//     },
//     {
//       title: "Media Mix Modeling",
//       subtitle: "Developed a regression-based marketing mix model using FastAPI and Scipy for GMV prediction.",
//       image: require("./assets/Project_Thumbnails/ComingSoon.webp"),
//       imageAlt: "Media Mix Project",
//       footerLink: [
//         { name: "GitHub Code", url: "#" },
//         { name: "Live Demo", url: "#" }
//       ],
//       category: ["Deep Learning"],
//       // technologies: ["Python", "Scipy", "FastAPI", "MLflow"]
//     },
//     {
//       title: "Wine Sale Forecasting",
//       subtitle: "Used time series modeling to forecast wine sales and seasonal trends.",
//       image: require("./assets/Project_Thumbnails/ComingSoon.webp"),
//       imageAlt: "Wine Sales Prediction",
//       footerLink: [
//         { name: "GitHub Code", url: "#" },
//         { name: "Live Demo", url: "#" }
//       ],
//       category: ["Data Analytics"],
//       // technologies: ["Python", "Prophet", "Pandas"]
//     },
//     {
//       title: "Food Vision",
//       subtitle: "Built a deep learning CNN with TensorFlow to classify food images into 100+ categories.",
//       image: require("./assets/Project_Thumbnails/ComingSoon.webp"),
//       imageAlt: "Food Vision",
//       footerLink: [
//         { name: "GitHub Code", url: "#" },
//         { name: "Live Demo", url: "#" }
//       ],
//       category: ["Deep Learning"],
//       // technologies: ["TensorFlow", "CNN", "Python"]
//     },
//     {
//       title: "Emotion Prediction",
//       subtitle: "Created an NLP model using PyTorch to predict emotions from text messages.",
//       image: require("./assets/Project_Thumbnails/ComingSoon.webp"),
//       imageAlt: "Emotion Prediction",
//       footerLink: [
//         { name: "GitHub Code", url: "#" },
//         { name: "Live Demo", url: "#" }
//       ],
//       category: ["Deep Learning"],
//       // technologies: ["PyTorch", "Transformers", "Python"]
//     },
//     // {
//     //   title: "Interactive Sales Dashboard",
//     //   subtitle: "Developed a Power BI dashboard to visualize KPIs, sales trends, and region-wise performance.",
//     //   image: require("./assets/images/saayaHealthLogo.webp"),
//     //   imageAlt: "Dashboard Project",
//     //   footerLink: [
//     //     { name: "GitHub Code", url: "#" },
//     //     { name: "Live Demo", url: "#" }
//     //   ],
//     //   category: ["Data Analytics"],
//     //   // technologies: ["Power BI", "DAX", "SQL"]
//     // }
    
//   ],
//   display: true // Set false to hide this section, defaults to true
// };


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Certification Section
const certificationsSection = {
  title: emoji("Certifications 📜"),
  subtitle: "Verified certifications from my learning journey",
  achievementsCards: [
    {
      title: "AWS Cloud Practitioner",
      subtitle: "Earned after successfully completing AWS Cloud Fundamentals Exam.",
      image: require("./assets/Certificates/aws-certified-cloud-practitioner.png"),
      imageAlt: "AWS Certification",
      footerLink: [
        { name: "View Credential", url: "https://www.credly.com/badges/bd95057e-bb44-4957-b584-2c2332da06fd" }
      ]
    },
    {
      title: "UTD High Distinction Scholar",
      subtitle: "Earned for Maintaining High GPA (3.96) throughout the MS Program",
      image: require("./assets/Certificates/UTD_Scholar.jpg"),
      imageAlt: "Power BI Certificate",
      footerLink: [
        {
          name: "View Credential",
          url: "https://drive.google.com/file/d/1NL5q11WfWqGwYuUFEwoybfWZGW8mmQEc/view?usp=sharing"
        }
      ]
    },
    // Add more certs...
    {
      title: "Udemy - Power BI",
      subtitle: "Earned after completing Power BI Course on Udemy",
      image: require("./assets/Certificates/PowerBI.jpg"),
      imageAlt: "Power BI Certificate",
      footerLink: [
        {
          name: "View Credential",
          url: "https://drive.google.com/file/d/167BwrEWqUbvUk6ULB3MPIm08Lf-Eff5P/view?usp=sharing"
        }
      ]
    },
    {
      title: "Udemy - SQL",
      subtitle: "Earned after completing SQL Course on Udemy",
      image: require("./assets/Certificates/SQL.jpg"),
      imageAlt: "SQL Certificate",
      footerLink: [
        {
          name: "View Credential",
          url: "https://drive.google.com/file/d/1uiIwFkrbSk9RY4T3n_TlrQ4ioA30Iy3M/view?usp=sharing"
        }
      ]
    }
    
    
  ],
  display: true
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Leadership Section
export const leadershipSection = {
  title: "Leadership 🎯",
  subtitle: "Roles that reflect my passion for leading and inspiring others.",
  display: true,
  leadershipCards: [
    {
      title: "Vice-President, UTD Infinity Lion’s Club",
      subtitle:
        "Served as Vice-President of UTD Infinity Lion’s Club, representing the organization in leading sustainability initiatives such as the Plano International Festival (2023–24), where 30+ volunteers were mobilized to reduce landfill waste by 94%. Spearheaded fundraisers raising $3,000+ for NGO Chetna and organized recurring service events with “Feed My Starving Children,” expanding outreach through campus-wide collaborations.",
      image: lionsClubImage,
      imageAlt: "Lions Club Logo"
    },
    {
      title: "Sergeant at Arms, UTD Toastmasters",
      subtitle:
        "As Sergeant at Arms, I handled the logistics for our weekly meetings — setting up the venue, managing club resources, and creating a welcoming environment for all attendees. I actively mentored new members to build confidence in public speaking while improving my own delivery through prepared speeches, impromptu rounds, and leadership roles during sessions. This experience helped me grow both personally and professionally.",
      image: toastmastersImage,
      imageAlt: "Toastmasters Logo"
    },
    {
      title: "President, KIIT Aeronautical Society",
      subtitle:
        "I served as the Head Designer and President (2016–2018), leading the club’s academic and project-based activities. I conducted training on CAD design and aeronautical principles for over 200 students and represented the club in multiple national competitions. I led a team of 7 to SAE’s National Aerodesign Challenge, where we secured 3rd place in the Innovation category. I was responsible for aircraft modeling, ANSYS simulations, and coordinating all operational and design aspects of the club.",
      image: kiitImage,
      imageAlt: "KIIT Logo"
    }
  ]
};




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Achievement Section
const achievementsSection = {
  title: emoji("Highlights and Achievements ✨"),
  subtitle: "Celebrating memorable moments and extracurricular wins",
  achievementsCards: [
    {
      title: "Won the District Level CBSE Competition!",
      subtitle: "",
      image: require("./assets/images/extracurriculars/1.webp"),
      imageAlt: "Aeronautics - KIIT",
      footerLink: [
        // { name: "Photo", url: "https://..." }
      ]
    },
    {
      title: "Led a team of 3 members to SAE National Aero Design Workshop",
      subtitle: "",
      image: require("./assets/images/extracurriculars/2.webp"),
      imageAlt: "Aeronautics - KIIT",
      footerLink: [
        // { name: "Photo", url: "https://..." }
      ]
    },
    {
      title: "Led a team of 7 members to SAE National Aero Design Challenge and Won 3rd place in Best Innovation Category for Regular Class",
      subtitle: "",
      image: require("./assets/images/extracurriculars/3.webp"),
      imageAlt: "Aeronautics - KIIT",
      footerLink: [
        // { name: "Photo", url: "https://..." }
      ]
    },
    {
      title: "Joined the Prestigious iFriend Initiative Program at ICP UTD",
      subtitle: "",
      image: require("./assets/images/extracurriculars/6.webp"),
      imageAlt: "UTD iFriend Program",
      footerLink: [
        // { name: "Photo", url: "https://..." }
      ]
    },
    {
      title: "Volunteered at FMSC (Feed My Starving Children) and helped pack 10,000 meals for children in need",
      subtitle: "",
      image: require("./assets/images/extracurriculars/5.webp"),
      imageAlt: "UTD ILC",
      footerLink: [
        // { name: "Photo", url: "https://..." }
      ]
    },
    {
      title: "Led the Volunteer Team for the 2023 Plano International Festival",
      subtitle: "",
      image: require("./assets/images/extracurriculars/4.webp"),
      imageAlt: "UTD ILC",
      footerLink: [
        // { name: "Photo", url: "https://..." }
      ]
    },
    {
      title: "Elected at Vice President at Lion's Club UTD",
      subtitle: "",
      image: require("./assets/images/extracurriculars/7.webp"),
      imageAlt: "UTD ILC",
      footerLink: [
        // { name: "Photo", url: "https://..." }
      ]
    },
    {
      title: "Joined the UTD Toastmasters Club as Sergeant at Arms",
      subtitle: "",
      image: require("./assets/images/extracurriculars/7_2.webp"),
      imageAlt: "UTD",
      footerLink: [
        // { name: "Photo", url: "https://..." }
      ]
    },
    {
      title: "Represented the UTD Lion's Club at the UTD New Grad Fest",
      subtitle: "",
      image: require("./assets/images/extracurriculars/8.webp"),
      imageAlt: "UTD",
      footerLink: [
        // { name: "Photo", url: "https://..." }
      ]
    },
    {
      title: "Got Selected as Graduate Teaching Assistant for Predictive Analytics and AWS Cloud Fundamentals",
      subtitle: "",
      image: require("./assets/images/extracurriculars/9.webp"),
      imageAlt: "UTD",
      footerLink: [
        // { name: "Photo", url: "https://..." }
      ]
    },{
      title: "Successfully Organized the Spring 2024 New Grad Orientation",
      subtitle: "",
      image: require("./assets/images/extracurriculars/10.webp"),
      imageAlt: "UTD",
      footerLink: [
        // { name: "Photo", url: "https://..." }
      ]
    },
    {
      title: "Led the Volunteers Team for the 2024 Plano International Festival",
      subtitle: "",
      image: require("./assets/images/extracurriculars/11.webp"),
      imageAlt: "UTD",
      footerLink: [
        // { name: "Photo", url: "https://..." }
      ]
    },
    // {
    //   title: "Helped Organize the End of Semester Breakfast Event for Fall'24",
    //   subtitle: "",
    //   image: require("./assets/images/extracurriculars/13.webp"),
    //   imageAlt: "UTD",
    //   footerLink: [
    //     // { name: "Photo", url: "https://..." }
    //   ]
    // },
    {
      title: "Attended the Snowflake Data Users Conference in Dallas",
      subtitle: "",
      image: require("./assets/images/extracurriculars/14.webp"),
      imageAlt: "UTD",
      footerLink: [
        // { name: "Photo", url: "https://..." }
      ]
    },
  ],
  display: true
};


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






// Blogs Section

// const blogSection = {
//   title: "Blogs",
//   subtitle:
//     "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
//   displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
//   blogs: [
//     {
//       url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
//       title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
//       description:
//         "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
//     },
//     {
//       url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
//       title: "Why REACT is The Best?",
//       description:
//         "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };






// Talks Sections

// const talkSection = {
//   title: "TALKS",
//   subtitle: emoji(
//     "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
//   ),

//   talks: [
//     {
//       title: "Build Actions For Google Assistant",
//       subtitle: "Codelab at GDG DevFest Karachi 2019",
//       slides_url: "https://bit.ly/saadpasta-slides",
//       event_url: "https://www.facebook.com/events/2339906106275053/"
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Podcast Section

// const podcastSection = {
//   title: emoji("Podcast 🎙️"),
//   subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

//   // Please Provide with Your Podcast embeded Link
//   podcast: [
//     "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
//   ],
//   display: true // Set false to hide this section, defaults to true
// };








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
// const twitterDetails = {
//   userName: "twitter", //Replace "twitter" with your twitter username without @
//   display: true // Set true to display this section, defaults to false
// };





//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

////////////////////////////////////////////////////////////////////////////
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
  // techStack,
  // workExperiences,
  openSource,
  // bigProjects,
  // achievementSection,
  projectsSection,
  certificationsSection,
  achievementsSection,
  // blogSection,
  // talkSection,
  // podcastSection,
  contactInfo,
  // twitterDetails,
  isHireable,
  resumeSection,
  timelineExperience
};
