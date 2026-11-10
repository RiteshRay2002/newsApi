

const Navbar = ({setcategory}) => {
    return (
        <nav className="navbar sm:navbar-expand bg-1 fg-2" data-bs-theme="dark">
            <div className="container-fluid ">
                <a className="navbar-brand badge bg-danger" href="#">
                    Navbar
                </a>
                <button
                    className="btn-icon navbar-toggler"
                    type="button"
                    data-bs-toggle="drawer"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" aria-hidden="true" />
                </button>
                <dialog
                    className="drawer drawer-end"
                    tabIndex={-1}
                    id="navbarNav"
                    aria-labelledby="navbarNavLabel"
                >
                    <div className="drawer-header">
                        <h5 className="drawer-title" id="navbarNavLabel">
                            Menu
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="drawer"
                            aria-label="Close"
                        />
                    </div>
                    <div className="drawer-body">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <div className="nav-link " style={{cursor: "pointer"}} onClick={()=>setcategory("business")}>
                                    business
                                </div>
                            </li>
                            <li className="nav-item" style={{cursor: "pointer"}} onClick={()=>setcategory("entertainment")}>
                                <div className="nav-link" >
                                    entertainment
                                </div>
                            </li>
                            <li className="nav-item" style={{cursor: "pointer"}} onClick={()=>setcategory("general")}>
                                <div className="nav-link" >
                                    general
                                </div>
                            </li>
                            <li className="nav-item" style={{cursor: "pointer"}} onClick={()=>setcategory("health")}>
                                <div className="nav-link" >
                                    health
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link" style={{cursor: "pointer"}} onClick={()=>setcategory("science")} >
                                    science
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link" style={{cursor: "pointer"}} onClick={()=>setcategory("sports")} >
                                    sports
                                </div>
                            </li>
                            <li className="nav-item" style={{cursor: "pointer"}} onClick={()=>setcategory("technology")}>
                                <div className="nav-link" >
                                   technology
                                </div>
                            </li>
                        </ul>
                    </div>
                </dialog>
            </div>
        </nav>

    )
}

export default Navbar
