import emoji from "react-easy-emoji";

const projectsSection = {
  title: emoji("Projects 🛠️ "),
  subtitle: "Some Cool Projects that I have worked on !",
  achievementsCards: [
    {
      title: "SmartChurn: Predicting E-Commerce Customer Drop-Off with XGBoost",
      subtitle:
        "Deployed a machine learning model using logistic regression to predict e-commerce customer churn with 82% accuracy. Empowered business teams with insights into churn drivers and retention strategies.",
      image: require("./assets/Project_Thumbnails/churn.webp"),
      imageAlt: "Customer Churn Project",
      footerLink: [
        {
          name: "GitHub Code",
          url: "https://github.com/anmol-dwivedi/Ecommerce_Customer_Churn"
        },
        {
          name: "Live Demo",
          url:
            "https://ecommercecustomerchurn-jcdaayd4gbbatcnsnyussf.streamlit.app/"
        }
      ],
      category: ["Machine Learning"],
      technologies: ["Python", "Scikit-Learn", "Pandas"]
    }
    ,
    // {
    //   title: "Media Mix Modeling",
    //   subtitle:
    //     "Developed a regression-based marketing mix model using FastAPI and Scipy for GMV prediction.",
    //   image: require("./assets/Project_Thumbnails/ComingSoon.webp"),
    //   imageAlt: "Media Mix Project",
    //   footerLink: [
    //     { name: "GitHub Code", url: "#" },
    //     { name: "Live Demo", url: "#" }
    //   ],
    //   category: ["Deep Learning"],
    //   technologies: ["Python", "Scipy", "FastAPI", "MLflow"]
    // },
    {
      title: "Wine Sales Forecasting App",
      subtitle: "Built an end-to-end time series forecasting app using SARIMA, ARIMA, Prophet, LSTM, and XGBoost to forecast monthly Sparkling and Rose wine sales with detailed model diagnostics and business insights.",
      image: require("./assets/Project_Thumbnails/WineSalesProject.webp"),
      imageAlt: "Wine Sales Forecasting Dashboard",
      footerLink: [
        {
          name: "GitHub Code",
          url: "https://github.com/anmol-dwivedi/TimeSeries_WineSale"
        },
        {
          name: "Live Demo",
          url: "https://timeserieswinesale-mbye5mjsegwbckbvv8txrg.streamlit.app/"
        }
      ],
      category: ["Machine Learning"],
      technologies: ["Python", "SARIMA", "Prophet", "LSTM", "XGBoost", "Pandas", "Streamlit"]
    },
    {
      "title": "Macroeconomic Shock Analysis Using VARX: COVID-19 & Geopolitical Impact on U.S. Economy",
      "subtitle": "Analyzed how major global shocks like COVID-19 and the Russia-Ukraine conflict ripple through the U.S. economy using a powerful VARX model with 13 macro indicators. Delivered actionable economic insights through Impulse Response, Historical Decomposition, and Counterfactual Scenarios.",
      "image": require("./assets/Project_Thumbnails/WineSalesForecast.webp"),
      "imageAlt": "VARX Macroeconomic Shock Impact Visualization",
      "footerLink": [
        {
          "name": "GitHub Code",
          "url": "https://github.com/anmol-dwivedi/EconometricsMacroEconShocks_VARX"
        },
        // {
        //   "name": "Live Demo",
        //   "url": "https://timeserieswinesale-mbye5mjsegwbckbvv8txrg.streamlit.app/"
        // }
      ],
      "category": ["Machine Learning"],
      "technologies": ["Python", "VARX", "Statsmodels", "Pandas", "Sensitiviy Analysis", "Econometrics", "statistical Modelling" ]
    }
    
    ,
    {
      title: "Food Vision",
      subtitle:
        "Built a deep learning CNN with TensorFlow to classify food images into 100+ categories.",
      image: require("./assets/Project_Thumbnails/ComingSoon.webp"),
      imageAlt: "Food Vision",
      footerLink: [
        { name: "GitHub Code", url: "#" },
        { name: "Live Demo", url: "#" }
      ],
      category: ["Deep Learning"],
      technologies: ["TensorFlow", "CNN", "Python"]
    },
    {
      title: "Emotion Prediction",
      subtitle: "Created an NLP model using PyTorch to predict emotions from text messages.",
      image: require("./assets/Project_Thumbnails/ComingSoon.webp"),
      imageAlt: "Emotion Prediction",
      footerLink: [
        { name: "GitHub Code", url: "#" },
        { name: "Live Demo", url: "#" }
      ],
      category: ["Deep Learning"],
      technologies: ["PyTorch", "Transformers", "Python"]
    }
  ],
  display: true
};

export default projectsSection;
