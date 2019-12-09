const INITIAL_STATE = {
    text:'',
    data:''
}


export default (state = INITIAL_STATE,action) =>{
    switch(action.type){

        case 'TYPE': return { ...state, text: action.text };
        case 'SEARCH': return { ...state, data: action.data };
        case 'RESET': return INITIAL_STATE
     
        default : return state
    }
}