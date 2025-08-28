import "./Login.css";

function Login() {
    return (
        <div className="backgroundColor">
            <div className="header">
                <div className="blogsName">Blogs</div>
                <div className="subHeader">
                    <div className="loginName">Login</div>
                    <div className="registerName">Register</div>
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
                <div><button className="loginButton">Login</button></div>
            </div>
            <div className="footer">Copyright©2022</div>
        </div>
    );
}
export default Login;