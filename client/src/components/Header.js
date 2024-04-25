/* eslint-disable jsx-a11y/anchor-is-valid */
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../reducers/authReducer';
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
                return 'Still deciding';
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
                            <Payments />
                        </li>
                        <li style={{ margin: '0 1rem' }}>Credits: {credits}</li>
                        <li>
                            <a onClick={logout}>Logout</a>
                        </li>
                    </>
                );
        }
    }

    return (
        <nav>
            <div className="container nav-wrapper">
                <Link to={id ? '/surveys' : '/'} className="brand-logo">
                    Emaily
                </Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    {renderContent()}
                </ul>
            </div>
        </nav>
    );
}
