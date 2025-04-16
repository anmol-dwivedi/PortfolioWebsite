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
      "title": "Time Series Uncorked: Forecasting Sparkling & Rosé Wine Sales",
      "subtitle": "Developed a dynamic, multi-model forecasting app to predict monthly Sparkling and Rosé wine sales using SARIMA, ARIMA, Prophet, LSTM, and XGBoost. Delivered deep model diagnostics, interactive visualizations, and business-driven insights via a sleek Streamlit dashboard.",
      "image": require("./assets/Project_Thumbnails/WineSalesProject.webp"),
      "imageAlt": "Wine Sales Forecasting Dashboard",
      "footerLink": [
        {
          "name": "GitHub Code",
          "url": "https://github.com/anmol-dwivedi/TimeSeries_WineSale"
        },
        {
          "name": "Live Demo",
          "url": "https://timeserieswinesale-mbye5mjsegwbckbvv8txrg.streamlit.app/"
        }
      ],
      "category": ["Machine Learning"],
      "technologies": ["Python", "SARIMA", "Prophet", "LSTM", "XGBoost", "Pandas", "Streamlit"]
    }
    ,
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
    },
    {
      "title": "AmEx Credit Risk Radar: Forecasting Financial Defaults with ML",
      "subtitle": "Built a robust machine learning pipeline to predict credit card default risk using 1.1M+ customer records from the AmEx Kaggle dataset. Leveraged PySpark for EDA, engineered rolling temporal features, and tuned both XGBoost and Neural Network models for high AUC performance with SHAP-driven explainability and business-ready thresholds.",
      "image": require("./assets/Project_Thumbnails/AmexProject.webp"),
      "imageAlt": "Credit Default Risk Dashboard",
      "footerLink": [
        {
          "name": "GitHub Code",
          "url": "https://github.com/anmol-dwivedi/AmexCreditRiskProject"
        },
        // {
          //   "name": "Live Demo",
          //   "url": "https://timeserieswinesale-mbye5mjsegwbckbvv8txrg.streamlit.app/"
          // }
      ],
      "category": ["Machine Learning"],
      "technologies": ["Python", "PySpark",  "XGBoost", "TensorFlow", "SHAP", "Pandas", "Classification", "Model Explainability", "Finance Modelling", "Credit Risk"]
    },
    {
      "title": "Emotion Prediction Using LLMs",
      "subtitle": "Built a deep learning pipeline using Transformer-based models to predict human emotions from text messages with high accuracy. Integrated PyTorch and HuggingFace to fine-tune large language models for multi-class emotion classification.",
      "image": require("./assets/Project_Thumbnails/EmotionPrediction.webp"),
      "imageAlt": "Emotion Prediction Dashboard",
      "footerLink": [
        // {
        //   "name": "GitHub Code",
        //   "url": "https://github.com/anmol-dwivedi/EmotionPredictionLLM" 
        // },
        // {
          //   "name": "Live Demo",
          //   "url": "https://timeserieswinesale-mbye5mjsegwbckbvv8txrg.streamlit.app/"
          // }
      ],
      "category": ["Deep Learning"],
      "technologies": ["PyTorch", "Transformers", "HuggingFace", "NLP", "Python"]
    }
    ,

    // {
    //   title: "Food Vision",
    //   subtitle:
    //     "Built a deep learning CNN with TensorFlow to classify food images into 100+ categories.",
    //   image: require("./assets/Project_Thumbnails/ComingSoon.webp"),
    //   imageAlt: "Food Vision",
    //   footerLink: [
    //     { name: "GitHub Code", url: "#" },
    //     { name: "Live Demo", url: "#" }
    //   ],
    //   category: ["Deep Learning"],
    //   technologies: ["TensorFlow", "CNN", "Python"]
    // },
    
  ],
  display: true
};

export default projectsSection;
