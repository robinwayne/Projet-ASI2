const selectedReducer= (state={slid:{},dragged_slid:{},current_slid:{}},action) => {
	 console.log(action);
	 switch (action.type) {
	 	case 'UPDATE_SELECTED_SLID':
	 		const newState1={slid:action.obj,dragged_slid:state.dragged_slid,current_slid:state.current_slid};
	 		return newState1;
	 	case 'UPDATE_SLID':
	 		const newState2={slid:action.obj,dragged_slid:state.dragged_slid,current_slid:state.current_slid};
	 		return newState2;
	 	case 'UPDATE_SELECTED_DRAG':
	 		const newState3={slid:state.slid,dragged_slid:action.obj,current_slid:state.current_slid};
	 		return newState3;
	 	case 'UPDATE_CURRENT_SLID':
	 		const newState4={slid:state.slid,dragged_slid:state.dragged_slid,current_slid:action.obj};
	 		return newState4;
	 default:
	 	return state;
	 }
}
export default selectedReducer;