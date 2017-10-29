//var Tools = require('../services/Tools.js');

const updateModelReducer= (state={presentation:{},content_map:{}},action) => {
	 console.log(action);
	 switch (action.type) {
		 case 'UPDATE_PRESENTATION':
		 		const newState1={presentation:action.obj,content_map:state.content_map};
		 		return newState1;
		 case 'UPDATE_PRESENTATION_SLIDS':
		 		const newState2={presentation:action.obj,content_map:state.content_map};
		 		return newState2;
		 case 'UPDATE_CONTENT_MAP':
		 		const newState3={presentation:state.presentation,content_map:action.obj};
		 		return newState3;
		 case 'ADD_CONTENT':
		 		const newState4={presentation:state.presentation,content_map:action.obj};
		 		return newState4;
		 default:
		  return state;
	}
}
export default updateModelReducer;
