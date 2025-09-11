import { useNavigate } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';

function Login() {
    // const [email, setMessage] = useState('');
    const [userdata, setUserData] = useState({ email: "", password: "" });
    function handlePasswordData(event) {
        let user = { ...userdata };
        user["password"] = event.target.value;
        setUserData(user);
    }


    function handleEmailData(event) {
        let user = { ...userdata };
        user["email"] = event.target.value;
        setUserData(user);
    }

    function handleLoginData() {
        console.log(userdata);
        // navigate("/blogs")
        axios.get('http://localhost:3001/users')
            .then((response) => {
                console.log('Response', response);
                
                    response.data.map((user) => {
                        console.log('user', user)
                        if (userdata.email === user.email && userdata.password === user.password) {
                            console.log('Welcome to Blogs Application');
                             toast.success('Login successful!');
                            navigate("/blogs")
                        }
                        else {
                            console.log('Invalid User');
                            toast.error("Invalid User");

                        }

                    })
            
            });
            // .catch((error) => {
            //     console.log('Error fetching users:', error);
            // });

    }


    const navigate = useNavigate();
    const navigateToDashboard = () => {
        navigate("/")
    }
    const navigateToRegister = () => {
        navigate("/register")
    }

    return (
        <div className="backgroundColor">
            <div className="header">
                <div className="blogsName" onClick={navigateToDashboard}>Blogs</div>
                <div className="subHeader">
                    <div className="loginName">Login</div>
                    <div className="registerName" onClick={navigateToRegister}>Register</div>
                </div>
            </div>
            <div className="blogsBox">
                <div className="blogs">Blogs</div>
                <div className="blogsText">Publish your passions,your way...</div>
                <div className="loginText">Login</div>
                <div className="emailId">Email id</div>
                <div>
                    <input type="text"
                        placeholder="test@gmail.com"
                        value={userdata.email}
                        onChange={handleEmailData}
                        className="inputField"
                    />
                </div>
                <div className="password">Password</div>
                <div>
                    <input type="Password"
                        placeholder="test@123"
                        value={userdata.password}
                        onChange={handlePasswordData}
                        className="inputField"
                    />
                </div>
                <div><button className="loginButton" onClick={handleLoginData}>Login</button></div>


            </div>
        </div>
    );
}
export default Login;

