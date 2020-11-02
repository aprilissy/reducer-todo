// export const initialState = {
//   item: 'Learn about reducers',
//   completed: false,
//   id: 3892987589
// }
const ADD_TO_LIST = 'ADD_TO_LIST'
export const addToList = payload => {
  return({type:ADD_TO_LIST, payload})
}

export const initialState = {
  loading: false, // When you are loading, waiting for a promise, etc...
  list: []
}


export const reducer = (state, action) => {
  console.log(state, action)
  switch(action.type){ 
    
    case(ADD_TO_LIST):
      return({...state, list:[...state.list, action.payload]})

    default:
      return(state)
  }
}