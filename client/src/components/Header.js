/* eslint-disable jsx-a11y/anchor-is-valid */
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import EmailyLogo from '../assets/logo.png';
import { logoutUser } from '../reducers/authReducer';
import classes from './Header.module.css';
import Payments from './Payments';

export default function Header() {
    const dispatch = useDispatch();
    const { id, credits } = useSelector((state) => state.auth);

    function logout(e) {
        e.preventDefault();
        dispatch(logoutUser());
    }

    function renderContent() {
        switch (id) {
            case null:
                return 'Fetching Status...';
            case false:
                return (
                    <li>
                        <a href="/auth/google">Login With Google</a>
                    </li>
                );
            default:
                return (
                    <>
                        <li>
                            <Payments credits={credits} />
                        </li>
                        <li>
                            <a onClick={logout}>Logout</a>
                        </li>
                    </>
                );
        }
    }

    return (
        <nav className="blue darken-4">
            <div className="container nav-wrapper">
                <Link to={id ? '/surveys' : '/'} className={`brand-logo ${classes.logo}`}>
                    <img src={EmailyLogo} alt="Emaily Logo" />
                </Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    {renderContent()}
                </ul>
            </div>
        </nav>
    );
}
