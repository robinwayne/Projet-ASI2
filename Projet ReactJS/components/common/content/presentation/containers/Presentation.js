import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slid from '../../slid/containers/Slid';
import {updatePresentation } from '../../../../../actions';
import {updateSlid } from '../../../../../actions';
import {updateCurrentSlid } from '../../../../../actions';
import {updatePresentationSlids } from '../../../../../actions';
import {sendNavCmd } from '../../../../../actions';
import CommandButton from '../../../../browsePresentationPanel/containers/CommandButton'
import Tools from '../../../../../services/Tools.js'
import './presentation.css'

class Presentation extends Component {

    //class constructor whith given properties
    constructor(props) {
        super(props);
        this.state={
            id:this.props.id,
            title:this.props.src,
            description:this.props.description,
            slidArray:this.props.title,
            contentMap:this.props.contentMap,
        }
        this.getAllSlide=this.getAllSlide.bind(this);
        this.handleChangeTitlePres=this.handleChangeTitlePres.bind(this);
        this.handleChangeDescriptionPres=this.handleChangeDescriptionPres.bind(this);
        this.addSlid=this.addSlid.bind(this);
        this.removeSlid=this.removeSlid.bind(this);
        this.saveSlid=this.saveSlid.bind(this);

    }

getAllSlide(){
     let array_render=[];
      var maMap=this.props.contentMap;
      console.log(maMap);
      console.log(this.props.presa.slidArray);
  if(this.props.presa.slidArray.length != undefined){
      for(var i=0; i<this.props.presa.slidArray.length; i++){
        console.log(this.props.presa.slidArray[i].content_id);
        array_render.push(
            <Slid
              key={this.props.presa.slidArray[i].id} 
              id={this.props.presa.slidArray[i].id} 
              title={this.props.presa.slidArray[i].title}
              txt={this.props.presa.slidArray[i].txt} 
              content_id={this.props.presa.slidArray[i].content_id}  
              contentMap={this.props.contentMap}
              displayMode="SHORT"
            />

            );
      }
      }
     return array_render;
 }

 handleChangeDescriptionPres(e){
    const tmpPres={
      id:this.props.presa.id,
      title:this.props.presa.title,
      description:e.target.value,
      slidArray:this.props.presa.slidArray,
    }
    this.props.dispatch(updatePresentation(tmpPres));
 }

 handleChangeTitlePres(e){

      const tmpPres={
      id:this.props.presa.id,
      title:e.target.value,
      description:this.props.presa.description,
      slidArray:this.props.presa.slidArray,
    }
    this.props.dispatch(updatePresentation(tmpPres));
 }

 addSlid(){
    var id=Tools.generateUUID();
    const tmpSlid={
        id:id,
        title:"Title",
        txt:"Text",
        content_id:"62cf58dd-ecb1-495a-899c-b7c633fa1df7",
    }
    this.props.dispatch(updateSlid(tmpSlid));
    this.props.dispatch(updateCurrentSlid(tmpSlid));
    var slidArray_trans=JSON.parse(JSON.stringify(this.props.presa.slidArray));
    slidArray_trans[this.props.presa.slidArray.length]={};
    slidArray_trans[this.props.presa.slidArray.length].id=id;
    slidArray_trans[this.props.presa.slidArray.length].title="Title";
    slidArray_trans[this.props.presa.slidArray.length].txt="Text";
    slidArray_trans[this.props.presa.slidArray.length].content_id="62cf58dd-ecb1-495a-899c-b7c633fa1df7";
    const tmpPres={
      id:this.props.presa.id,
      title:this.props.presa.title,
      description:this.props.presa.description,
      slidArray:slidArray_trans,
    }
    this.props.dispatch(updatePresentationSlids(tmpPres));
 }

  removeSlid(){
    this.props.dispatch(updateSlid({}));
    var slidArray_trans=JSON.parse(JSON.stringify(this.props.presa.slidArray));
    for(var i=0; i<slidArray_trans.length; i++){
      if(slidArray_trans[i].id=this.props.slids.id){
        slidArray_trans.splice(i,1);
        break;
      }
    }
    const tmpPres={
      id:this.props.presa.id,
      title:this.props.presa.title,
      description:this.props.presa.description,
      slidArray:slidArray_trans,
    }
    this.props.dispatch(updatePresentationSlids(tmpPres));
 }


saveSlid(){
    this.props.dispatch(sendNavCmd('SAVE_CMD'));
 }

  //render function use to update the virtual dom
  render() {

    const display_slid_list= this.getAllSlide();

    return (

            <div className="Presentation">
            <div className="col-sm-12 col-lg-12 col-md-12">
            <CommandButton addSlid={this.addSlid} removeSlid={this.removeSlid} saveSlid={this.saveSlid}/>
            </div>
                <div className="form_pres" className="col-sm-12 col-lg-12 col-md-12">
                <div className="form_group">
                    <div className="row">
                        <label htmlFor="currentPresentationTitle">Title </label>
                           <input
                           type="text"
                           className="form-control-pres"
                           id="currentPresentationTitle"
                           onChange={this.handleChangeTitlePres}
                           value={this.props.presa.title}
                           />
                    </div>
                    <div className="row">
                          <label htmlFor="currentPresentationText">Text</label>
                           <textarea
                           rows="5"
                           type="text"
                           className="form-control"
                           id="currentPresentationText"
                           onChange={this.handleChangeDescriptionPres}
                           value={this.props.presa.description}>
                           </textarea>
                    </div>
                </div>
                </div>
                <div className="col-sm-12 col-lg-12 col-md-12">
                <div className="pre-scrollable pres">
                <div>
                    {display_slid_list}
                </div>
                </div>
                </div>
            </div>

        
    ); }}

const mapStateToProps = (state, ownProps) => {
    return {
        contentMap: state.updateModelReducer.content_map,
        presa: state.updateModelReducer.presentation,
        slids: state.selectedReducer.slid,
    } };


export default connect(mapStateToProps)(Presentation);