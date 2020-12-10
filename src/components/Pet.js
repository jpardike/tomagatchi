function Pet(props) {
  return (
    <div className="pet">

      <div className="pet_name">{props.pet.name}</div>

      <div className="pet_img"></div>

      <div className="pet_statusGroup">
  <div className="pet_status">hunger: {props.pet.hunger}</div>
        <div className="pet_status">sleepiness: {props.pet.sleepiness}</div>
        <div className="pet_status">boredom: {props.pet.boredom}</div>
      </div>

      <div className="pet_interactions">
        <button className="pet_interactionButton" onClick={() => props.feedPet(props.index)} >Feed</button>
        <button className="pet_interactionButton">Play</button>
      </div>

    </div>
  );
}

export default Pet;