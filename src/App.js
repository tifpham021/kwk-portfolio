import "./App.css";
import tiff from "./assets/tiff.jpg";
import blindBoxes from "./assets/blind-boxes.png";
import tSwift from "./assets/tswift.png";
import beach from "./assets/beach.png";
import ordinary from "./assets/ordinary.png";
import back from "./assets/back.png";
import play from "./assets/play.png";
import next from "./assets/next.png";

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
        <div className="header">
          <h2>ABOUT ME</h2>
          <h1>ABOUT ME</h1>
          <h2>ABOUT ME</h2>
        </div>
        <p>Hi there! I’m Tiffany Pham, a rising third year at Georgia Tech, where 
          I’m studying computer science. I’m a developer and designer who enjoys 
          building websites that are not only functional, but also visually appealing 
          and easy to use. I’m especially interested in front-end development and creating 
          intuitive, engaging user experiences.
        </p>
      </div>
      <div className="fun-facts">
        <div className="box-content">
          <div className="box">
            <img src={blindBoxes} alt="blind-boxes" className="blind-boxes"/>
          </div>
          <p className="left">I love opening blind boxes</p>
        </div>
        <div className="box-content">
          <div className="box">
            <img src={tSwift} alt="tswift concert" className="tswift"/>
          </div>
          <p className="center">I'm a Swiftie</p>
        </div>
        <div className="box-content">
          <div className="box">
            <img src={beach} alt="beach" className="beach"/>
          </div>
          <p className="right">I've lived in CA, GA, and now FL</p>
        </div>
      </div>
      <div className="coding-journey">
        <h1>MY CODING JOURNEY</h1>
        <div className="circles">

          <div className="first-circle">
            <h3>2021</h3>
            <div className="small-circle"></div>
            <div className="circle-wrapper-yellow">
              <div className="colored-circle yellow">
                <p>first time coding</p>
              </div>
            </div>
          </div>

          <div className="small-circle middle"></div>

          <div className="second-circle">
            <div className="circle-wrapper-pink">
              <div className="colored-circle pink">
                <p>first <span className="bigger-text">KWK camp</span></p>
              </div>
            </div>
            <div className="small-circle"></div>
            <h3>2022</h3>
          </div>
          

           <div className="small-circle middle"></div>

          <div className="third-circle">
            <h3>2023</h3>
            <div className="small-circle"></div>
            <div className="circle-wrapper-purple">
              <div className="colored-circle purple">
                <p>started CS at Georgia Tech</p>
              </div>
            </div>
          </div>
    
           <div className="small-circle middle"></div>

          <div className="fourth-circle">
            <div className="circle-wrapper-green">
              <div className="colored-circle green">
                <p>first hackathon, began working on projects</p>
              </div>
            </div>
            <div className="small-circle"></div>
            <h3>2024</h3>
          </div>
          

           <div className="small-circle middle"></div>
          
          <div className="last-circle">
            <h3>current</h3>
            <div className="small-circle"></div>
            <div className="circle-wrapper-white">
              <div className="colored-circle white">
                <p>learning React and building personal projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-favorite">
        <h1>MY FAVORITE...</h1>
        
        <div className="songs-content">
          <h2>SONGS</h2>
          <div className="songs">
            <div className="image-background">
              <img src={ordinary}/>
            </div>
            <p className="title">Ordinary - Alex Warren</p>
            <div className="controls">
              <div className="prev">
                <img src={back}/>
              </div>
              <div className="play">
                <img src={play}/>
              </div>
              <div className="next">
                <img src={next}/>
              </div>
            </div>
          </div>
        </div>
        <div className="books">

        </div>
        <div className="shows-movies">

        </div>
        <div className="food">

        </div>
      </div>
    </div>
  );
}

export default App;
