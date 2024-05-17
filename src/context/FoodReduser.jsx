export function foodReduser (state, action){
  
  switch (action.type) {
    case "ADD_TO_FAVOITE":{
      const index = state.findIndex(i => i.id === state.id)
      console.log(index);
    }
      break
    default:  return state
      
  }

}