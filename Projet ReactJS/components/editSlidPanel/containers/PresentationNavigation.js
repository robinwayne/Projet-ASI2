import React, { Component } from 'react';
import { connect } from 'react-redux';
import FaFastBackward from 'react-icons/lib/fa/fast-backward';
import FaFastForward from 'react-icons/lib/fa/fast-forward';
import FaForward from 'react-icons/lib/fa/forward';
import FaBackward from 'react-icons/lib/fa/backward';
import FaStop from 'react-icons/lib/fa/stop';
import FaPlay from 'react-icons/lib/fa/play';



class PresentationNavigation extends React.Component {

    //class constructor whith given properties
    constructor(props) {
        super(props);
        this.handleChange=this.handleChange.bind(this);

    }

handleChange(e){
        this.props.switchNavigation(e.target.id);

}

  //render function use to update the virtual dom
  render() {

    return (

        <div className="player text-center">
        <button type="button" id="button_fbw" className="btn" onClick = {this.handleChange}>
            <FaFastBackward/>
        </button>
        <button type="button" id="button_bw" className="btn" onClick = {this.handleChange}>
            <FaBackward/>
        </button>
        <button type="button" id="button_play" className="btn" onClick = {this.handleChange}>
            <FaPlay/>
        </button>
        <button type="button" id="button_stop" className="btn" onClick = {this.handleChange}>
            <FaStop/>
        </button>
        <button type="button" id="button_fw" className="btn" onClick = {this.handleChange}>
            <FaForward/>
        </button>
        <button type="button" id="button_ffw" className="btn" onClick = {this.handleChange}>
            <FaFastForward/>
        </button>
        </div>

        
    ); }}


export default connect()(PresentationNavigation);