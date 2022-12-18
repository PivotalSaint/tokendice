import LoginForm from "./LoginForm";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Future Pivots: Next Phase</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">Gallery</a>
                <a href="/login">{ LoginForm }</a>
            </div>
        </nav>
    )
}

export default Navbar;