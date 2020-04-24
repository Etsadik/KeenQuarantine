import React from 'react';
import { ajax } from 'jquery';
import Modal from 'react-modal';
import RunList from './RunList.jsx'
import Title from './Title.jsx'
import ScheduleRun from './ScheduleRun.jsx'
import MainCalendar from './MainCalendar.jsx'
import NewNeighbor from './NewNeighbor.jsx'
import NewNeighborButton from './NewNeighborButton.jsx'
import NewCal from './NewCalendar.jsx';
import styles from '../styles/addRunModal.css'
import MyMapComponent from './Map.jsx'
import config from '../../../config.js'
const googleMapURL = `https://maps.googleapis.com/maps/api/js?key=${config.token}&callback=initMap`


class App extends React.Component {
  constructor(props) {  
    super(props) 
    this.state = {
      showForm: false,
      showNewNeighborForm: false,
    }
    this.getNeighbors = this.getNeighbors.bind(this);
    this.newNeighbors = this.newNeighbors.bind(this);
    this.showNeighborForm = this.showNeighborForm.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.initMap = this.initMap.bind(this);
  }

  componentDidMount() {
    console.log('mounted');
    // this.getNeighbors()
  }

  getNeighbors() {
    console.log('get ajax')
    ajax({
      method: 'GET',
      url: '/neighbors',
      success: () => console.log('get nbor success'),
      error: () => console.log('get error')
    })
  }

  newNeighbors(neighbor) {
    ajax({
      method: 'POST',
      url: '/neighbors',
      data: neighbor,
      success: () => console.log('post'),
      error: () => console.log('post error')
    })
  }

  updateRun(neighbor) {
    ajax({
      method: 'PUT',
      url: '/neighbors',
      data: neighbor,
      success: () => console.log('post'),
      error: () => console.log('post error')
    })
  }

  initMap() {
    console.log('hello')
  }

  showNeighborForm() {
    console.log(this.state.showNewNeighborForm)
    this.setState({showNewNeighborForm: true})
  }

  openModal () {
    this.setState({showForm: true})
    console.log('opened modal')
  }

  closeModal() {
    this.setState({showForm: false})
    console.log('closed')
  }

  render () {
    return (
      <div>
      <Modal 
          className={styles.addRunModal} 
          overlayClassName={styles.myOverlay}
          isOpen={this.state.showForm}
          onRequestClose={this.closeModal}
          contentLabel="Add Run"
          >
        </Modal>
        <Title />
        <MainCalendar />
        <RunList />
        <ScheduleRun onButtonClick={ this.openModal }/>
        {!this.state.showNewNeighborForm && <NewNeighborButton onShowForm={this.showNeighborForm} />}
        {this.state.showNewNeighborForm && <NewNeighbor newNeighbors={this.newNeighbors}/>}
        <MyMapComponent 
          isMarkerShown
          googleMapURL={googleMapURL}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    )
  }
}

export default App;