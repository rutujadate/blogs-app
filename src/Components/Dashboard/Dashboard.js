import "./Dashboard.css"
function Dashboard() {
    return (
        <div className="backgroundColor">
            <div className="header">
                <div className="blogsName">Blogs</div>
                <div className="subHeader">
                    <div className="loginName">Login</div>
                    <div className="registerName">Register</div>
                </div>
            </div>
            <div className="blogsBox1">
                <div className="blogs">Blogs!</div>
                <div className="blogsText">Publish your passions,your way...</div>
                <div className="footerButtons">
                    <button className="button">Login</button>
                    <button className="button">Register</button>
                </div>
            </div>
        </div>
    );
}
export default Dashboard;