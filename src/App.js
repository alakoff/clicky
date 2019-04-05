import React, { Component } from "react";
import Picture from "./components/pictures";
import Wrapper from "./components/Wrapper";
import Header from "./components/header";
import Footer from "./components/footer";
import pics from "./pics.json";

class App extends Component {
  
  // Setting this.state for various things
  state = {
    clickedPics: [],
    pics: pics,
    id: 0,
    gameScore: 0,
    topScore: 0,
    message: ''
  };

  // Function to return random array to shuffle pictures
  shuffleArray(array) {
    
    for (let i = array.length -1; i > 0; i--) {
      let num = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[num];
      array[num] = temp;
    }
    return array;
  };
  

  // Happens when a picture is clicked
  pictureClick = event => {

    let {id}  = event.target;

    // Setting id state for the id of the pic that was clicked
    this.setState({id:id});
    console.log('Clicked pic id is :',this.state.id);

    // Check to see if clicked picture "id" is in "clickedPics" array
    console.log('clickedPics', this.state.clickedPics);
    if (this.state.clickedPics.includes(this.state.id)) {

      this.setState({message: "Sorry, Gamve Over !"});

      //End of game stuff here as picture has already been clicked

      // Update topScore if needed
      if (this.state.topScore < this.state.gameScore){
        this.setState({topScore: this.state.gameScore});
      }

      // Set game score to zero
      this.setState({gameScore: 0});

      // Clear out clickedPics array
      this.setState({clickedPics: []});

    } else {

     //If not, then continue game

     // Message
     this.setState({message: "Keep on clicking !"});

     // Add clicked picture id to clickedPics array
      this.setState({clickedPics: this.state.clickedPics.concat([this.state.id])});
      console.log("Clicked pics array: ",this.state.clickedPics);

      // Increase game score by one
      this.setState({gameScore: this.state.gameScore + 1});

      // Shuffle the pictures
      let picOrder = this.shuffleArray(this.state.pics);
      this.setState({pics: picOrder});

      }  
    };
    

  // Render function
  render() {
    return (
      <Wrapper>

        <Header>

          Clicky Game <br></br>
          Don't click an image more than once though !
          <p message={this.state.message}></p>

        </Header>

        <p message={this.state.message}></p>

        {this.state.pics.map(Pic => (
        <Picture 
          id={Pic.id}
          key={Pic.id}
          image={Pic.image}
          click={this.pictureClick}
        />
        ))}
        <Footer>
          {this.state.gameScore}
          {this.state.topScore}
        </Footer>

      
      </Wrapper>
    );
  };

}
export default App;
