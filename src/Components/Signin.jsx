import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../Css/Signing.css';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Signin = ({ setLoggedIn, onLogout }) => { 
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const navigate = useNavigate();

    const handleClick = () => {
        if (email === "admin@mail.com" && pass === "admin@123") {
            setLoggedIn(true); 
            navigate('/admin');
        } else {
            try {
                signInWithEmailAndPassword(getAuth(), email, pass)
                    .then(() => {
                        setLoggedIn(true); 
                        alert("Logged in");
                        setEmail("");
                        setPass("");
                        navigate('/home');
                    });
            } catch (error) {
                alert("An error occurred: " + error.message);
            }
        }
    }

    const handleLogout = () => { 
        setLoggedIn(false);
        onLogout();
        navigate("/")
    };

    return (
        <div className="fcontainer">
            <div className="fields">
                <div className="field">
                    <div className='heading'>SIGN-IN</div><br /><hr />
                </div>
                <div className="field">
                    <label htmlFor="email">Email</label><br />
                    <input type="email" className="ii"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="eg:vipin@gmail.com"
                        required
                    />
                </div>
                <div className="field">
                    <label htmlFor="password">Password</label><br />
                    <input type="password" className="ii"
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <div className="btnn">
                    <input type="submit" onClick={handleClick} />
                    <Link to='/signup' className="a">new user.?</Link>
                </div>
            </div>
        </div>
    );
}

export default Signin;
