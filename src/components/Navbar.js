import React from "react";
// import SignupForm from "./SignupForm";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Future Pivots: Next Phase</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/gallery">Gallery</a>
                <a href="/create">Blogs</a>
                <a href="/signup">Signup</a>
                <a href="/login">Login</a>
                {/* <a href="/signup">Signup{ SignupForm }</a> */}
            </div>
        </nav>
    )
}

export default Navbar;