
import React, { useContext,useReducer,useState } from 'react'
// import{InfoContext} from './about'

export const App =() =>{
  // const [value, setValue]=useContext(InfoContext);
  const [counter,setCounter]=useState(0);
  const [state, dispatch]=useReducer((state,action)=>{
switch (action.type){
  case 'add':
    return state+1;
    case 'minus':
      return state -1;
      default :
      return state;
}
  },0);
  
  return(
    <div>
      <h1>{state}</h1>
      <button onClick={() =>dispatch({type:'minus'})}>-</button>
      <button onClick={() =>dispatch({type:'add'})}>+</button>
      <button onClick={() =>dispatch({type:'add'})}>+</button>
      <button onClick={() =>dispatch({type:'add'})}>+</button>
      <button onClick={() =>dispatch({type:'add'})}>+</button>
      <button onClick={() =>dispatch({type:'add'})}>+</button>
    </div>
  )
};

export default App;