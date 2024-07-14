import { useEffect, useState } from "react"
import { flushSync } from "react-dom"

const App =  () =>{
  console.log("-=---->")
  const [comst1,setComst1] = useState(1)
  const [comst2,setComst2] = useState(1)
  useEffect(()=>{
    console.log(comst1,comst2);
  },[comst1,comst2])
  return(
    <>
      <button onClick={()=>{
        flushSync(()=>{
          setComst1((item)=>item + 1)
        })  
        flushSync(()=>{
          setComst2((item)=>item + 1)
        })
      }}>点击</button>
      {comst2}{comst1}
    </>
  )
}
export default  App