import { useNavigate } from "react-router-dom";
import "./Blogs.css";
import { useEffect, useState } from "react";
function Blogs() {
  const navigate= useNavigate();
        const navigateToDashboard=()=>{
            navigate("/")
        }
    const navigateToTitle=()=>{
      navigate("/title")
    }



  const [liked, setLiked] = useState(0);
  const [disliked, setDisliked] = useState(0);
  // const [likeCount, setLikeCount] = useState(0);
  // const [dislikeCount, setDislikeCount] = useState(0);

  function handleLiked(){
  
      setLiked(liked + 1);
    }

  function handleDisliked (){
      setDisliked(disliked + 1);
  }
      // Creating Array
  const blogsInfo = [
    {

      title: "Hello World",
      createdBy: "rutuja.Date@gmail.com",
      createdAt: "1st Dec, 2021",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    // {
    //   title: "Hello World Again",
    //   createdby: "rutuja.Date@gmail.com",
    //   createdat: "2nd Dec, 2021",
    //   content: "",

    // }
  ];


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
                    <button className="deleteButton">
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



