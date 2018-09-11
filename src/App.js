import React, { Component } from 'react';
// import Nav from './components/nav';
import Image from './components/Image';
// import Jumbotron from './components/jumbo';

import './App.css';
import HelloDiv from "./components/HelloDiv";
import Navbar from "./components/nav";
import Footer from "./components/footer";
import rappers from "./rappers.json";

// const App = () =>

  // <div class="container">
  
  //     <HelloDiv />
  //     <Navbar/>
  //     <Grid/>
  //     <Image/>
      
  // </div>

class App extends Component {
  
  state = {
    rappers,
    usersScore: 0,
    clickedImages: [],
    highscore: localStorage.getItem("highscore")
  }


  imageClick = event => {
    const currentImages = event.target.alt;
    const ImagesAlreadyClicked =this.state.clickedImages.indexOf(currentImages) > -1;

      //   clickImage = (imageObj, index) => {
  //   if (!imageObj.clicked) {
  //     let newGrid = this.state.grid;
  //     newGrid[index].clicked = true;
  //     this.setState({
  //       grid: newGrid,
  //       ...this.state
  //     })
  //   }
  // }

    if (ImagesAlreadyClicked) {
      this.setState({
        rappers: this.state.rappers.sort(function(x, y) {
          return 0.5 - Math.random();
        }),
        clickedImages: [],
        score: 0
      });

        alert("Opps You Already Clicked That! Try again?");

    } else {

      this.setState(
        {
          rappers: this.state.rappers.sort(function(x, y) {
            return 0.5 - Math.random();
          }),
          clickedImages: this.state.clickedImages.concat(
            currentImages
          ),
          score: this.state.score +1
        },

        () => {

          if (this.state.score === 12) {
            alert("You Win!");
            this.setState({
              rappers: this.state.rappers.sort(function(x, y) {
                return 0.5 - Math.random();
              }),

              clickedImages: [],
              score: 0

            });

          }

        }

      );

    }

  };

  render() {

    return (

      <div>

        <Navbar 

          score={this.state.score}

        />

        <HelloDiv />

        <div className="wrapper">

          {this.state.rappers.map(rappers => (
            <Image
              imageClick={this.imageClick}
              id={rappers.id}
              name={rappers.name}
            />
          ))}
           
        </div>

          <Footer/>
      </div>

    );

  }

}



export default App;
// // //   clickImage = (imageObj, index) => {
// //     if (!imageObj.clicked) {
// //       let newGrid = this.state.grid;
// //       newGrid[index].clicked = true;
// //       this.setState({
// //         grid: newGrid,
// //         ...this.state
// //       })
// //     }
// //   }

// //   render() {
// //     return (
// //       <div className="App">
// //         <Nav />
// //         <div>Jumbotron</div>
// //         <div>
// //           {this.state.grid.map((imageObj, index) => (
// //             <Image key={index} image={imageObj} onClick={() => this.clickImage(imageObj, index)} />
// //           ))}
// //         </div>
// //       </div>
// //     );
// //   }
// // }
