const INITIAL_STATE = {
    // token: (window.localStorage.getItem('spotifyToken'))?(window.localStorage.getItem('spotifyToken')):"",
    // data: "kkkkk"
    token:''
}


export default (state = INITIAL_STATE,action) =>{
    switch(action.type){

        case 'ADD_TOKEN': return { ...state, token: action.token };
        case 'RESET': return INITIAL_STATE
     
        default : return state
    }
}