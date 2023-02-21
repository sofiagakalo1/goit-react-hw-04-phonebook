import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initialValue) => {
  const [state, setState] = useState(()=>{
    try{
      const result = JSON.parse(window.localStorage.getItem(key));
      return result ? result : initialValue;
    }
    catch(error){
      return initialValue;
    }
})
useEffect(() => {
   window.localStorage.setItem(key, JSON.stringify(state))
  },[state, key]);
  return [state, setState];
}
