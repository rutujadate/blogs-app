import { useNavigate } from "react-router-dom";
import "./Dashboard.css"
function Dashboard() {
    const navigate= useNavigate();
    const navigateToLogin=()=>{
        navigate("/login")
    }
    const navigateToRegister=()=>{
        navigate("/register")
    }
    return (
        <div className="backgroundColor">
            <div className="header">
                <div className="blogsName">Blogs</div>
                <div className="subHeader">
                    <div className="loginName" onClick={navigateToLogin}>Login</div>
                    <div className="registerName" onClick={navigateToRegister}>Register</div>
                </div>
            </div>
            <div className="blogsBox1">
                <div className="blogs">Blogs!</div>
                <div className="blogsText">Publish your passions,your way...</div>
                <div className="footerButtons">
                    <button className="button" onClick={navigateToLogin}>Login</button>
                    <button className="button" onClick={navigateToRegister}>Register</button>
                </div>
            </div>
        </div>
    );
}
export default Dashboard;