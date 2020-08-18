import React from 'react';
import { Link } from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SearchIcon from '@material-ui/icons/Search';

export const NavBar = () => {
    return (
        <div className="navbar">
            <BottomNavigation
                showLabels
                style={{background: "#444", color: "#FFF", width: "600px" }}
                >
                <h2 
                    style={{display: "inline-flex", flexDirection: "column", justifyContent: "center", padding: "0 25px"}}
                >
                    Google Books Reading List
                </h2>
                <BottomNavigationAction 
                    style={{ color: "#FFF"}} 
                    label="Search" 
                    component={ Link }
                    to="/search"
                    icon={<SearchIcon 
                            className="nav-icon"
                        />
                    } 
                />
                <BottomNavigationAction 
                    style={{ color: "#FFF"}} 
                    label="Saved" 
                    component={ Link }
                    to="/saved"
                    icon={<FavoriteIcon 
                        className="nav-icon"
                    />}
                />
            </BottomNavigation>

        </div>
    )
}
