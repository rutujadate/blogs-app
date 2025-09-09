import { useNavigate } from "react-router-dom";
import "./Blogs.css";
import { useEffect, useState } from "react";
import axios from "axios";
function Blogs() {
  const navigate = useNavigate();
  const navigateToDashboard = () => {
    navigate("/")
  }
  const navigateToTitle = () => {
    navigate("/title")
  }



  const [liked, setLiked] = useState(0);
  const [disliked, setDisliked] = useState(0);
  const [blogsInfo, setBlogsInfo] = useState([]);

  function handleLiked() {

    setLiked(liked + 1);
  }

  function handleDisliked() {
    setDisliked(disliked + 1);
  }
  function handleToDelete(id){
    axios.delete(`http://localhost:3001/blogs/${id}`)
          .then(() => {
        // Remove blog from UI
        setBlogsInfo(blogsInfo.filter((blog) => blog.id !== id));
        console.log(`Blog with ID ${id} deleted.`);
      })
      .catch((error) => {
        console.error("Error deleting blog:", error);
      });
  }
  }
  useEffect(() => {
    axios.get("http://localhost:3001/blogs")
      .then((response) => {
        setBlogsInfo(response.data.blogsInfo || response.data);

      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
      })
  }, []);


  return (
    <div className="blogsBackgroundColor">
      <div>
        <div>
          <div className="blogsHeader"><div className="blogsName" onClick={navigateToDashboard}>Blogs</div>
            <div className="blogsSubHeader">
              <div className="blogsLoginName">Rutuja Date</div>
              <div className="arrow">
                <button className="blogsLogout">
                  <i className="fa fa-arrow-circle-o-right " aria-hidden="true"></i> Logout
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="contentBox">
          <div className="contentBox2">
            <div className="title">Blogs</div>
            <div>
              <button className="createButton" onClick={navigateToTitle}>
                <i className="fa fa-plus-circle newPostButton" aria-hidden="true"></i> Create new post
              </button>
            </div>
          </div>
          <div>Publish your passion your way...</div>
          <hr />
        </div>   
          {/*}.........Using map.... */}
        {blogsInfo.map((singleElement) => (
          <div className="blogCard">
            <div className="blogContent">
              <div className="blogTitle">{singleElement.title}</div>
              <div>
                <strong>Created By :</strong> <i> {singleElement.createdBy}</i>
              </div>
              <div>
                <strong>Created At :</strong> <i> {singleElement.createdAt}</i>
              </div>
              <hr />
              <div>{singleElement.description}</div>
              <div>
                <div className="blogActions">
                  <div>
                    <button
                      className="likeButton"
                      onClick={handleLiked}
                    >
                      <i className="fa fa-thumbs-up" aria-hidden="true"> {liked}</i>
                    </button>
                    <button
                      className="dislikeButton"
                      onClick={handleDisliked}
                    >
                      <i className="fa fa-thumbs-down" aria-hidden="true"> {disliked}</i>
                    </button>
                  </div>
                  <div>
                    <button className="editButton" onClick={navigateToTitle}>
                      <i className="fa fa-pencil" aria-hidden="true"></i> Edit
                    </button>
                    <button className="deleteButton" onClick={handleToDelete}>
                      <i className="fa fa-trash" aria-hidden="true"></i> Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>

  );
}

export default Blogs;



