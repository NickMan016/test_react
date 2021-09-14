import { Link } from 'react-router-dom';
import '../../assets/css/header.css';
import logo from '../../assets/images/NickMansTrap.png';

export default function Header() {
    return (
        <header className="header font-roboto">
            <nav className="nav content">
                <Link to="/"><img className="logo" src={logo} alt="Logo" /></Link>
                <Link to="/p" className="link">Get Started</Link>
                <Link to="/p" className="link">Docs</Link>
            </nav>
        </header>
    )
}