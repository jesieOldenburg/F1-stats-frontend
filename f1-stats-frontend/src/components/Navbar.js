import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/dash">Dash</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Navbar