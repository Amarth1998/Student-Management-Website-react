import { useState } from "react";
import axios from 'axios';



const Insert = () => {

  const [input, setInput] = useState({})

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setInput(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = () => {
    let url = "http://localhost:3000/students";
    axios.post(url, input).then(() => {
     
      document.getElementById('rno').value = '';
      document.getElementById('nm').value = '';
      document.getElementById('add').value = '';
      document.getElementById('fee').value = '';
    
      document.getElementById("mySave").innerHTML="Data Succesfully Save!!!";
    });
  }

  return (
    <>

      <h2   style={{textAlign:"center" ,marginTop:"10px"}}> Insert Data</h2>

      <div id="myform">
        
        <div id="di">
          <form action="#">
            <label for="rno">Roll no.</label>
            <input type="text" id="rno" name="rno" placeholder="Your Roll no.." value={input.rno} onChange={handleInput} /> <br />

            <label for="nm">Student Name</label>
            <input type="text" id="nm" name="nm" placeholder="Your Name.." value={input.nm} onChange={handleInput} /> <br />
          
            <label for="country">Address</label>
            <input type="text" id="add" name="add" placeholder="Your Address.." value={input.add} onChange={handleInput} /><br />

            <label for="fee">Fees</label>
            <input type="text" id="fee" name="fee" placeholder="Your Fees.." value={input.fee} onChange={handleInput} /> <br />

            <input type="submit" value="Submit" onClick={handleSubmit} />
            <div id="container" ><h2 id="mySave" style={{color:"green"}}></h2></div>

            
          </form>
          
        </div>
      </div>
      
    </>
  );
}

export default Insert;