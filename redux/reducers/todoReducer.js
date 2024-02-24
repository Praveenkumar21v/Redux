let initialState={
    todos:[],
    error:"",
}

export const todoReducer=(state=initialState,action)=>{
if(action.type==="FETCH_TODO_SUCCESS"){
return{
todos:action.payload,
error:"",
}
}else if(action.type==="FETCH_TODO_FAILURE"){
return{
    error:action.payload,
    todos:"",
}
}
return state;
}