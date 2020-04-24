import React from 'react';

class ConfirmRunAdd extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      runnerName: '',
      day: '',
      time: '',
      store: '',
      picture: '',
      email: '',
      item: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    console.log('test');
    const target = event.target;
    const value = target.value
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    confirm(`are you sure you want ${this.state.item}`);
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
          <label>
          What item do you need?
            <input name="item" type="text" required value={this.state.item} onChange={this.handleInputChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
    )
  }
}

export default ConfirmRunAdd;