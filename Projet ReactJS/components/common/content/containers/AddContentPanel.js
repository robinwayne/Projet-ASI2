import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class AddContentPanel extends Component {

    //class constructor whith given properties
    constructor(props) {
        super(props);
        this.handleClose=this.handleClose.bind(this);
        this.handleSave=this.handleSave.bind(this);
        this.handleOpen=this.handleOpen.bind(this);

    }

state = {
	open: false,
};

handleSave(e){
 this.setState({open:false});
 var type = document.getElementById('addContent_type').value;
 var title = document.getElementById('addContent_title').value;
 var url = document.getElementById('addContent_url').value;
this.props.addContents(title,type,url);
}

handleClose(e){
 this.setState({open:false});
}

handleOpen(e){
 this.setState({open:true});
}    



 render() {
	const actions = [
	<FlatButton
		label="Cancel"
		primary={true}
		onClick={this.handleClose}
	/>, 
	<FlatButton
		label="Submit"
		primary={true}
		onClick={this.handleSave}
	/>,
	];
   
return (
	<div className="laaa">
	<MuiThemeProvider>
		<div className="col-sm-12 col-lg-12 col-md-12"> 
			<FlatButton label="Add Content" onClick={this.handleOpen} primary={true}/>
		</div>
			<Dialog
				title="Add a new content" 
				actions={actions}
				modal={false}
				open={this.state.open}
				onRequestClose={this.handleClose}
			>
				<form className="AddContent">
					<div className="form-group">
        				<div className="row">
							<label>Title</label>
							<input id="addContent_title" type="text" className="form-controle-pres"/>
						</div>
        				<div className="row">
							<label>Type</label>
							<select id="addContent_type" type="text" className="form-controle-pres">
								<option value="img">img</option>
								<option value="img_ul">img_url</option>
								<option value="web">web</option>
								<option value="video">video</option>
							</select>
						</div>
        				<div className="row">
							<label>URL</label>
							<input id="addContent_url" type="text" className="form-controle-pres"/>
						</div>
					</div>
				</form>
			</Dialog>
	</MuiThemeProvider>

			</div>

    ); }
}


export default connect()(AddContentPanel);