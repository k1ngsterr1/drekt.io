// Styles
import styles from "./styles/app.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Screens
import AboutScreen from "./screens/AboutScreen";
import MainScreen from "./screens/MainScreen";

function App() {
  return (
    <div className="app">
      <MainScreen></MainScreen>
      <AboutScreen></AboutScreen>
    </div>
  );
}

export default App;
