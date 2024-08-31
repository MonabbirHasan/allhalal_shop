import React, { useEffect, useState } from "react";
import { ThumbDownAlt, ThumbUpAlt } from "@mui/icons-material";
import { Box, Stack } from "@mui/material";
import { Form } from "react-bootstrap";
import { Avatar, Button } from "ui-neumorphism";
import PropTypes from "prop-types";

const Comments = ({
  comment,
  post,
  current_user,
  add_reply,
  onChange,
  value,
  CloseCommentInput,
  add_likes,
  add_dislike,
}) => {
  const [ReplyId, setReplyId] = useState(null);
  const [isOpenComment, setIsOpenComment] = useState(false);

  return (
    <div
      style={{
        marginLeft: comment.blog_comment_is_reply !== "0" ? "20px" : "0",
        borderLeft: "2px solid #ffffff",
        paddingLeft: "10px",
        padding: 10,
        borderTopLeftRadius: 10,
      }}
    >
      <Stack direction={"row"} spacing={1} alignItems={"center"}>
        <Avatar style={{ textTransform: "uppercase" }}>
          {comment?.username[0]}
        </Avatar>
        <small style={{ textTransform: "capitalize" }}>
          {comment?.username}
        </small>
      </Stack>

      <div>{comment.blog_comment_content}</div>
      <Stack direction={"row"} spacing={1}>
        <button
          onClick={() => {
            setIsOpenComment(true);
            setReplyId(comment.blog_comment_id);
          }}
          className="border-0 _cL4RU _CWiZp _39_ND _EotAP "
        >
          Reply
        </button>
        <Button
          depressed={true}
          rounded={true}
          size="small"
          onClick={add_likes}
        >
          <ThumbUpAlt htmlColor="green" fontSize="small" />
          <small>{comment.reaction_count}</small>
        </Button>
        <Button
          depressed={true}
          rounded={true}
          size="small"
          onClick={add_dislike}
        >
          <small>3</small>
          <ThumbDownAlt htmlColor="orangered" fontSize="small" />
        </Button>
      </Stack>
      {/* Render replies recursively */}
      {comment.replies && comment.replies.length > 0 && (
        <div>
          {comment.replies.map((reply) => (
            <Comments
              key={reply.blog_comment_id}
              comment={reply}
              post={post}
              current_user={current_user}
              add_reply={add_reply}
              onChange={onChange}
              value={value}
              CloseCommentInput={CloseCommentInput}
              add_likes={add_likes}
              add_dislike={add_dislike}
            />
          ))}
        </div>
      )}
      {/* {ReplyId === comment.blog_comment_id && isOpenComment && (
        <Box sx={{ py: 1 }}>
          <Form.Control
            placeholder="Add a Reply!"
            className="global_input_shadow rounded-5 _2nHt_"
            size="sm"
            onChange={onChange}
            value={value}
          />
          <Stack direction={"row"} spacing={1} alignItems={"center"} mt={1}>
            <button
              onClick={() => setIsOpenComment(false)}
              className="border-0 _cL4RU _CWiZp _39_ND _EotAP"
            >
              Cancel
            </button>
            <button
              onClick={() => add_reply(post, comment.blog_comment_id)}
              className="border-0 _cL4RU    _CWiZp _39_ND _EotAP "
            >
              Send
            </button>
          </Stack>
        </Box>
      )} */}
      {ReplyId === comment.blog_comment_id && isOpenComment && (
        <Box sx={{ py: 1 }}>
          <Form.Control
            placeholder="Add a Reply!"
            className="global_input_shadow rounded-5 _2nHt_ w-25"
            size="sm"
            onChange={onChange} // Ensure this is correctly used
            value={value} // Ensure this is correctly used
          />
          <Stack direction={"row"} spacing={1} alignItems={"center"} mt={1}>
            <button
              onClick={() => {
                setIsOpenComment(false);
                CloseCommentInput(); // Call the function passed as prop
              }}
              className="border-0 _cL4RU _CWiZp _39_ND _EotAP"
            >
              Cancel
            </button>
            <button
              onClick={() => add_reply(post, comment.blog_comment_id)}
              className="border-0 _cL4RU _CWiZp _39_ND _EotAP"
            >
              Send
            </button>
          </Stack>
        </Box>
      )}
    </div>
  );
};
Comments.propTypes = {
  comment: PropTypes.shape({
    blog_comment_id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    blog_comment_content: PropTypes.string.isRequired,
    replies: PropTypes.array,
  }).isRequired,
  post: PropTypes.string.isRequired,
  current_user: PropTypes.string.isRequired,
  add_reply: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  CloseCommentInput: PropTypes.func.isRequired, // Ensure prop name is consistent
  add_likes: PropTypes.func.isRequired,
  add_dislike: PropTypes.func.isRequired,
};

export default Comments;
