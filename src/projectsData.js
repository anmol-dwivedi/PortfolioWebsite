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
      title: "Wine Sale Forecasting",
      subtitle: "Used time series modeling to forecast wine sales and seasonal trends.",
      image: require("./assets/Project_Thumbnails/ComingSoon.webp"),
      imageAlt: "Wine Sales Prediction",
      footerLink: [
        { name: "GitHub Code", url: "#" },
        { name: "Live Demo", url: "#" }
      ],
      category: ["Data Analytics"],
      technologies: ["Python", "Prophet", "Pandas"]
    },
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
