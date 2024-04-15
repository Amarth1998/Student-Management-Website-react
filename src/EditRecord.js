import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const EditRecord=()=>
{
   const [data, setData]=useState({});
   let { id } = useParams();
     const loadData=()=>
    {
        let url=`http://localhost:3000/students/${id}`;
         axios.get(url).then((res)=>{
          setData(res.data);
        });
    }
    
  useEffect(()=>{
        loadData();
    }, []);

   const handleInput=(e)=>
    {
      let name=e.target.name;
      let value=e.target.value;
      setData(values=>({...values, [name]:value}));
   }
   const editSave=()=>
   {
    let url=`http://localhost:3000/students/${id}`;
    axios.put(url, data)
    .then(response => {
         alert("Data succesfully updated!!!");
    })
   }
  return(
 <>

<h2   style={{textAlign:"center" ,marginTop:"10px"}}> UPDATE DATA</h2>

<div id="myform">
  
  <div id="di">
    <form action="#">
      <label for="rno">Roll no.</label>
      <input type="text" id="rno" name="rno" placeholder="Your Roll no.." value={data.rno} onChange={handleInput} /> <br />

      <label for="nm">Student Name</label>
      <input type="text" id="nm" name="nm" placeholder="Your Name.." value={data.nm} onChange={handleInput} /> <br />
    
      <label for="country">Address</label>
      <input type="text" id="add" name="add" placeholder="Your Address.." value={data.add} onChange={handleInput} /><br />

      <label for="fee">Fees</label>
      <input type="text" id="fee" name="fee" placeholder="Your Fees.." value={data.fee} onChange={handleInput} /> <br />

      <button onClick={editSave}> Data Update!</button>
      <div id="container" ><h2 id="mySave" style={{color:"green"}}></h2></div>

      
    </form>
    
  </div>
</div>




{/* 
 <h1> Edit Student Record</h1>
 Enter Rollno : <input type="text" id="rno" name="rno" value={data.rno}
 onChange={handleInput} />
 <br/>
 Enter name : <input type="text" name="name" value={data.name} 
  onChange={handleInput} />
 <br/>
 Enter Address : <input type="text" name="address" value={data.address} 
  onChange={handleInput} />
 <br/>
 Enter Fees : <input type="text" name="fees" value={data.fees} 
  onChange={handleInput} />
  <br />

  <button onClick={editSave}> Data Update!</button> */}
 </>

 
    );
}
export default EditRecord;