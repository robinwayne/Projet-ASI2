import React, { Component } from 'react';
import { connect } from 'react-redux';
import FaPlusCircle from 'react-icons/lib/fa/plus-circle';
import FaClose from 'react-icons/lib/fa/close';
import FaPlusDownload from 'react-icons/lib/fa/download';


class CommandButton extends Component {

    //class constructor whith given properties
    constructor(props) {
        super(props);
        this.handleAdd=this.handleAdd.bind(this);
        this.handleSave=this.handleSave.bind(this);
        this.handleRemove=this.handleRemove.bind(this);

    }

handleSave(e){
 this.props.saveSlid();
}

handleAdd(e){
 this.props.addSlid();
}

handleRemove(e){
 this.props.removeSlid();
}    
  render() {
    return (

            <div className="row">
		<div className="col-sm-4 col-lg-4 col-md-4"> 
		<button type="button" className="btn btn-primary btn-block" onClick = {this.handleAdd}>
			<FaPlusCircle/>
		</button>
         </div>
        <div className="col-sm-4 col-lg-4 col-md-4"> 
		<button type="button" className="btn btn-primary btn-block" onClick = {this.handleRemove}>
			<FaClose/>
		</button>
         </div>
        <div className="col-sm-4 col-lg-4 col-md-4"> 
		<button type="button" className="btn btn-primary btn-block" onClick = {this.handleSave}>
			<FaPlusDownload/>
		</button>
        
		</div>
            </div>

        
    ); }}


export default connect()(CommandButton);