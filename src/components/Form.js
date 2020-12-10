import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputVal: ''
    };
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    this.props.addNewPet(this.state.inputVal);
    this.setState({ inputVal: '' });
  };

  render() {
    return (
      <form className='form'>
        <input
          onChange={(e) => this.setState({ inputVal: e.target.value })}
          className="form_input"
          type="text"
          placeholder="Enter New Pet Name"
          value={this.state.inputVal}
        />
        <input
          onClick={this.handleFormSubmit}
          className="form_button"
          type="submit"
          value="Create New Pet" />
      </form>
    );
  }
}
// function Form() {
//   return (
//     <form className='form'>
//       <input
//         className="form_input"
//         type="text"
//         placeholder="Enter New Pet Name"
//       />
//       <input className="form_button" type="submit" value="Create New Pet" />
//     </form>
//   );
// }

export default Form;