import React, { Component } from 'react';
import { connect } from 'react-redux';
import Content from '../../../components/common/content/containers/Content';
import AddContentPanel from '../../../components/common/content/containers/AddContentPanel';
import {addContent } from '../../../actions';
import './browseContentPanel.css'
import Tools from '../../../services/Tools.js';

class BrowseContentPanel extends Component {

    //class constructor whith given properties
    constructor(props) {
        super(props);
        this.getAllRobotRender=this.getAllRobotRender.bind(this);
        this.addContents=this.addContents.bind(this);

    }

getAllRobotRender(){
    let array_render=[];
    console.log(this.props.contentMap["1"]);
    var maMap=this.props.contentMap;
    Object.keys(this.props.contentMap).forEach(function(k, v){
        console.log(maMap[k]);
        array_render.push(
            <Content
                key={maMap[k].id} 
                id={maMap[k].id}
                src={maMap[k].src}
                type={maMap[k].type}
                title={maMap[k].title}
                onlyContent="0"
            />

            );
    });
    return array_render;
 }

addContents(title,type,url){
	var cloneOfA = JSON.parse(JSON.stringify(this.props.contentMap));
	var count = Object.keys(this.props.contentMap).length;
	var id = Tools.generateUUID();
	cloneOfA[count]={};
	cloneOfA[count].id=id;
	cloneOfA[count].title=title;
	cloneOfA[count].type=type;
	cloneOfA[count].src=url;
this.props.dispatch(addContent(cloneOfA));
 }
    
  render() {
    const display_list= this.getAllRobotRender();
    return (

            <div className="BrowseContentPanel">
                <div className="new_file">
                    <AddContentPanel addContents={this.addContents}/>
                </div>
		<div className="col-sm-12 col-lg-12 col-md-12"> 
                <div className="pre-scrollable content">
                    {display_list}
                </div>
		</div>
            </div>

        
    ); 
}
}

const mapStateToProps = (state, ownProps) => {
     return {
        contentMap: state.updateModelReducer.content_map,
     } };
export default connect(mapStateToProps)(BrowseContentPanel);