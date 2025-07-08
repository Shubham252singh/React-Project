import {useState,useEffect} from 'react';
const useInternetStatus = ()=>{
    const [onlineStatus,setonlinestatus]=useState(true);
    window.addEventListener("online",()=>{
      setonlinestatus(true);  
    });
    
    window.addEventListener("offline",()=>{
      setonlinestatus(false);  
    });
    return onlineStatus;
}

export default useInternetStatus;