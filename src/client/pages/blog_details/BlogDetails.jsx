import { Box, Stack, Button as MUIButton, Badge } from "@mui/material";
import React, { lazy, useContext, useEffect, useState } from "react";
import { Container, Form, Modal } from "react-bootstrap";
import "./blog_details.css";
const Header = lazy(() => import("../../components/common/header/Header"));
const Footer = lazy(() => import("../../components/common/footer/Footer"));
import { useLocation, useNavigate } from "react-router-dom";
import {
  Avatar,
  Button,
  Card,
  Divider,
  IconButton,
  TextArea,
  Dialog,
  Typography,
  TextField,
} from "ui-neumorphism";
import {
  CopyAll,
  Facebook,
  Send,
  Share,
  Telegram,
  ThumbDown,
  ThumbDownAlt,
  ThumbUp,
  ThumbUpAlt,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
import ApiClient from "../../../utils/apiClient/ApiClient";
import { AuthContext } from "../../../context/AuthContext";
import Comments from "../../components/comments/Comments";
import BlogReader from "../../components/BlogReader";
import { toast } from "react-toastify";
const BlogDetails = () => {
  const location = useLocation();
  const { AuthUser } = useContext(AuthContext);
  const navigate = useNavigate();
  let post_id = window.location.href.split("?id=")[1];
  // post_id = window.location.href.split("id=");
  const [AllComments, setAllComments] = useState([]);
  const [SinglePost, setSinglePost] = useState({});
  const [visible, setVisible] = useState(false);
  const [ReplyId, setReplyId] = useState();
  const [isOpenComment, setIsOpenComment] = useState(false);
  const [comments, setComment] = useState("");
  const [reply_comment, setReplyComment] = useState("");
  const [isLike, setIsLike] = useState("");
  const handleShow = () => setVisible(true);
  const handleClose = () => setVisible(false);
  const TOKEN = import.meta.env.VITE_API_ACCESS_KEY;
  const [CurrentUser, setCurrentUser] = useState();
  useEffect(() => {
    if (!AuthUser) {
      return navigate("/signin");
    } else {
      setCurrentUser(AuthUser.data.user);
    }
  }, [AuthUser]);
  /////////////////////////////////
  // INITIALIZE CLIENT API ROOT
  /////////////////////////////////
  const ClientApi = new ApiClient(import.meta.env.VITE_API_ROOT_URI);
  //////////////////////
  // FETCH ALL BLOGS
  /////////////////////
  const fetch_post = async () => {
    try {
      const response = await ClientApi.read(`api/blog/blogs/${post_id}`, TOKEN);
      if (response.status == 200) {
        setSinglePost(response.data);
        console.log(post_id);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetch_post();
    // console.log(AuthUser.data.user.name);
  }, [post_id]);
  //////////////////////
  // POST COMMENTS
  /////////////////////
  const post_comment = async (post_id) => {
    if (!AuthUser) {
      return navigate("/signin");
    }
    try {
      if (comments !== "") {
        const data = {
          blog_comment_author: CurrentUser.user_id,
          blog_comment_content: comments,
          blog_comment_post_id: post_id,
          blog_comment_is_reply: 0,
          status: 1,
        };
        const response = await ClientApi.create(
          `api/blog/comments`,
          data,
          TOKEN
        );
        if (response.status === 201) {
          setComment("");
          fetch_comment();
          toast.success("comment success🎉🎉🎉");
        }
      } else {
        toast.error("Please A Comment😒😒😒");
      }
    } catch (error) {
      console.log(error);
    }
  };
  //////////////////////
  // ADD REPLY COMMENTS
  //////////////////////
  const add_reply = async (parent_id) => {
    if (!AuthUser) {
      return navigate("/signin");
    }
    try {
      if (reply_comment !== "") {
        const data = {
          blog_comment_author: CurrentUser.user_id,
          blog_comment_content: reply_comment,
          blog_comment_post_id: post_id,
          blog_comment_is_reply: parent_id,
          status: 1,
        };
        const response = await ClientApi.create(
          `api/blog/comments`,
          data,
          TOKEN
        );
        if (response.status === 201) {
          setIsOpenComment(false);
          setReplyComment("");
          fetch_comment();
          toast.success("reply added success🎉🎉🎉F");
        }
      } else {
        toast.error("please add reply😒😒");
      }
    } catch (error) {
      console.log(error);
    }
  };
  ///////////////////////////
  // ADD COMMENTS REACTIONS
  //////////////////////////
  const add_likes = async (id) => {
    if (!AuthUser) {
      return navigate("/signin");
    }
    try {
      fetch_comment();
      const data = {
        comment_id: id,
        user_id: CurrentUser.user_id,
        reaction_type: "like",
      };
      setIsLike("like");
      const response = await ClientApi.create(`api/blog/reaction`, data, TOKEN);
      if (response.status === 201) {
        toast.success("Like Added success🎉🎉🎉");
      }
    } catch (error) {
      if (error.response.status === 409) {
        const data = {
          comment_id: id,
          user_id: CurrentUser.user_id,
          reaction_type: "like",
        };
        const response = await ClientApi.update(
          `api/blog/reaction/${id}`,
          data,
          TOKEN
        );
        if (response.status === 200) {
          toast.success("dislike Added success🎉🎉🎉");
        }
        toast.success("Already Liked 😊😊");
      }
    }
  };
  const add_dislike = async (id) => {
    if (!AuthUser) {
      return navigate("/signin");
    }
    try {
      fetch_comment();
      const data = {
        comment_id: ReplyId,
        user_id: CurrentUser.user_id,
        reaction_type: "dislike",
      };
      const response = await ClientApi.update(
        `api/blog/reaction/${id}`,
        data,
        TOKEN
      );
      if (response.status === 200) {
        toast.success("dislike Added success🎉🎉🎉");
      }
    } catch (error) {
      console.log(error);
      if (error.response.status === 409) {
        // toast.success("Already disliked 😊😊");
      }
    }
  };
  //////////////////////
  // FETCH ALL COMMENTS
  //////////////////////
  const fetch_comment = async () => {
    try {
      const response = await ClientApi.read(
        `api/blog/comments/find/${post_id}`,
        TOKEN
      );
      if (response.status === 200) {
        console.log(response.data);
        setAllComments(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  function buildCommentTree(comments) {
    const commentMap = new Map();
    const rootComments = [];

    // Create a map of comments by their ID and initialize replies array
    comments.forEach((comment) => {
      comment.replies = []; // Initialize replies array
      // Convert IDs to numbers for consistent comparison
      const id = Number(comment.blog_comment_id);
      commentMap.set(id, comment);
    });

    // Build the tree structure
    comments.forEach((comment) => {
      const id = Number(comment.blog_comment_id);
      const parentId = Number(comment.blog_comment_is_reply);

      if (parentId === 0 || !commentMap.has(parentId)) {
        // This is a root comment (parentId should be 0 or undefined if it's not in the map)
        rootComments.push(comment);
      } else {
        // This is a reply
        const parent = commentMap.get(parentId);
        if (parent) {
          parent.replies.push(comment);
        } else {
          console.error(`Parent comment not found for reply with ID ${id}`);
        }
      }
    });

    return rootComments;
  }

  const handleOpenComment = (id) => {
    setReplyId(id);
    setIsOpenComment(true);
  };

  const handleCloseComment = () => {
    setIsOpenComment(false);
    setReplyId(null);
  };
  // Example usage

  useEffect(() => {
    fetch_comment();
    // const tree = buildCommentTree(AllComments);
  }, [post_id]);
  // COPY CONTROLLE
  const copy_controll = (text) => {
    // Create a temporary textarea element
    const textarea = document.createElement("textarea");
    textarea.value = text;
    // Make the textarea element out of viewport
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    // Append the textarea to the document body
    document.body.appendChild(textarea);
    // Select the text inside the textarea
    textarea.select();
    textarea.setSelectionRange(0, 99999); // For mobile devices
    // Copy the text to the clipboard
    try {
      document.execCommand("copy");
      toast.success("Text copy succes🎉🎉🎉");
    } catch (err) {
      console.error("Failed to copy text:", err);
    }

    // Remove the textarea element
    document.body.removeChild(textarea);
  };

  return (
    <>
      <Header />
      <div className="blog_details_page">
        <Container>
          <div className="blog_details_wrapper">
            {/* BLOG THUMBNAIL SECTION START HERE */}
            <section className="blog_details_thumbnail">
              <Card style={{ padding: 5 }}>
                <img
                  src={`${import.meta.env.VITE_API_IMAGE_URI}/blog_img/${
                    SinglePost?.blog_thumbnail
                  }`}
                  alt={SinglePost.blog_title}
                />
              </Card>
            </section>
            {/* BLOG DETAILS SECTION START HERE */}
            <section className="blog_details_author">
              <Stack direction={"row"} spacing={1}>
                <Avatar
                  size={50}
                  style={{
                    background: "var(--avatar_bg)",
                    textTransform: "uppercase",
                  }}
                >
                  {SinglePost.username && SinglePost.username[0]}
                </Avatar>
                <Box>
                  <p className="blog_author_name">{SinglePost?.username}</p>
                  <small>
                    posted by{" "}
                    {SinglePost?.role == "admin"
                      ? "admin"
                      : SinglePost.role == "user"
                      ? "customer"
                      : SinglePost.role == "vendor"
                      ? "vendor"
                      : "advertisor"}
                  </small>
                </Box>
              </Stack>

              {/* blog social share optins */}
              <Stack direction={"row"} spacing={1}>
                <IconButton active={true}>
                  <Facebook />
                </IconButton>
                <IconButton active={true}>
                  <Twitter />
                </IconButton>
                <IconButton active={true} onClick={handleShow}>
                  <Share />
                </IconButton>
              </Stack>
            </section>
            {/* BLOG READER SECTION START HERE */}
            <section className="blog_details_title">
              <BlogReader text={`"${SinglePost.blog_description}"`} />
            </section>
            {/* BLOG TITLE SECTION START HERE */}
            <section className="blog_details_title">
              <h4>{SinglePost.blog_title}</h4>
            </section>
            {/* DETAILS DESCTIPTION START HERE */}
            <section className="blog_details">
              <div
                dangerouslySetInnerHTML={{
                  __html: SinglePost.blog_description,
                }}
              ></div>
            </section>
            <Divider />
            {/* COMMENTS SECTION START HERE */}
            <section className="blog_details_comment">
              <h3 className="comment_title">
                leave a comment ({AllComments.length})
              </h3>
              {/* USERS COMMENT LISTS */}
              <div className="comments_list" hidden>
                {/* COMMENT ITEM BOX START*/}
                {AllComments.filter(
                  (i) => i.blog_comment_is_reply == i.blog_comment_is_reply
                ).map((item) => (
                  <div
                    className="comment_item"
                    style={{
                      marginLeft:
                        item.blog_comment_is_reply !== "0" ? "40px" : "",
                      borderLeft: "2px solid #bbb",
                      paddingLeft: "10px",
                      borderRadius: 10,
                    }}
                  >
                    <small>
                      {item.blog_comment_id + "-" + item.blog_comment_is_reply}
                    </small>
                    <Stack direction={"row"} spacing={1} alignItems={"center"}>
                      <Avatar style={{ textTransform: "uppercase" }}>
                        {item?.username[0]}
                      </Avatar>
                      <small style={{ textTransform: "capitalize" }}>
                        {item?.username}
                      </small>
                    </Stack>
                    <div className="comments_content">
                      <i>{item.blog_comment_content}</i>
                    </div>
                    <div className="reply_input">
                      {/* COMMENT REACTION BUTTON */}
                      <Stack direction={"row"} paddingTop={2} spacing={1}>
                        <Button
                          onClick={() => {
                            // isOpenComment == false
                            //   ? setIsOpenComment(true)
                            //   : setIsOpenComment(false);
                            setIsOpenComment(true);
                            setReplyId(item.blog_comment_id);
                          }}
                          depressed={true}
                          rounded={true}
                          style={{ textTransform: "capitalize" }}
                          size="small"
                        >
                          reply
                        </Button>
                        <Button depressed={true} rounded={true} size="small">
                          <ThumbUpAlt htmlColor="green" fontSize="small" />
                          <small>32</small>
                        </Button>
                        <Button depressed={true} rounded={true} size="small">
                          <small>3</small>
                          <ThumbDownAlt
                            htmlColor="orangered"
                            fontSize="small"
                          />
                        </Button>
                      </Stack>
                      {/* COMMENT REPLY INPUT BOX */}
                      {ReplyId == item.blog_comment_id &&
                      isOpenComment == true ? (
                        <Box sx={{ py: 1 }}>
                          <Form.Control
                            placeholder="Add a Reply!"
                            className="global_input_shadow rounded-5 _2nHt_"
                            size="sm"
                            onChange={(e) => setReplyComment(e.target.value)}
                            value={reply_comment}
                          />
                          <Stack
                            direction={"row"}
                            spacing={1}
                            alignItems={"center"}
                            mt={1}
                          >
                            <button
                              onClick={() => setIsOpenComment(false)}
                              className="_cL4RU _CWiZp border-0 text-danger rounded-5"
                            >
                              Cancel
                            </button>
                            <button
                              onClick={() =>
                                add_reply(post_id, item.blog_comment_id)
                              }
                              className="_cL4RU _CWiZp border-0 text-success rounded-5"
                            >
                              Send
                            </button>
                          </Stack>
                        </Box>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                ))}
                {/* COMMENT ITEM BOX END*/}
              </div>
              {buildCommentTree(AllComments).map((item) => {
                return (
                  <Comments
                    key={item.blog_comment_id}
                    comment={item}
                    post={post_id}
                    current_user={CurrentUser}
                    add_reply={() => add_reply(item.blog_comment_id)}
                    onChange={(e) => setReplyComment(e.target.value)}
                    value={reply_comment}
                    isOpenComment={
                      isOpenComment && ReplyId === item.blog_comment_id
                    }
                    CloseCommentInput={handleCloseComment}
                    add_likes={() => add_likes(item.blog_comment_id)}
                    add_dislike={() => add_dislike(item.blog_comment_id)}
                  />
                );
              })}

              {/* COMMENT FORMS START*/}
              <div className="blog_comment_form">
                <Stack
                  direction={"row"}
                  spacing={1}
                  pb={1}
                  alignItems={"center"}
                >
                  <Avatar
                    color={"white"}
                    style={{ textTransform: "capitalize" }}
                  >
                    {CurrentUser?.name[0]}
                  </Avatar>
                  <Typography style={{ textTransform: "capitalize" }}>
                    {CurrentUser?.name}
                  </Typography>
                </Stack>
                <Stack direction={"column"} spacing={1}>
                  <Card className="global_card_border">
                    <Form.Control
                      as="textarea"
                      onChange={(e) => setComment(e.target.value)}
                      value={comments}
                      className="global_input_shadow"
                      style={{ height: 140 }}
                      rows={40}
                      cols={40}
                    />
                  </Card>
                  <Button
                    onClick={() => post_comment(post_id)}
                    depressed={true}
                    variant="outlined"
                    startIcon={<Send />}
                  >
                    submit
                  </Button>
                </Stack>
              </div>
              {/* COMMENT FORMS END*/}
            </section>
          </div>
        </Container>
      </div>
      <Footer />
      {/* SHARE MODAL DIALOGS */}
      <Dialog minWidth={300} visible={visible}>
        <Card className="p-3">
          <Stack direction={"row"} spacing={3} my={1}>
            <IconButton active={true}>
              <Facebook />
            </IconButton>
            <IconButton active={true}>
              <Twitter />
            </IconButton>
            <IconButton active={true}>
              <Telegram />
            </IconButton>
            <IconButton active={true}>
              <WhatsApp />
            </IconButton>
            <IconButton
              onClick={() => copy_controll(window.location.href)}
              active={true}
            >
              <CopyAll />
            </IconButton>
          </Stack>
          <Button active={true} onClick={handleClose}>
            close
          </Button>
        </Card>
      </Dialog>
    </>
  );
};

export default BlogDetails;
