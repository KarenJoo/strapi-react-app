import  { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>SHOEDAYS</h1>
            <div className="links">
                <Link to="/">mens</Link>
                <Link to="/create">womens</Link>
            </div>
        </nav>


    );

}

export default Navbar; 