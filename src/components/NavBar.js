import React from 'react';

export const NavBar = props => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand">Google Books<i className="fas fa-book"></i></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className={`nav-item ${props.active === "search" ? "active": ""}`}>
                        <a className="nav-link" href="/search">
                            Search 
                            {props.active === "search" ? <span className="sr-only">(current)</span> :<></>}
                        </a>
                    </li>
                    <li className={`nav-item ${props.active === "saved" ? "active": ""}`}>
                        <a className="nav-link" href="/saved">
                            Saved
                            {props.active === "saved" ? <span className="sr-only">(current)</span> :<></>}
                        </a>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

        // <nav className="navbar navbar-light-lg bg-light">
        //     <span className="navbar-brand navbar-title">Google Books React Search<i className="fas fa-book"></i></span>
        //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{color: "#FFF"}}>
        //         <span className="navbar-toggler-icon"></span>
        //     </button>

        //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //         <ul className="navbar-nav mr-auto">
        //             <li className={`nav-item ${props.active === "search" ? "active": ""}`}>
        //                 <a className="nav-link" href="/search">
        //                     Search
        //                     {props.active === "search" ? <span className="sr-only">(current)</span> :<></>}
        //                 </a>
        //             </li>
        //             <li className={`nav-item ${props.active === "saved" ? "active": ""}`}>
        //                 <a className="nav-link" href="/saved">
        //                     Saved
        //                     {props.active === "saved" ? <span className="sr-only">(current)</span> :<></>}
        //                 </a>
        //             </li>
        //         </ul>
        //     </div>
        // </nav>