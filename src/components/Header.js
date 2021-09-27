import { Link } from 'react-router-dom';
import Clouds from '../clouds.jpg';

const Header = () => {
    return (
        <div className="container">
            <div className="header">
                {/* <img src={Clouds} alt="couds in the sky" /> */}
                <h1 className="title">welcome!</h1>
            </div>
            <div className="navbar">
                <Link to='/'>Home</Link>
                <Link to='/aboutus'>About</Link>
                <Link to='/comments'>Comments</Link>
                <Link to='/login'>Login</Link>
            </div>
        </div>
    );
}

export default Header;