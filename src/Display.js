import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DisplayDesign from './DisplayDesign'


const Display=()=>{
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

    const mystuData=data.map((key)=> <DisplayDesign
    a={key.rno}
    b={key.nm}
    c={key.add}
    d={key.fee}
    /> )
    return(
        <>  
        <div className="container p-5"  id='displaydiv'>
         <h2 className='mb-1' style={{textAlign:"center" ,paddingBottom:"20px" ,marginTop:"-30px"}}>Students Data</h2>
        <table  className="table" cellSpacing={4} cellPadding={4} style={{border:"1px solid black"}}>
            <tr style={{border:"1px solid black"}}>
                <th scope="col" style={{border:"1px solid black"}}>ROLL NUMBER</th>
                <th scope="col" style={{border:"1px solid black"}}>Name</th>
                <th scope="col" style={{border:"1px solid black"}}>Address</th>
                <th scope="col" style={{border:"1px solid black"}}>Fees</th>
            </tr>
            {mystuData}
            </table>   
            <div id='container'></div>
            </div>      
        </>
    )
}

export default Display





















// import React, { useEffect, useState } from 'react'
// const Display = () => {
//     const [Users, fetchUsers] = useState([])
//     useEffect(() => {
//         fetch('http://localhost:4000/students')
//             .then((res) => res.json())
//             .then((res) => {
//                 fetchUsers(res)
//                 console.log(res);
//             })
//     }, []);
//     return (
//         <div className="container p-5">
//             <h1 className='mb-5' >Students Data</h1>

//             <table className="table" cellSpacing={10} cellPadding={10} >
//                 <thead>
//                     <tr>
//                         <th scope="col">Roll no</th>
//                         <th scope="col">Name</th>
//                         <th scope="col">Address</th>
//                         <th scope="col">Fees</th>
//                     </tr>
//                 </thead>
//                 <tbody>
                    
//                     {Users.map((item, i) => {
//                         return <tr>
//                             <td>{item.rno}</td>
//                             <td>{item.nm}</td>
//                             <td>{item.add}</td>
//                             <td>{item.fee}</td>
//                         </tr>
//                     })}
//                     <tr>

//                     </tr>
//                 </tbody>
//             </table>
//         </div>
//     )
// }


// export default Display;