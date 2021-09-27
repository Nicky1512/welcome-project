import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import './login-styles.css';

const Login = () => {
    return (
        <div className="login-container">
            <h2>login</h2>
            <form>
                <div className="login-fields">
                    <label><FontAwesomeIcon
                        className="login-fields-icon"
                        icon={faUser}>
                    </FontAwesomeIcon>
                    </label>
                    <input type="text"
                        className="login-fields-input"
                        placeholder="Username"
                    />
                </div>
                <div className="login-fields">
                    <label><FontAwesomeIcon
                        className="login-fields-icon"
                        icon={faKey}>
                    </FontAwesomeIcon>
                    </label>
                    <input type="password"
                        className="login-fields-input"
                        placeholder="Password"
                    />
                </div>
                <div className="login-fields">
                    <button className="submit">Login</button>
                </div>
                <div className="txt-login">
                    <p>Forgot Password? <Link className="a" to="/">Click here</Link></p>
                    <p>Not signed-in yet? <Link className="a" to="/">Sign-in now!</Link></p>
                </div>
            </form>
        </div>
    );
}

export default Login;