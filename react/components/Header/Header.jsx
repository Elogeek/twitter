import { Link } from "react-router-dom";
//import styled from "styled-components";
import "./Header.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faHome, faBell, faEnvelope,faHeart, faNewspaper, faComment, faCircleUser, faArrowRightFromBracket,faGear} from "@fortawesome/free-solid-svg-icons";
;

export const Header = function () {
    return (
        <div class="HeaderContainer">
            <nav>
                <div><Link to="contact">Bienvenue sur twiter ! <FontAwesomeIcon icon={faTwitter} /></Link></div>

                <Link to="/"><FontAwesomeIcon icon={faHome} />Home</Link>
                <Link to="contact"><FontAwesomeIcon icon={faBell} />Notifications</Link>
                <Link to="contact"><FontAwesomeIcon icon={faEnvelope} />Messages</Link>
                <Link to="contact"><FontAwesomeIcon icon={faHeart} />Favoris</Link>
                <Link to="contact"><FontAwesomeIcon icon={faNewspaper} />Dernier tweets</Link>
                <Link to="contact"><FontAwesomeIcon icon={faComment} />Tweeter un post</Link>
                <Link to="contact"><FontAwesomeIcon icon={faGear} />Paramètres</Link>
                <Link to="user-account"><FontAwesomeIcon icon={faCircleUser} />Mon compte</Link>
                <Link to="contact"><FontAwesomeIcon icon={faArrowRightFromBracket} />Déconnextion</Link>
            </nav>
        </div>
    );
};

