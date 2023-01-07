
import React,{createContext,useContext,useState} from "react";
const StateC = createContext();

const initialState ={
    chat:false,
    cart:false,
    userProfile:false,
    notification:false,
}

export const ContextP =  ({children})=>{
    const [activeMenu , setActiveMenu ] =useState(true);
    const [isClicked, setIsClicked] = useState(initialState)
    const [screenSize, setscreenSize] = useState(undefined)
    const handelClicked = (clicked)=>{
        setIsClicked({...initialState ,[clicked]:true})
    }

    return(
        <StateC.Provider 
        value={{activeMenu,setActiveMenu,
                isClicked,setIsClicked,
                screenSize, setscreenSize,
                handelClicked,}}>
            {children}
        </StateC.Provider>
    )
}

export const useStateContext =()=>useContext(StateC)