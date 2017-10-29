import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditMetSlid from '../../common/content/slid/components/EditMetaSlid';
import Slid from '../../common/content/slid/containers/Slid';
import PresentationNavigation from './PresentationNavigation';
import {updateSlid } from '../../../actions'
import {updatePresentationSlids } from '../../../actions'
import {updateCurrentSlid } from '../../../actions'
import {switchNav } from '../../../actions'


class EditSlidPanel extends React.Component {

    //class constructor whith given properties
    constructor(props) {
        super(props);
        this.state={
            selected_slid:this.props.selected_slid,
            contentMap:this.props.contentMap,
            first_play:this.props.currentSlid,
        }
        this.updateSlid=this.updateSlid.bind(this);
        this.updatePresSlid=this.updatePresSlid.bind(this);
        this.switchNavigation=this.switchNavigation.bind(this);
        this.read=this.read.bind(this);
        this.stop=this.stop.bind(this);

    }

updateSlid(id,title,txt,content_id){
        const tmpSlid={
                id:id,
                title:title,
                txt:txt,
                content_id:content_id,
            };
        this.props.dispatch(updateSlid(tmpSlid));
        this.props.dispatch(updateCurrentSlid(tmpSlid));

}

updatePresSlid(id,title,txt,content_id){
        var slidArray_trans=JSON.parse(JSON.stringify(this.props.presa.slidArray));
        for(var i=0; i<slidArray_trans.length;i++){
            if(slidArray_trans[i].id == id){
                slidArray_trans[i].id=id;
                slidArray_trans[i].title=title;
                slidArray_trans[i].txt=txt;
                slidArray_trans[i].content_id=content_id;
                break;
            }
        }
        const tmpPres={
                id:this.props.presa.id,
                title:this.props.presa.title,
                description:this.props.presa.description,
                slidArray:slidArray_trans,
            };
        this.props.dispatch(updatePresentationSlids(tmpPres));


}
    
read(){
    var size=Object.keys(this.props.presa.slidArray).length;
    for(var key in this.props.presa.slidArray){
        if(this.props.presa.slidArray.hasOwnProperty(key)){
            if(this.props.presa.slidArray[size-1].id==this.props.currentSlid.id){
                const tmpSlid={
                id:this.props.presa.slidArray[0].id,
                title:this.props.presa.slidArray[0].title,
                txt:this.props.presa.slidArray[0].txt,
                content_id:this.props.presa.slidArray[0].content_id,
            };
            this.props.dispatch(updateCurrentSlid(tmpSlid));
            clearInterval(this.state.intervalId);
            break;
            }else if(this.props.presa.slidArray[key].id==this.props.currentSlid.id){
                if(this.props.presa.slidArray[Number(key)+1].id!=undefined){
                const tmpSlid={
                id:this.props.presa.slidArray[Number(key)+1].id,
                title:this.props.presa.slidArray[Number(key)+1].title,
                txt:this.props.presa.slidArray[Number(key)+1].txt,
                content_id:this.props.presa.slidArray[Number(key)+1].content_id,
            };
            this.props.dispatch(updateCurrentSlid(tmpSlid));
            this.props.dispatch(updateSlid(tmpSlid));
            break;

                }
            }
        }
    }
}

stop(){
    clearInterval(this.state.intervalId);
}

switchNavigation(button){
    this.props.dispatch(switchNav(button));

    switch(button){
        case "button_fw":
        for(var key in this.props.presa.slidArray){
            if(this.props.presa.slidArray.hasOwnProperty(key)){
                if(this.props.presa.slidArray[key].id==this.props.selected_slid.id){
                    if(this.props.presa.slidArray[Number(key)+1]!=undefined){
                        const tmpSlid={
                            id:this.props.presa.slidArray[Number(key)+1].id,
                            title:this.props.presa.slidArray[Number(key)+1].title,
                            txt:this.props.presa.slidArray[Number(key)+1].txt,
                            content_id:this.props.presa.slidArray[Number(key)+1].content_id,
                        };
                        this.props.dispatch(updateCurrentSlid(tmpSlid));
                        this.props.dispatch(updateSlid(tmpSlid));
                        break;
                    }
                }
            }
        }
        break;
        case "button_ffw":
            var size=Object.keys(this.props.presa.slidArray).length;
                        const tmpSlid1={
                            id:this.props.presa.slidArray[size-1].id,
                            title:this.props.presa.slidArray[size-1].title,
                            txt:this.props.presa.slidArray[size-1].txt,
                            content_id:this.props.presa.slidArray[size-1].content_id,
                        };
                        this.props.dispatch(updateCurrentSlid(tmpSlid1));
                        this.props.dispatch(updateSlid(tmpSlid1));


        break;
        case "button_fbw":
                        const tmpSlid2={
                            id:this.props.presa.slidArray[0].id,
                            title:this.props.presa.slidArray[0].title,
                            txt:this.props.presa.slidArray[0].txt,
                            content_id:this.props.presa.slidArray[0].content_id,
                        };
                        this.props.dispatch(updateCurrentSlid(tmpSlid2));
                        this.props.dispatch(updateSlid(tmpSlid2));
        break;
        case "button_fw":
        for(var key in this.props.presa.slidArray){
            if(this.props.presa.slidArray.hasOwnProperty(key)){
                if(this.props.presa.slidArray[key].id==this.props.selected_slid.id){
                    if(this.props.presa.slidArray[Number(key)+1]!=undefined){
                        const tmpSlid3={
                            id:this.props.presa.slidArray[Number(key)+1].id,
                            title:this.props.presa.slidArray[Number(key)+1].title,
                            txt:this.props.presa.slidArray[Number(key)+1].txt,
                            content_id:this.props.presa.slidArray[Number(key)+1].content_id,
                        };
                        this.props.dispatch(updateCurrentSlid(tmpSlid3));
                        this.props.dispatch(updateSlid(tmpSlid3));
                        break;
                    }
                }
            }
        }
        break;
        case "button_bw":
        for(var key in this.props.presa.slidArray){
            if(this.props.presa.slidArray.hasOwnProperty(key)){
                if(this.props.presa.slidArray[key].id==this.props.selected_slid.id){
                    if(this.props.presa.slidArray[Number(key)-1]!=undefined){
                        const tmpSlid4={
                            id:this.props.presa.slidArray[Number(key)-1].id,
                            title:this.props.presa.slidArray[Number(key)-1].title,
                            txt:this.props.presa.slidArray[Number(key)-1].txt,
                            content_id:this.props.presa.slidArray[Number(key)-1].content_id,
                        };
                        this.props.dispatch(updateCurrentSlid(tmpSlid4));
                        this.props.dispatch(updateSlid(tmpSlid4));
                        break;
                    }
                }
            }
        }
        break;
        case "button_play":
            var intervalId=setInterval(this.read,5000);
            this.setState({intervalId:intervalId})
        break;
        case "button_stop":
            this.stop();
        break;
        default:
        break;

    }
}
  //render function use to update the virtual dom
  render() {

    return (

        <div className="EditSlidPanel">
            <PresentationNavigation switchNavigation={this.switchNavigation}/>
            <Slid updatePresSlid={this.updatePresSlid} updateSlid={this.updateSlid} id={this.props.selected_slid.id} title={this.props.selected_slid.title} txt={this.props.selected_slid.txt} content_id={this.props.selected_slid.content_id} contentMap={this.props.contentMap} displayMode="FULL_MNG"/>
        </div>

        
    ); }}


const mapStateToProps = (state, ownProps) => {
    return {
        selected_slid: state.selectedReducer.slid,
        contentMap: state.updateModelReducer.content_map,
        presa: state.updateModelReducer.presentation,
        currentSlid: state.selectedReducer.current_slid,

    } };


export default connect(mapStateToProps)(EditSlidPanel);