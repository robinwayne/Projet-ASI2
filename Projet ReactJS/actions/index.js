export const setSelectedSlid=(slid_obj)=>{
 return {
 type: 'UPDATE_SELECTED_SLID',
 obj:slid_obj
 };
}

export const updateContentMap=(content_map)=>{
 return {
 type: 'UPDATE_CONTENT_MAP',
 obj:content_map
 };
}

export const updatePresentation=(presentation)=>{
 return {
 type: 'UPDATE_PRESENTATION',
 obj:presentation
 };
}

export const updateSlid=(slid_obj)=>{
 return {
 type: 'UPDATE_SLID',
 obj:slid_obj
 };
}

export const updatePresentationSlids=(presentation)=>{
 return {
 type: 'UPDATE_PRESENTATION_SLIDS',
 obj:presentation
 };
}

export const updateDraggedElt=(draggedElt)=>{
 return {
 	 type: 'UPDATE_SELECTED_DRAG',
 obj:draggedElt
 };
}

export const addContent=(content_map)=>{
 return {
 type: 'ADD_CONTENT',
 obj:content_map
 };
}

export const savePresentation=(presentation)=>{
 return {
 type: 'SAVE_PRESENTATION',
 obj:presentation
 };
}

export const sendNavCmd=(command)=>{
 return {
 type: 'COMMAND_PRESENTATION',
 obj:command
 };
}

export const switchNav=(command)=>{
 return {
 type: 'SWITCH_NAVIGATION',
 obj:command
 };
}

export const updateCurrentSlid=(slid)=>{
 return {
 type: 'UPDATE_CURRENT_SLID',
 obj:slid
 };
}
