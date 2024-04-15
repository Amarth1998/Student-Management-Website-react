import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Insert from "./Insert";
import Display from "./Display";
import Delete from "./Delete";
import Search from "./Search";
import SearchByName from "./SearchByName"
import RecUpdate from "./RecUpdate";
import EditRecord from "./EditRecord";

const App=()=> {

  return (
    <>

      <BrowserRouter>
        <Routes>
          
            <Route path="/" element={<Layout/>} >
            <Route index element={<Home/>} />
            <Route path="/Home" element={<Home/>} />
            
            <Route path="/Insert" element={<Insert/>} />
            <Route path="/Display" element={<Display/>} />
            <Route path="/Delete" element={<Delete/>} />
            <Route path="/Search" element={<Search/>} />
            <Route path="/SearchByName" element={<SearchByName/>} />
            <Route path="/update" element={<RecUpdate/>} />
            <Route path="/editrecord/:id" element={<EditRecord/>} />
          </Route>


        </Routes>

      </BrowserRouter>




     
    </>
  );
}

export default App;
