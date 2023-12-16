
// function Hero(props){
//      return <div className='w-[400px] border-2 rounded-xl p-4 border-blue-500 m-10'>
//           <img className=" min-w-full   h-[400px]"   src={props.image}  />
//    <h1 className='font-bold '>{props.title}</h1>
// <p>{props.desc}</p>
// <button>Download CV</button>
//    </div>
     
//    }
//    export default Hero






import { useState } from "react";


// function Hero (){
//      const [color,setcolor]=useState("")
//      const Updatecolor =()=>{
//           setcolor("red")
//      }
//      const resetcolor = ()=>{
//           setcolor("black")
//      }
//      return <div className="w-[400px] rounded-xl p-4 m-10" >
//      <h1 style={{color:color}} className="text-5xl font-bold">This is text hero</h1>
//      <button onClick={Updatecolor} className="border-2 border-blue-600 text-3xl bg-red-300">Save </button>
//      <button onClick={resetcolor} className="border-2 border-blue-500 text-3xl border-none bg-red-700 ml-5">Reset</button>
//      </div>
// }
function Hero(){
     const [bgcolor,setbgcolor] =useState("")
     const [textcolor,setTextcolor] = useState("")
     
     const onbtn=()=>{
          setbgcolor("yellow")
          setTextcolor(true)
     }
     const offbtn=()=>{
          setbgcolor("transparent")
          setTextcolor(false)
     }
return <div className="rounded-xl p-4 m-10 " >
     <div style={{backgroundColor:bgcolor}} className="sm:w-[400px] sm:h-[400PX] sm:ml-[500px]  w-[300px] h-[300PX] border-2 border-red-500 rounded-full ">

     </div>
<div className="text-center mt-5">
     <button style={{color:textcolor == true ? "red" :""}} onClick={onbtn} className=" border-2 border-red-700 px-10 py-3 sm:text-5xl">ON</button>
     <button style={{color:textcolor == false ? "red" :""}} onClick={offbtn} className=" border-2 border-red-700 px-10 py-3 sm:text-5xl ml-3">OFF</button>
</div>
</div>

}
export default Hero