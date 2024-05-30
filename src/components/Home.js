import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="homepage">
      <div className="postContents">
        <div className="postHeader">
          <h1>タイトル</h1>
        </div>
        <div className="postTextContainer">
          今はreactの勉強中です。これから勉強頑張ります。
        </div>
        <div className="nameAndDeleteButton">
          <h3>@ReactCode</h3>
          <button>削除</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
