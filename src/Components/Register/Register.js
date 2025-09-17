import { useNavigate } from "react-router-dom";
import "./Register.css";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify/unstyled";

function Register() {
    const [userdata, setUserData] = useState({ name: "", email: "", password: "" });
    function handlePasswordData(event) {
        let user = { ...userdata };
        user["password"] = event.target.value;
        setUserData(user);
    }
    function handleNameInfo(event) {
        let user = { ...userdata };
        user["name"] = event.target.value;
        setUserData(user);
    }

    function handleEmailData(event) {
        let user = { ...userdata };
        user["email"] = event.target.value;
        setUserData(user);
    }

    function handleRegisterData() {
        console.log(userdata);
        // navigate("/login")
        axios.post('http://localhost:3001/users', userdata)
            .then((singleElement) => {
                console.log('User Registered:', singleElement.data);
                navigate("/login")
                // Reset the form
                setUserData({
                    name: '',
                    email: '',
                    password: ''
                });
            })
            .catch((Error)=>{
                toast.error("Invalid User",Error);

            });


    }

    const navigate = useNavigate();
    const navigateToDashboard = () => {
        navigate("/")
    }
    const navigateToLogin = () => {
        navigate("/login")

    }

    return (
        <div className="registerBackgroundColor">
            <div className="registerHeader">
                <div className="registerBlogsName" onClick={navigateToDashboard}>Blogs</div>
                <div className="registerSubHeader">
                    <div className="registerLoginName" onClick={navigateToLogin}>Login</div>
                    <div className="registerName">Register</div>
                </div>
            </div>
            <div className="registerBlogsBox">
                <div className="registerBlogs">Blogs</div>
                <div className="registerBlogsText">Publish your passions,your way...</div>
                <div className="registerText">Register</div>
                <div className="name">Name</div>
                <div>
                    <input type="text"
                        placeholder="firstname Lastname"
                        value={userdata.name}
                        onChange={handleNameInfo}

                        className="registerInputField" />
                </div>
                <div className="emailId1">Email id</div>
                <div>
                    <input type="text"
                        placeholder="test@gmail.com"
                        value={userdata.email}
                        onChange={handleEmailData}

                        className="registerInputField" />
                </div>
                <div className="password">Password</div>
                <div>
                    <input type="Password"
                        placeholder="test@123"
                        value={userdata.password}
                        onChange={handlePasswordData}
                        className="registerInputField" />
                </div>
                <div><button className="registerButton" onClick={handleRegisterData}>Register</button></div>
            </div>
        </div>
    );
}
export default Register;