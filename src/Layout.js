import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>

        <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark" > 
            <nav class="navbar bg-dark  navbar-expand-lg  " >
                <div class="container-fluid">
                   
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon" ></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item" style={{marginLeft:"35%"}}>
                                <Link to="Home" class="nav-link active fs-5" aria-current="page" >Home</Link>
                            </li>
                            
                            <li class="nav-item" style={{marginLeft:"10%"}}>
                                <Link to="Insert" class="nav-link fs-5" >Insert</Link>
                            </li>
                            <li class="nav-item" style={{marginLeft:"10%"}}>
                                <Link to="Display" class="nav-link fs-5 " >Display</Link>
                            </li>
                            <li class="nav-item" style={{marginLeft:"10%"}}>
                                <Link to="Search" class="nav-link fs-5 " >Search</Link>
                            </li>
                            <li class="nav-item" style={{marginLeft:"10%"}}>
                                <Link to="SearchByName" class="nav-link fs-5 " >SearchByName</Link>
                            </li>

                            <li class="nav-item" style={{marginLeft:"10%"}}>
                                <Link to="Delete" class="nav-link fs-5 " >DeleteData</Link>
                            </li>
 
                              
                            <li class="nav-item" style={{marginLeft:"10%"}}>
                                <Link to="update" class="nav-link fs-5 " >Update</Link>
                            </li>


                        </ul>
                    </div>
                </div>
            </nav>
            </nav>

 <div>

 <Outlet/>

     </div>

<div id="footer"> <br />
  <marquee behavior="" direction=""> REACT CRUD PROJECT </marquee>
</div>

        </>
    );
}

export default Layout;