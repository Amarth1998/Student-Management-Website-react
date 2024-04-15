import { useEffect ,useState } from "react";
import axios from "axios";
import DelDesign from "./DelDesign";

const Delete=()=>{
    const [data,setData]=useState([]);
    const dataLoad=()=>{
        let url="http://localhost:3000/students";
        axios.get(url).then((res)=>{
            setData(res.data);
        })
    }

    useEffect(()=>{
        dataLoad();
    },[]);

    const mystuData=data.map((key)=> <DelDesign
    a={key.rno}
    b={key.nm}
    c={key.add}
    d={key.fee}
    e={key.id}
    /> )
    return(
        <>  <div className="container p-5"  id="deldata">
         <h2 className='mb-5' style={{textAlign:"center" ,marginTop:"-15px"} }>DELETE DATA</h2>
        <table  className="table" cellSpacing={5} cellPadding={5} style={{border:"1px solid black"}}>
            <tr style={{border:"1px solid black"}}>
                <th scope="col" style={{border:"1px solid black"}}>ROLL NUMBER</th>
                <th scope="col" style={{border:"1px solid black"}}>Name</th>
                <th scope="col" style={{border:"1px solid black"}}>Address</th>
                <th scope="col" style={{border:"1px solid black"}}>Fees</th>
                <th scope="col" style={{border:"1px solid black"}}>Delete</th>
            </tr>
            {mystuData}
            </table>   
            </div>      
        </>
    )
}

export default Delete;