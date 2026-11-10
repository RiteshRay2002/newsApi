# 📰 React News Application

A dynamic, feature-rich React application that fetches real-time headlines and articles from a third-party **News API**. Users can browse up-to-date news across multiple categories using an interactive navigation bar, powered by component-based architecture and efficient prop management.

---

## ✨ Features

- **Real-Time Data Fetching**: Seamless asynchronous HTTP requests handled via **Axios**.
- **Category-Based Filtering**: Interactive navigation bar allowing users to switch between multiple news categories instantly.
- **Component-Driven Architecture**: Cleanly separated components (`Navbar`, `NewsBoard`, `NewsItem`) ensuring modularity and reusability.
- **Props Management**: Efficient data flow and state handling passed cleanly from parent components to child items.
- **Responsive Card Layout**: Clean and modern presentation of news articles featuring titles, descriptions, images, and links to full stories.

---

## 🛠️ Tech Stack

- **Frontend Library**: React.js 
- **HTTP Client**: Axios
- **API Source**: News API
- **Styling**: CSS3 / Bootstrap

---

## 📂 Component Structure & Architecture

The application follows a hierarchical structure to pass data seamlessly via props:

```text
src/
├── components/
│   ├── Navbar.jsx       # Displays category links (Business, Sports, Tech, etc.)
│   ├── NewsBoard.jsx    # Manages API calls using Axios based on selected category
│   └── NewsItem.jsx     # Renders individual article cards using props
├── App.js               # Main application entry point & state holder
└── index.js
