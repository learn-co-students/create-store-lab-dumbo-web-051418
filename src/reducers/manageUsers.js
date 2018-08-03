export default function manageUsers(state = {
  users: []
}, action){
  switch(action.type) {
    case "ADD_USER":
      return {users: [...state, action.user]}
    default:
      return state
  }
}

//
//
// store.dispatch({
//   type: 'ADD_USER',
//   user: {
//     username: 'bob',
//     hometown: 'philly'
//   },
// });
