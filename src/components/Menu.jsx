import { Link } from 'react-router-dom';

function Menu() 
{
    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/first">1</Link>
                <Link to="/second">2</Link>
                <Link to="/third">3</Link>
                <Link to="/fourth">4</Link>
                <Link to="/fifth">5</Link>
                <Link to="/sixth">6</Link>
                <Link to="/seventh">7</Link>
            </nav>
        </>
    )
}

export default Menu;