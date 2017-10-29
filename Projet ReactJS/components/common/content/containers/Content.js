import React, { Component } from 'react';
import Visual from './components/Visual';
import { connect } from 'react-redux';
import {updateDraggedElt } from '../../../../actions';


class Content extends Component {

    //class constructor whith given properties
    constructor(props) {
        super(props);
        this.state={
            id:this.props.id,
            src:this.props.src,
            type:this.props.type,
            title:this.props.title,
            onlyContent:this.props.onlyContent,
        }
        this.drag=this.drag.bind(this);
    }
    
drag(e){
    console.log(e.target.id);
    const tmpSlid={
        id:this.props.selected_slid.id,
        title:this.props.selected_slid.title,
        txt:this.props.selected_slid.txt,
        content_id:e.target.id,
    }
    this.props.dispatch(updateDraggedElt(tmpSlid));
}

  //render function use to update the virtual dom
  render() {

    return (

            <div className="Content">
                <Visual drag={this.drag} id={this.props.id} src={this.props.src} type={this.props.type} title={this.props.title} onlyContent={this.props.onlyContent}/>
            </div>

        
    ); }}


const mapStateToProps = (state, ownProps) => {
    return {
        selected_slid: state.selectedReducer.slid,
    } };


export default connect(mapStateToProps)(Content);