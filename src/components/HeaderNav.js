import { Link } from 'react-router-dom' 
import './styles/header-nav.css';

const HeaderNav = () => {
    return (
        <div id="header-nav" className="container">
            <ul>
                <li>
                    <Link to="/">Overview</Link>
                </li>   
                <li>
                    <Link to="/income">Income</Link>
                </li>   
                <li>
                    <Link to="/budget">Budget</Link>
                </li>   
            </ul> 
        </div>
    )
}

export default HeaderNav
