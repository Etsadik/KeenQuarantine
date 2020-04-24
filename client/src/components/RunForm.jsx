import React from 'react';
import moment from 'moment';
class RunForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      runnerName: '',
      day: '',
      time: '',
      store: '',
      picture: '',
      email: ''
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

  handleSubmit(event) {
    event.preventDefault();
    this.props.addToCalendar({start: moment(this.state.time), end: moment(this.state.time), title: this.state.runnerName, store: this.state.store})
    // this.props.updateRun(this.state)
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
          <label>
          runnerName:
            <input name="runnerName" type="text" required value={this.state.runnerName} onChange={this.handleInputChange} />
          </label>
          <label>
          day:
            <input name="day" type="text" required value={this.state.day} onChange={this.handleInputChange} />
          </label>
          <label>
          time:
            <input name ="time" type="text" required value={this.state.time} onChange={this.handleInputChange} />
          </label>
          <label>
          store:
            <input name ="store" type="text" required value={this.state.store} onChange={this.handleInputChange} />
          </label>          
          <label>
          picture:
            <input name ="picture" type="text" required value={this.state.picture} onChange={this.handleInputChange} />
          </label>
          <label>
          email:
            <input name ="email" type="text" required value={this.state.email} onChange={this.handleInputChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
    )
  }
}

export default RunForm;