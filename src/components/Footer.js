import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return ( 
        <div className="footer">
            <ul>
                <li><FontAwesomeIcon className="icon" icon={ faFacebook }></FontAwesomeIcon></li>
                <li><FontAwesomeIcon className="icon" icon={ faInstagram }></FontAwesomeIcon></li>
                <li><FontAwesomeIcon className="icon" icon={ faTwitter }></FontAwesomeIcon></li>
            </ul>
            <p>Copyright&copy; | All Rights Reserved</p>
        </div>
     );
}
 
export default Footer;