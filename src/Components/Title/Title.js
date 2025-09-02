import { useNavigate } from "react-router-dom";
import "./Title.css";
function Title(){
    const [userdata, setUserData] = useState({title:"",description:""});
        function handleTitle(event) {
            let user={...userdata};
           user["title"]=event.target.value;
           setUserData(user);
        }
    
    
        function handldescription(event) {
            let user={...userdata};
            user["description"]=event.target.value;
            setUserData(user);
        }
    
        function handleTitleData(){
        console.log(userdata);
        navigate("/blogs")
    
        }
    
    const navigate=useNavigate();
    const navigateToDashboard=()=>{
        navigate("/")
    }
    return(
<div className="titleBackgroundColor">
    <div className="titleHeader">
                <div className="titleBlogsName">Blogs</div>
                <div className="titleSubHeader">
                    <div className="titleLoginName">Rutuja Date</div>
                    <div className="arrow">
                        <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>

                    </div>
                    <div className="titleLogout">Logout</div>
                </div>
            </div>
            <div className="textAreaBox">
                <div>
                    <input type="text"
                    placeholder="Title"
                    value={userdata.title}
                    onChange={handleTitle}
                    className="titleText"
                    />
                </div>
                <textarea
                type="text"
                placeholder="Description"
                 className="textAreaDescription"
                 value={userdata.description}
                    onChange={handldescription}
                 />
                <div className="textAreaButtons">
                    <button className="buttons" onClick={navigateToDashboard}>Cancel</button>
                    <button className="buttons" onClick={navigateToDashboard}>Save</button>
                </div>
            </div>
</div>
    );
}
export default Title;