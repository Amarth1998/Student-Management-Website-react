import img from "./del.jpeg"
import axios from "axios"
import { useNavigate } from "react-router-dom";
const myrecDel=(id)=>
{
   let url=`http://localhost:3000/students/${id}`;
   axios.delete(url)
   .then(()=> {
       alert("record succesfully delted ");  
   });
}



const DelDesign=(props)=>{

    
    return(
        <>
        <tr>
            <td style={{border:"1px solid black"}}>{props.a}</td>
            <td style={{border:"1px solid black"}}>{props.b}</td>
            <td style={{border:"1px solid black"}}>{props.c}</td>
            <td style={{border:"1px solid black"}}>{props.d}</td>
            <td style={{border:"1px solid black"}}>
                <a href="#"  onClick={()=>{ myrecDel(props.e) }}><img src={img} alt=""  width={"40px"}/>
                </a>
                </td>
        </tr>

        </>
    )
}

export default DelDesign 