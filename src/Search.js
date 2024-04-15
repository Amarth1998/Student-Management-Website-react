import {useState} from "react";
import axios from "axios";
import DisplayDesign from "./DisplayDesign";
const Search=()=>
{
const [rno, setRno]=useState("");
const [data, setData]=useState([]);
const handleSubmit=()=>
{
   let url=`http://localhost:3000/students?rno=${rno}`;
   axios.get(url).then((res)=>{
   setData(res.data);
   });
 }
 const myStuData=data.map((key)=>  <DisplayDesign 
    a={key.rno}
    b={key.nm}
    c={key.add}
    d={key.fee}
 />);
return(
<>
<div id="searchbyrollnumberdiv">  <br /> <br />
 <div style={{width:"50%" ,margin:"auto"}}> 
    <h2 style={{textAlign:"center"}}> Search By Roll-Number</h2>
    <center>
 <input type="text" value={rno} placeholder="Enter Your Roll Number..." onChange={(e)=>{setRno(e.target.value)}}  style={{border:"1px solid black" ,width:"40%" }} />  <br />
 <button onClick={handleSubmit} style={{width:"40%" ,borderRadius:"5px" ,height:"40px", backgroundColor:'black',color:"white" }}>Search</button>
 </center></div>
  <br />

 <table  className="table" cellSpacing={5} cellPadding={5} style={{border:"1px solid black" ,width:"50%" ,margin:"auto"}}>
  <tr style={{border:"1px solid black"}}>
     <th style={{border:"1px solid black"}}>Rollno</th>
     <th style={{border:"1px solid black"}}>Name</th>
     <th style={{border:"1px solid black"}}>Address</th>
     <th style={{border:"1px solid black"}}>Fees</th>
  </tr>
  {myStuData}
</table>
</div>
</>
  );
}
export default Search;