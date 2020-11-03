// export const initialState = {
//   item: 'Learn about reducers',
//   completed: false,
//   id: 3892987589
// }

export const initialState = {
  loading: false, // When you are loading, waiting for a promise, etc...
  list: []
}

const ADD_TO_LIST = 'ADD_TO_LIST'
export const addToList = payload => {
  return({type:ADD_TO_LIST, payload})
}

const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED'
export const toggleCompleted = id => {
  return({type:TOGGLE_COMPLETED, payload:id})
}

const REMOVE_FROM_LIST = 'REMOVE_FROM_LIST'
export const removeFromList = id => {
  return({type:REMOVE_FROM_LIST, payload:id})
}


export const reducer = (state, action) => {
  console.log(state, action)
  switch(action.type){ 
    
    case(ADD_TO_LIST):
      return({...state, list:[...state.list, action.payload]})

    case(TOGGLE_COMPLETED):
      return({...state, list:state.list.map((task) => {
        if(task.id === action.payload){
          return{
            ...task,
            completed:!task.completed
          }
        }else {
          return task
        }
      })
    })

    case(REMOVE_FROM_LIST):
      return({...state, list:state.list.filter((task) => (!task.completed))
    })

    default:
      return(state)
  }
}