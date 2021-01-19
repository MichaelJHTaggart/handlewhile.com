import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsList } from "react-icons/bs";
import { IconContext } from "react-icons";
import { connect } from 'react-redux'
import '../scss/Header.scss';

const Header = props => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <IconContext.Provider
            value={{ className: "myReact-icons" }}
        >
            <div>
                <header className="header">
                    <Link to='/'>
                        <svg id="logo-img" width="72" height="68" viewBox="0 0 72 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="36" cy="34" rx="36" ry="34" fill="#274C77" />
                            <path d="M55.9976 10.9304C55.9591 10.3795 55.4813 9.96398 54.9304 10.0024L45.9522 10.6288C45.4013 10.6672 44.9858 11.145 45.0243 11.696C45.0627 12.2469 45.5405 12.6624 46.0914 12.624L54.072 12.0672L54.6288 20.0478C54.6672 20.5987 55.145 21.0142 55.696 20.9757C56.2469 20.9373 56.6624 20.4595 56.624 19.9086L55.9976 10.9304ZM35.7546 34.6562L55.7546 11.6562L54.2454 10.3438L34.2454 33.3438L35.7546 34.6562Z" fill="#E7ECEF" />
                            <path d="M60.0637 55.998C60.6149 55.9628 61.0331 55.4875 60.998 54.9363L60.4247 45.9546C60.3895 45.4034 59.9142 44.9851 59.363 45.0203C58.8118 45.0555 58.3935 45.5308 58.4287 46.082L58.9383 54.0657L50.9546 54.5753C50.4034 54.6105 49.9851 55.0858 50.0203 55.637C50.0555 56.1882 50.5308 56.6065 51.082 56.5713L60.0637 55.998ZM34.3394 33.7507L59.3394 55.7507L60.6606 54.2493L35.6606 32.2493L34.3394 33.7507Z" fill="#E7ECEF" />
                        </svg>
                    </Link>

                    <h1 id="company-name">Handle While</h1>

                    <BsList onClick={toggleMenu} className="Hamburger" />

                    {props.isLoggedIn ? (
                        <nav className={`logged-out-mob ${isMenuOpen ? null : 'logged-out-mob-hide'}`}>
                            <div className="Welcome">Welcome, {props.username}</div>
                            <Link to="/projects" className="navigate" onClick={toggleMenu}>Projects</Link>
                            <div id="line"></div>
                            <Link to="/pricing" className="navigate" onClick={toggleMenu}>Pricing</Link>
                        </nav>
                    ) : (
                            <nav className={`logged-out-mob ${isMenuOpen ? null : 'logged-out-mob-hide'}`}>
                                <Link to='/sign-in' className="navigate" onClick={toggleMenu}>Sign In</Link>
                                <div id="line"></div>
                                <Link to='/create-account' className="navigate" onClick={toggleMenu}>Create Account</Link>
                            </nav>
                        )}
                    {props.isLoggedIn ? (
                        <nav className='logged-out'>
                            <div className="Welcome">Welcome, {props.username}</div>
                            <Link to="/projects" className="navigate">Projects</Link>
                            <Link to="/pricing" className="navigate">Pricing</Link>
                        </nav>
                    ) : (
                            <nav className='logged-out'>
                                <Link to='/sign-in' className="navigate">Sign In</Link>
                                <Link to='/create-account' className="navigate">Create Account</Link>
                            </nav>
                        )}
                </header>
            </div>
        </IconContext.Provider >
    )
}

function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(mapStateToProps)(Header)
