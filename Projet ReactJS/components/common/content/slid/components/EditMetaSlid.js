import React, { Component } from 'react';
import BrowseContentPanel from '../../../../../components/browseContentPanel/containers/BrowseContentPanel';
import Content from '../../../../../components/common/content/containers/Content';
import { connect } from 'react-redux';


class EditMetaSlid extends Component {
  constructor(props) {
    super(props);   
    this.getSlid=this.getSlid.bind(this);
  }

  getSlid(){

    let arrayRender=[];
    for(var key in this.props.contentMap){
      if(this.props.contentMap.hasOwnProperty(key)){
        if(this.props.contentMap[key].id == this.props.content_id){
          arrayRender.push(
            <Content
            id={this.props.contentMap[key].id}
            src={this.props.contentMap[key].src}
            type={this.props.contentMap[key].type}
            title={this.props.contentMap[key].title}
            onlyContent="1"
            />
            );
          break;
        }
      }
    }
    return arrayRender;
  }
  
  render() {
    let display;
    const currentSlid=this.getSlid();
    console.log(currentSlid)
    switch(this.props.displayMode){
      case "SHORT":
      display=(
        <div onClick={this.props.updateSelectedSlid}>
          <div>
            <h3>{this.props.title}</h3> 
            <h3>{this.props.txt}</h3>
            <div>
            {currentSlid}
            </div> 
          </div>
        </div>

        );
        break;
        case "FULL_MNG":
        display=(
        <div>
          <div className="form-group">
            <label htmlFor="currentSlideTitle">Title </label>
              <input
                type="text"
                className="form-control"
                id="currentSlideTitle"
                onChange={this.props.handleChangeTitle}
                value={this.props.title}
              />
              <label htmlFor="currentSlideText">Text</label>
              <textarea
              rows="5"
              type="text"
              className="form-control"
              id="currentSlideText"
              onChange={this.props.handleChangeTxt}
              value={this.props.txt}>
              </textarea>
            </div>
          <div onDragOver={this.props.onDragOver} onDrop={this.props.drop}>
          {currentSlid}
          </div> 
        </div>

        );
        break;
      }
      return (

      <div className="SlideEdit">
      <div className="file">
      {display}
      </div>  
      </div>          
      );
    }
  }

  export default connect()(EditMetaSlid);