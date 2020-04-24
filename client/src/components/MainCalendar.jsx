import React from 'react';
import RunForm from './RunForm.jsx';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import '!style-loader!css-loader!react-big-calendar/lib/css/react-big-calendar.css'
import Modal from 'react-modal';
import ConfirmRunAdd from './ConfirmRunAdd.jsx'
import styles from '../styles/addRunModal.css'



const localizer = momentLocalizer(moment)
 
class MainCalendar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      events: [
        {
          start: '',
          end: '',
          title: '',
        }
      ]
    } 
    this.addToCalendar = this.addToCalendar.bind(this);
  }

  handleSelect = ({ start, end }) => {
    const title = window.prompt('New Event name')
    const showJoinRunForm = false;
    const runnerName = 'George'
    if (title)
      this.setState({
        events: [
          ...this.state.events,
          {
            start,
            end,
            title,
            runnerName,
            showJoinRunForm,
          },
        ],
      })
  }
  handleEventSelect = (event) => {
    this.setState({showJoinRunForm: true})
  }

  addRun = (event) => {

  }

  addToCalendar(event) {
    console.log('the event', this.state.events)
    const newCal = this.state.events
    newCal.push(event);
    console.log(newCal)
    this.setState({events: newCal})
  }

  render() {
    return (
      <div>
       <Calendar
          selectable
          localizer={localizer}
          events={this.state.events}
          defaultView='week'
          scrollToTime={new Date(1970, 1, 1, 6)}
          defaultDate={new Date(2020, 4, 21)}
          onSelectSlot={this.handleSelect}
          onSelectEvent={(event) => this.handleEventSelect(event)}
        />
        <Modal 
          className={styles.addRunModal} 
          overlayClassName={styles.myOverlay}
          isOpen={this.state.showJoinRunForm}
          onRequestClose={() => this.setState({showJoinRunForm: false})}
          contentLabel="Add Run"
          >
          <ConfirmRunAdd />
        </Modal>
        <RunForm addToCalendar={this.addToCalendar}/>
      </div>
    );
  }
}

export default MainCalendar;

