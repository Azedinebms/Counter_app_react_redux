import { DECREMENT, INCREMENT } from "../action/Type";

const counterReducer = (state = {count:0} , action) => {
switch(action.type){
    case INCREMENT:
        console.log(state)
        return {...state, count:state.count+1}
        case DECREMENT:
            return {...state, count:state.count-1}
        default:
            return state
}

}

export default counterReducer;