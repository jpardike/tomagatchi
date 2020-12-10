import React from "react";
import "./App.css";

import Form from "./components/Form";
import Pet from "./components/Pet";
import { v4 as uuidv4 } from "uuid";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lightsOn: true,
      bagsOfFood: 3,
      petsData: [
        {
          name: "Ptolemy",
          hunger: 3,
          sleepiness: 2,
          boredom: 3,
          id: 0,
        },
        {
          name: "Randy",
          hunger: 8,
          sleepiness: 6,
          boredom: 3,
          id: 1,
        },
        {
          name: "Damian",
          hunger: 7,
          sleepiness: 9,
          boredom: 9,
          id: 2,
        },
      ],
    };
  }
  getPets(pets) {
    return pets.map((pet, index) => {
      return (
        <Pet pet={pet} key={pet.id} feedPet={this.feedPet} index={index} />
      );
    });
  }

  addNewPet = (petName) => {
    const newPet = {
      name: petName,
      hunger: 0,
      sleepiness: 0,
      boredom: 0,
      id: uuidv4(),
    };

    this.setState((prevState) => {
      const updatedPetsData = prevState.petsData.slice();
      updatedPetsData.push(newPet);

      return { petsData: updatedPetsData };
    });
  };

  feedPet = (petIndex) => {
    this.setState((prevState) => {
      const petsDataClone = JSON.parse(JSON.stringify(prevState.petsData));
      const hungerVal = petsDataClone[petIndex].hunger;

      if (hungerVal > 0 && prevState.bagsOfFood > 0) {
        petsDataClone[petIndex].hunger = hungerVal - 1;

        return {
          petsData: petsDataClone,
          bagsOfFood: prevState.bagsOfFood - 0.5,
        };
      }
    });
  };

  handleLightClick = () => {
    // this.state.lightsOn ? this.setState({ lightsOn: false }) : this.setState({ lightsOn: true });

    this.setState((prevState) => {
      return { lightsOn: !prevState.lightsOn };
    });
  };

  handleFoodClick = () => {
    this.setState((prevState) => {
      return { bagsOfFood: prevState.bagsOfFood + 1 };
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className={`app ${this.state.lightsOn ? "lightson" : "lightsoff"}`}>
        <div className="container">
          <h1 className="header">Tamagotchi</h1>

          <div className="controlsRow">
            <Form addNewPet={this.addNewPet} />

            <div className="gameControls">
              <p className="gameControls_bagsOfFood">
                Bags of Food: {this.state.bagsOfFood}
              </p>
              <input
                onClick={this.handleFoodClick}
                type="submit"
                className="gameControls_button"
                value="Buy Food"
              />
              <input
                onClick={this.handleLightClick}
                className="gameControls_button"
                type="submit"
                value={
                  this.state.lightsOn ? "Turn Out Lights" : "Turn On Lights"
                }
              />
            </div>
          </div>

          <div className="pets">{this.getPets(this.state.petsData)}</div>
        </div>
      </div>
    );
  }
}

// function App() {
//   const getPets = (pets) => pets.map((pet) => <Pet pet={pet} key={pet.id} />);

//   return (
//     <div className="App container">
//       <h1 className="header">Tomagotchi</h1>

//       <div className="controlsRow">
//         <Form />
//       </div>

//       <div className="pets">
//         {getPets(petsData)}
//       </div>
//     </div>
//   );
// }

export default App;
