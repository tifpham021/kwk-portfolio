import "./App.css";
import tiff from "./assets/tiff.jpg";

function App() {
  return (
    <div className="landing-page">
      <div className="intro">
        <div className="pictures-left">
          <div className="light-green"></div>
          <img src={tiff} alt="profile-pic" className="pfp"/>
          <div className="dark-green"></div>
        </div>
        <div className="text-right">
          <h2>HEY, I'M</h2>
          <h1 className="first-name">TIFFANY</h1>
          <h1 className="last-name">PHAM</h1>
        </div>
      </div>
      <div className="about">
        <h2>ABOUT ME</h2>
        <h1>ABOUT ME</h1>
        <h2>ABOUT ME</h2>
      </div>
    </div>
  );
}

export default App;
