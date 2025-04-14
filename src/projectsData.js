import emoji from "react-easy-emoji";

const projectsSection = {
  title: emoji("Projects 🛠️ "),
  subtitle: "Some Cool Projects that I have worked on !",
  achievementsCards: [
    {
      title: "Customer Churn Prediction",
      subtitle:
        "Built a classification model to predict customer churn using logistic regression, achieving 82% accuracy.",
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
    },
    {
      title: "Media Mix Modeling",
      subtitle:
        "Developed a regression-based marketing mix model using FastAPI and Scipy for GMV prediction.",
      image: require("./assets/Project_Thumbnails/ComingSoon.webp"),
      imageAlt: "Media Mix Project",
      footerLink: [
        { name: "GitHub Code", url: "#" },
        { name: "Live Demo", url: "#" }
      ],
      category: ["Deep Learning"],
      technologies: ["Python", "Scipy", "FastAPI", "MLflow"]
    },
    {
      "title": "Wine Sales Forecasting App",
      "subtitle": "Built an end-to-end time series forecasting app using SARIMA, ARIMA, Prophet, LSTM, and XGBoost to forecast monthly Sparkling and Rose wine sales with detailed model diagnostics and business insights.",
      "image": require("./assets/Project_Thumbnails/wine_forecasting.webp"),
      "imageAlt": "Wine Sales Forecasting Dashboard",
      "footerLink": [
        {
          "name": "GitHub Code",
          "url": "https://github.com/anmol-dwivedi/WineSalesProject.webp"
        },
        {
          "name": "Live Demo",
          "url": "https://timeserieswinesale-mbye5mjsegwbckbvv8txrg.streamlit.app/"
        }
      ],
      "category": ["Time Series", "Forecasting", "Business Analytics"],
      "technologies": ["Python", "SARIMA", "Prophet", "LSTM", "XGBoost", "Pandas", "Streamlit"]
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
