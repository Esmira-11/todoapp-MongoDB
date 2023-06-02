// export function todoReducer(state, action) {

//     if (state == undefined)
//         return []
//     if (action.type == 'ADD') {
//         return [...state, action.payload]
//     }
//     else if (action.type == 'REMOVE') {
//         let todos = state.filter(q => q.id != action.payload)
//         return todos;
//     }
//     else if(action.type == 'EMPTY'){
//         return []
//     }
//     else{
//         return state;
//     }

// }