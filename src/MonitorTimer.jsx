import React, { Component } from 'react';
import IdleTimer from 'react-idle-timer';
import ReactGA from "react-ga";

import LandingPage from './Landingpage';
import { PageView, initGA, GaEvent } from './Analytics/Tracking'
 
class MonitorTimer extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      timeout: 1000*60*15,
      isTimeout: false,
      clientId: null
    }
    this.idleTimer = null
    this.onAction = this._onAction.bind(this)
    this.onActive = this._onActive.bind(this)
    this.onIdle = this._onIdle.bind(this)
  }

  componentDidMount() {
    initGA('UA-151893001-1');
    PageView();
  }
 
  render() {
    return (
      <div>
        <IdleTimer
          ref={ref => { this.idleTimer = ref }}
          element={document}
          onActive={this.onActive}
          onIdle={this.onIdle}
          onAction={this.onAction}
          debounce={250}
          timeout={this.state.timeout} />
        <LandingPage />
      </div>
    )
  }
 
  _onAction(e) {
    //console.log('user did something', e)
    this.setState({isTimeout: false})
  }
 
  _onActive(e) {
    //console.log('user is active', e)
    //console.log('time remaining', this.idleTimer.getRemainingTime())
    this.setState({isTimeout: false})
  }
 
  _onIdle(e) {
    //console.log('user is idle', e);
    const sessionTime = (this.idleTimer.getElapsedTime()/1000).toString();
    //console.log('elapsed time', sessionTime);

    this.setState({isTimeout: true})
    let clientId = null;
    ReactGA.ga(
      function (tracker) {
        clientId = tracker.get('clientId');
        this.setState({ clientId: clientId});
      }
    );
    GaEvent('session time', clientId.toString(), sessionTime);
  }
}
export default MonitorTimer;