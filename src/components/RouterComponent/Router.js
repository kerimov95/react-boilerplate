import React, { useEffect } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

export const RouterComponent = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Users" element={<Users />} />
                </Routes>
            </div>
        </Router>
    );
}

function Home() {

    useEffect(() => {
        try {
            (new Promise((res, rej) => {
                setTimeout(() => {
                    rej('Error home')
                }, 1000);
            })).then().catch(() => {

            })
        }
        catch {

        }

    }, [])

    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}