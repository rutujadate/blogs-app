import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
        const navigate= useNavigate();
        const navigateToDashboard=()=>{
            navigate("/")
        }
        const navigateToRegister=()=>{
            navigate("/register")

        }
        const navigateToBlogs=()=>{
            navigate("/blogs")
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
                        placeholder="test@gmail.com" className="inputField" />
                </div>
                <div className="password">Password</div>
                <div>
                    <input type="Password"
                        placeholder="test@123" className="inputField" />
                </div>
                <div><button className="loginButton" onClick={navigateToBlogs}>Login</button></div>
            </div>
        </div>
    );
}
export default Login;