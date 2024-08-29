import React from "react";

const Welcome = () => {
  return (
    <div className="tools_welcome_page">
      <div className="welcome_wrapper">
        <h1
          style={{
            textTransform: "capitalize",
            fontWeight: "600",
            color: "#232",
            fontFamily: "fantasy",
            padding: 10,
            fontSize: 24,
            letterSpacing: 1,
          }}
        >
          Welcome To our most powerfull ai tools
        </h1>
        <img
          style={{ width: "100%", height: "auto", borderRadius: 10 }}
          src="https://media.licdn.com/dms/image/D4D12AQGmbun2-e4Wwg/article-cover_image-shrink_720_1280/0/1694162850717?e=2147483647&v=beta&t=MaWg_iMAiA6sMw5n1A1Peu7-e9yyv_NAJ_IChBn1RaQ"
          alt=""
        />
      </div>
    </div>
  );
};

export default Welcome;
