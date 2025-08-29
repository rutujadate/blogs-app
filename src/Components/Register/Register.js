import "./Register.css";

function Register() {
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
                <div className="loginText">Register</div>
                <div className="name">Name</div>
                <div>
                    <input type="text"
                    placeholder="firstname Lastname" className="inputField"/>
                </div>
                <div className="emailId1">Email id</div>
                <div>
                    <input type="text"
                        placeholder="test@gmail.com" className="inputField" />
                </div>
                <div className="password">Password</div>
                <div>
                    <input type="Password"
                        placeholder="test@123" className="inputField" />
                </div>
                <div><button className="loginButton">Register</button></div>
            </div>
        </div>
    );
}
export default Register;