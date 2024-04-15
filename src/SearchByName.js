import { useState } from "react";
import axios from "axios";
import DisplayDesign from "./DisplayDesign";
const SearchByName = () => {
   const [snm, setsnm] = useState("");
   const [data, setData] = useState([]);
   const handleInput = (e) => {
      setsnm(e.target.value);
      console.log(snm);
      let url = `http://localhost:3000/students`;

      axios.get(url).then((res) => {
         setData(res.data);
      });


   }

   const myAns = data.map((key) => {
      var myname = key.nm;
      var myStatus = myname.includes(snm)
      if (myStatus === true) {
         return (
            <>
               <DisplayDesign
                  a={key.rno}
                  b={key.nm}
                  c={key.add}
                  d={key.fee}
               />
            </>
         )
      }
   });
   return (
      <>
      <div id="sbn"> <br /> <br />
      <div style={{width:"50%" ,margin:"auto"}}> 
         <h2  style={{textAlign:"center"}}> Search by Student name</h2>
         <center> <input placeholder="Enter Student Name ..." type="text" value={snm} onChange={handleInput} style={{border:"1px solid black" ,width:"40%" }} />
         </center> </div> <br />
         <table id="customers"  className="table" cellSpacing={5} cellPadding={5} style={{border:"1px solid black" ,width:"50%" ,margin:"auto"}}>
         <tr style={{border:"1px solid black"}}>
     <th style={{border:"1px solid black"}}>Rollno</th>
     <th style={{border:"1px solid black"}}>Name</th>
     <th style={{border:"1px solid black"}}>Address</th>
     <th style={{border:"1px solid black"}}>Fees</th>
  </tr>
            {myAns}
         </table>

         </div>
      </>
   );
}

export default SearchByName;