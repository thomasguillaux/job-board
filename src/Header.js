import Title from './Title';
import logo from './img/logo.png';

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
            <img src={logo} alt="logo"/>
            <Title />
            </div>
            <ul>
                <li>Openings</li>
                <li>Applications</li>
                <li>Portfolio</li>
            </ul>

            <input type="text" name="search" id="search" placeholder="Search for a job"/>

        </div>
    )
}

export default Header;