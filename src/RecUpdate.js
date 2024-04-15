import { Link } from "react-router-dom";
import {useState, useEffect } from "react";
import axios from "axios";
// import editImg from "./del.jpeg";
import editImg from "./images/edit.jfif"; 
const RecUpdate=()=>
{
const [data, setData]=useState([]);
const loadData=()=>
{
 let url="http://localhost:3000/students";
 axios.get(url).then((res)=>{
    setData(res.data)
 })
}

useEffect(()=>{
  loadData();
});

const myData=data.map((key)=>{
       return(
        <>
        
          <tr>
            <td style={{border:"1px solid black" ,padding:"10px"}}> {key.rno} </td>
            <td style={{border:"1px solid black" ,padding:"10px"}}> {key.nm} </td>
            <td style={{border:"1px solid black" ,padding:"10px"}}> {key.add} </td>
            <td style={{border:"1px solid black" ,padding:"10px"}}> {key.fee} </td>
            <td style={{border:"1px solid black" ,padding:"10px"}}> 

              <Link to={`/editrecord/${key.id}`}>
              <img src={editImg} width="30px" height="30px" alt="" />  
              </Link> 
     
              </td>
           
          </tr>
       </>
       )
  });
return(
  <>
 <div className="container p-5"  id="updd">
         <h2 className='mb-5' style={{textAlign:"center"}}>Update Student Record</h2>
        <table  className="table" cellSpacing={5} cellPadding={5} style={{border:"1px solid black"}}>
            <tr style={{border:"1px solid black" ,padding:"10px"}}>
                <th scope="col" style={{border:"1px solid black"}}>ROLL NUMBER</th>
                <th scope="col" style={{border:"1px solid black"}}>Name</th>
                <th scope="col" style={{border:"1px solid black"}}>Address</th>
                <th scope="col" style={{border:"1px solid black"}}>Fees</th>
            </tr>
            {myData}
            </table>   
            </div>      







  </>
)
}
export default RecUpdate;