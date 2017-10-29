import React from 'react';
import './main.css';
import '../../lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';
import * as contentMapTmp from '../../source/contentMap.json';
import * as presTmp from '../../source/pres.json';
import {updateContentMap } from '../../actions';
import {updatePresentation } from '../../actions';
import {updateCurrentSlid } from '../../actions';
import Comm from '../../services/Comm.js';

import Content from '../../components/common/content/containers/Content';
import BrowseContentPanel from '../../components/browseContentPanel/containers/BrowseContentPanel';
import Presentation from '../../components/common/content/presentation/containers/Presentation';
import Slid from '../../components/common/content/slid/containers/Slid';
import EditSlidPanel from '../../components/editSlidPanel/containers/EditSlidPanel';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import globalReducer from '../../reducers';

const store = createStore(globalReducer);

export default class Main extends React.Component{
	 constructor(props) {
		 super(props);
		 this.comm = new Comm();
		 this.state = {
		 		contentMap:contentMapTmp,
		 		current_pres:presTmp
		 }
		 this.loadContentUpdate=this.loadContentUpdate.bind(this);
		 this.loadPresUpdate=this.loadPresUpdate.bind(this);
		 this.callbackErr=this.callbackErr.bind(this);

		 store.dispatch(updatePresentation(presTmp));
		 store.dispatch(updateContentMap(contentMapTmp));
		 store.dispatch(updateCurrentSlid(presTmp.slidArray[0]));



		 let unsubscribe = store.subscribe(() =>{

		 	this.comm.switchNav(store.getState().commandReducer.switch_nav,store.getState().updateModelReducer.presentation.id);
		 	if(store.getState().commandReducer.to_do == "SAVE_CMD"){
		 		console.log(store.getState().updateModelReducer.presentation);
		 		this.comm.savPres(store.getState().updateModelReducer.presentation,this.callbackErr);
		 	}
		 });

		this.comm.loadPres(0,this.loadPresUpdate,this.callbackErr);
		this.comm.loadContent(this.loadContentUpdate,this.callbackErr);
		this.comm.socketConnection(this.state.uuid);

	 }

loadContentUpdate(data){
	store.dispatch(updateContentMap(data));
}

loadPresUpdate(data){
	store.dispatch(updatePresentation(data));
	store.dispatch(updateCurrentSlid(data.slidArray[0]));
}

callbackErr(msg){
	console.error(msg);
}

	 render() {
	 	return (
	 		<Provider store={store} >
		 		<div className='container-fluid'>
		 			<div className="row">
		 			<div className='col-md-12 col-lg-12'>
		 			</div>
		 			<div className="row">
		 				<div className='col-md-3 col-lg-3 scrollable'>
		 					<Presentation/>
		 				</div>
						<div className='col-md-6 col-lg-6'>
							<EditSlidPanel/>
						</div>
						<div className='col-md-3 col-lg-3'>
							<BrowseContentPanel/>
						</div>
				 	</div>
				 	</div>

				</div>
			</Provider>
	 	);
	 }
}



