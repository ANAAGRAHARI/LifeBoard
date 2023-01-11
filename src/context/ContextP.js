
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
    const [currentColor, setcurrentColor] = useState('#03C9D7')
    const [currentMode,setcurrentMode]=useState('light')
    const[themeSettings,setThemeSettings]=useState(false);
    const setMode=(e)=>{
        setcurrentMode(e.target.value);
        localStorage.setItem('themeMode',e.target.value)
        }
         
    const setColor=(color)=>{
        setcurrentColor(color);
     
        setThemeSettings(false)
        localStorage.setItem('colorMode',color)
        }
    const handelClicked = (clicked)=>{
        setIsClicked({...initialState ,[clicked]:true})
    }

    return(
        <StateC.Provider 
        value={{activeMenu,setActiveMenu,
                isClicked,setIsClicked,
                screenSize, setscreenSize,
                handelClicked,
                currentColor,setMode,
                currentMode,setColor,
                themeSettings,setThemeSettings}}>
            {children}
        </StateC.Provider>
    )
}

export const useStateContext =()=>useContext(StateC)