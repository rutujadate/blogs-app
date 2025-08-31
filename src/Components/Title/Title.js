import "./Title.css";
function Title(){
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
                    placeholder="Title" className="titleText"
                    />
                </div>
                <textarea
                type="text"
                placeholder="Description" className="textAreaDescription"/>
                <div className="textAreaButtons">
                    <button className="buttons">Cancel</button>
                    <button className="buttons">Save</button>
                </div>
            </div>
</div>
    );
}
export default Title;