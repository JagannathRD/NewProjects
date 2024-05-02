import { useEffect, useState } from "react"
import DataCall from "./DataCall"

const Practice=()=>{
    const [darkTheme, setDarkTheme] = useState(false)

    const theme= {
        darkTheme:{
            backgroundColor:'gray',
            color:'white',
            padding:'20px'
        },
        brightTheme:{
            backgroundColor:'white',
            color:'gray',
            padding:'20px'
        }
    }
    return(
        <>
        <h3 >
        Enable Dark Theme : <input type="checkbox" onChange={()=>setDarkTheme(e=>!e)}>
        </input>
        </h3>
        <div style={darkTheme ? theme.darkTheme : theme.brightTheme}> 
        <h1 >UseState Hook in React</h1>
        <h3>Practicing use state hook</h3>
        </div>
        <DataCall counter={darkTheme}></DataCall>
        </>
    )
}
export default Practice