const INITIAL_STATE = {
    data:''
}


export default (state = INITIAL_STATE,action) =>{
    switch(action.type){

        case 'SET_SEARCH': return { ...state, data: action.data };
        case 'RESET': return INITIAL_STATE
     
        default : return state
    }
}