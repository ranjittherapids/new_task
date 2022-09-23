import { ADD_USER } from "./constant"
const initialState={
    userData:[]

}
export const reducer=(state = initialState, action)=> {
    const {type,payload}=action
    console.log(action)
    switch (type) {
      case ADD_USER:
        return {
          ...state,
          userData:[...state.userData,payload]
        };
      default:
        return state;
    }
  }