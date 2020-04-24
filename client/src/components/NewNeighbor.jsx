import React from 'react';

class NewNeighbor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      photoUrl: '',
      run: {
        day: '',
        time: '',
        store: ''
      }
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit() {
    console.log('hi')
    this.props.newNeighbors(this.state)
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit} onClick={this.props.showNewNeighborForm}>
          <label>
          Firstname:
            <input name="firstName" type="text" required value={this.state.firstName} onChange={this.handleInputChange} />
          </label>
          <label>
          Lastname:
            <input name="lastName" type="text" required value={this.state.lastName} onChange={this.handleInputChange} />
          </label>
          <label>
          email:
            <input name="email" type="email" required value={this.state.email} onChange={this.handleInputChange} />
          </label>
          <label>
          photo:
            <input name ="photoUrl" type="text" required value={this.state.photoUrl} onChange={this.handleInputChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
    )
  }
}

export default NewNeighbor;