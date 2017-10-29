const commandReducer= (state={to_do:{},switch_nav:{}},action) => {
	 console.log(action);
	 switch (action.type) {
	 	case 'COMMAND_PRESENTATION':
	 		const newState1={to_do:action.obj,switch_nav:state.switch_nav};
	 		return newState1;
	 	case 'SWITCH_NAVIGATION':
	 		const newState2={to_do:state.to_do,switch_nav:action.obj};
	 		return newState2;
	 default:
	 	return state;
	 }
}
export default commandReducer;