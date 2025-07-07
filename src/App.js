import "./App.css";
import {useState} from 'react';
import tiff from "./assets/tiff.jpg";
import blindBoxes from "./assets/blind-boxes.png";
import tSwift from "./assets/tswift.png";
import beach from "./assets/beach.png";
import ordinary from "./assets/ordinary.png";
import invisibleString from "./assets/invisibleString.png";
import ellieSong from "./assets/ellie-album.png";
import gracieSong from "./assets/gracie-album.png";
import back from "./assets/back.png";
import play from "./assets/play.png";
import next from "./assets/next.png";
import leftArrow from "./assets/left-arrow.png";
import rightArrow from "./assets/right-arrow.png";
import fourthWing from "./assets/fourth-wing.png";
import theNaturals from "./assets/the-naturals.png";
import harryPotter from "./assets/harry-potter.png";
import tsitp from "./assets/tsitp.png";
import SpyxFamily from "./assets/spyxfamily.png";
import tangled from "./assets/tangled.png";
import eeaao from "./assets/eeaao.png";
import sushi from "./assets/sushi.png";
import taco from "./assets/taco.png";
import ramen from "./assets/ramen.png";
import goiCuon from "./assets/goi-cuon.png";
import boba from "./assets/boba.png";
import mainLeft from "./assets/main-left.png";
import mainRight from "./assets/main-right.png";
import factLeft from "./assets/fact-left.png";
import factRight from "./assets/fact-right.png";

function App() {
  const [currSong, setCurrSong] = useState(0);
  const [currBook, setCurrBook] = useState(0);
  const [currShow, setCurrShow] = useState(0);

  const songs = [
    {
      title: "Ordinary - Alex Warren",
      image: ordinary,
    },
    {
      title: "invisible string - Taylor Swift",
      image: invisibleString,
    },
    {
      title: "My Blood - Ellie Goulding",
      image: ellieSong,
    },
    {
      title: "I Love You I'm Sorry - Gracie Abrams",
      image: gracieSong,
    }
  ]

  const books = [
    {
      title: "Empyrean Series",
      image: fourthWing,
    },
    {
      title: "The Naturals",
      image: theNaturals,
    },
    {
      title: "Harry Potter",
      image: harryPotter,
    },
  ]

  const showsAndMovies = [
    {
      title: "The Summer I Turned Pretty",
      image: tsitp,
    },
    {
      title: "SpyxFamily",
      image: SpyxFamily,
    },
    {
      title: "Tangled",
      image: tangled,
    },
    {
      title: "Everything Everywhere All at Once",
      image: eeaao,
    }
  ]

  const prevSong = () => {
    setCurrSong((prev) => (prev > 0 ? prev - 1 : prev));
  }

  const nextSong = () => {
    setCurrSong((prev) => (prev < songs.length - 1 ? prev + 1 : prev));
  }

  const prevBook = () => {
    setCurrBook((prev) => (prev > 0 ? prev - 1 : prev));
  }

  const nextBook = () => {
    setCurrBook((prev) => (prev < books.length - 1 ? prev + 1 : prev));
  }

  const prevShow = () => {
    setCurrShow((prev) => (prev > 0 ? prev - 1 : prev));
  }

  const nextShow = () => {
    setCurrShow((prev) => (prev < showsAndMovies.length - 1 ? prev + 1 : prev));
  }

    return (
    <div className="landing-page">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <img src={mainLeft} className="main-squiggle-left"/>
      <div className="intro">
        <div className="pictures-left">
          <div className="light-green-wrapper">
            <div className="light-green"></div>
          </div>
          <img src={tiff} alt="profile-pic" className="pfp"/>
          <div className="dark-green-wrapper">
          <div className="dark-green"></div>
          </div>
        </div>
        <div className="text-right">
          <h2>HEY, I'M</h2>
          <h1 className="first-name">TIFFANY</h1>
          <h1 className="last-name">PHAM</h1>
        </div>
      </div>
      <img src={mainRight} className="main-squiggle-right"/>
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
        <img src={factRight} className="fact-squiggle-right"/>
        <div className="box-content">
          <div className="box">
            <img src={blindBoxes} alt="blind-boxes" className="blind-boxes"/>
          </div>
          <p className="left-fact">I love opening blind boxes</p>
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
          <p className="right-fact">I've lived in CA, GA, and now FL</p>
        </div>
      </div>
      <img src={factLeft} className="fact-squiggle-left"/>
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
        <div className="top-header">
          <h1>MY FAVORITE...</h1>
          <p className="header-note">(btw you can click the previous and next buttons!)</p>
        </div>
        <div className="favorites-section">
          <div className="left-side-things">
              <div className="top-left">
                <div className="songs-content">
                  <h2>SONGS</h2>
                  <div className="songs">
                    <div className="image-background">
                      <img src={songs[currSong].image}/>
                    </div>
                    <p className="title">{songs[currSong].title}</p>
                    <div className="controls">
                      <button className="prev" onClick={prevSong} disabled={currSong===0}>
                        <img src={back}/>
                      </button>
                      <button className="play">
                        <img src={play}/>
                      </button>
                      <button className="next" onClick={nextSong} disabled={currSong === songs.length}>
                        <img src={next}/>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="books-content">
                  <h2>BOOK SERIES</h2>
                  <div className="books">
                    <h2>{books[currBook].title}</h2>
                    <img className='book-img' src={books[currBook].image}/>
                    <div className="bottom-arrows">
                      <button className='left' onClick={prevBook} disabled={currBook ===0}><img src={leftArrow}/></button>
                      <button className='right' onClick={nextBook} disabled={currBook === books.length - 1}><img src={rightArrow}/></button>
                    </div>
                  </div>
                </div>
              </div>
          <div className="shows-movies-content">
            <div className="shows-movies">
              <div className="show-info">
                <img src={showsAndMovies[currShow].image}/>
                <h2>{showsAndMovies[currShow].title}</h2>
              </div>
              <div className="remote">
                <div className="remote-content">
                  <div className="power"></div>
                  <div className="outer-circle">
                    <div className="inner-circle"></div>
                  </div>
                  <div className="control-buttons">
                    <button onClick={prevShow} disabled={currShow === 0}><img src={back}/></button>
                    <button onClick={nextShow} disabled={currShow === showsAndMovies.length - 1}><img src={next}/></button>
                  </div>
                  <div className="random-buttons-upper">
                    <div className="top-buttons">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div className="bottom-buttons">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <div className="buttons-bottom">
                    <div className="long-button"></div>
                    <div className="stacked-buttons">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div className="long-button"></div>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="shows-movies-header">SHOWS/ MOVIES</h2>
          </div>
          </div>
          <div className="food-content">
            <h2 className="food-heading">FOOD</h2>
            <div className="food">
              <div className="sushi">
                <img src={sushi}/>
                <div className="food-descript">
                  <h2>SUSHI</h2>
                  <p>a Japanese dish made with seaweed, 
                    vinegared rice, raw or cooked seafood, 
                    and other ingredients 
                  </p>
                </div>
              </div>
              <div className="tacos">
                <img src={taco}/>
                <div className="food-descript">
                  <h2>BIRRIA TACOS</h2>
                  <p>Mexican tacos filled with slow-cooked, 
                    spiced meat served with a rich dipping broth
                  </p>
                </div>
              </div>
              <div className="ramen">
                <img src={ramen}/>
                <div className="food-descript">
                  <h2>RAMEN</h2>
                  <p>a Japanese noodle soup made with a savory broth, 
                    chewy noodles, and toppings like meat, eggs, and veggies
                  </p>
                </div>
              </div>
              <div className="goi-cuon">
                <img src={goiCuon}/>
                <div className="food-descript">
                  <h2>GOI CUON</h2>
                  <p>Vietnamese fresh rolls filled with shrimp, 
                    herbs, veggies, and noodles, wrapped in rice paper 
                  </p>
                </div>
              </div>
              <div className="boba">
                <img src={boba}/>
                <div className="food-descript">
                  <h2>BOBA</h2>
                  <p>a Taiwanese drink made with tea, 
                    milk, and chewy tapioca pearls
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
