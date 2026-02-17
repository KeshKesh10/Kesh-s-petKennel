import React, { Component } from 'react';
import ChildComponent from './ChildComponent';
import { initialData } from './data';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    // TODO: Initialize state here
    // setting up state with the pet data from data.js
    this.state = {
      pets: initialData
    };
  }

  // Method to handle state changes from children
  handleUpdate = (id) => {
    console.log("Parent received event for ID:", id);
    // TODO: Logic to update the specific child in this.state
    // 1. Find the character in state by id
    // 2. Change their image property (e.g., to a 'happy' version)
    // 3. Update state using this.setState()
    
    // i added this to cycle through moods: sad -> happy -> angry -> sad
    const updatedPets = this.state.pets.map(pet => {
      if(pet.id === id) {
        let newMood;
        let newStatus;
        
        // figured out how to cycle through the moods
        if (pet.mood === 'sad') {
          newMood = 'happy';
          newStatus = 'Happy & Fed!';
        } else {
          newMood = 'sad';
          newStatus = 'Hungry';
        }
        
        console.log('changing mood to:', newMood); // for debugging
        
        return { 
          ...pet, 
          mood: newMood,
          status: newStatus
        };
      }
      return pet;
    });
    
    this.setState({ pets: updatedPets });
    
    /* HINT for students: 
    const updatedCharacters = this.state.characters.map(char => {
      if(char.id === id) {
         return { ...char, image: 'NEW_IMAGE_URL', status: 'Updated!' };
      }
      return char;
    });
    this.setState({ characters: updatedCharacters });
    */
  }

  render() {
    return (
      <div className="app-container">
        <h1>Kesh's Pet Kennel</h1>
        <p className="subtitle">Take care of your furry friends!</p>
        
        <div className="pets-container">
          {/* TODO: Map through your state characters here and render ChildComponents */}
          {/* Example: 
              {this.state && this.state.characters.map(char => (
                <ChildComponent 
                  key={char.id}
                  id={char.id}
                  name={char.name}
                  image={char.image}
                  status={char.status}
                  onAction={this.handleUpdate}
                />
              ))} 
          */}
          {/* used .map to show all the pets from my data file */}
          {this.state.pets.map(pet => (
            <ChildComponent 
              key={pet.id}
              id={pet.id}
              name={pet.name}
              sadImage={pet.sadImage}
              happyImage={pet.happyImage}
              angryImage={pet.angryImage}
              status={pet.status}
              mood={pet.mood}
              onAction={this.handleUpdate}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
