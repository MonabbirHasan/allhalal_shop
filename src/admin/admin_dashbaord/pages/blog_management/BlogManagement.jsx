import React, { useContext, useEffect, useState } from "react";
import "./blog_management.css";
import { Badge, Container, Form, Pagination, Table } from "react-bootstrap";
import { Avatar, Button, Card, Chip, IconButton } from "ui-neumorphism";
import { ThreeDots } from "react-loader-spinner";
import PageTitle from "../../components/PageTitle";
import {
  ArrowCircleLeftRounded,
  ArrowCircleRightRounded,
  Delete,
  Edit,
} from "@mui/icons-material";
import { FormControl, Stack } from "@mui/material";
import ApiClient from "../../../../utils/apiClient/ApiClient";
import { AuthContext } from "../../../../context/AuthContext";
import { toast } from "react-toastify";
import ReactQuill from "react-quill";
const BlogManagement = () => {
  const { AuthUser } = useContext(AuthContext);
  const current_user = AuthUser.data.user.user_id;
  const [AllPost, setAllPost] = useState([]);
  const [AllCategory, setAllCategory] = useState([]);
  const [PostTitle, setPostTitle] = useState("");
  const [PostTags, setPostTags] = useState("");
  const [PostCategory, setPostCategory] = useState("");
  const [PostThumbnail, setPostThumbnail] = useState("");
  const [PostDetails, setPostDetails] = useState("");
  const [PostStatus, setPostStatus] = useState(0);
  const [PrevThumbnail, setPrevThumbnail] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [totalItems, setTotalItems] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const [isEdit, setIsEdit] = useState(false);
  const [EditId, setEditId] = useState("");
  const [error, setError] = useState({});
  /////////////////////////////////
  // INITIALIZE CLIENT API ROOT
  /////////////////////////////////
  const ClientApi = new ApiClient(import.meta.env.VITE_API_ROOT_URI);
  /////////////////////////////////
  // INITIALIZE QUIL EDITOR
  /////////////////////////////////
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],
      ["code-block"],
      ["clean"], // remove formatting button
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
    "color",
    "background",
    "font",
    "align",
    "code-block",
  ];
  // POST VALIDATION
  const validate = () => {
    let errors = {};
    if (!PostTitle) {
      errors.PostTitle = "post title is required";
    }
    if (!PostTags) {
      errors.PostTags = "post tags is required";
    }
    if (!PostCategory) {
      errors.PostCategory = "post category is required";
    }
    if (!PostThumbnail) {
      errors.PostThumbnail = "post thumbnail is required";
    }
    if (!PostDetails) {
      errors.PostDetails = "post details is required";
    }
    if (!PostStatus) {
      errors.PostStatus = "post status is required";
    }
    setError(errors);
    return Object.keys(errors).length > 0;
  };
  // RESET FORM
  const reset = () => {
    setPostTitle("");
    setPostTags("");
    setPostCategory("");
    setPostThumbnail("");
    setPostDetails("");
    setPostStatus("");
  };
  //////////////////////
  // GET ALL CATEGORY
  //////////////////////
  const blog_category = async () => {
    try {
      setIsLoading(true);
      const response = await ClientApi.read(
        `api/blog/category`,
        import.meta.env.VITE_API_ACCESS_KEY
      );
      if (response.status === 200) {
        setIsLoading(false);
        const filterd = response.data.filter((i) => i.blog_category_sub === 0);
        setAllCategory(filterd);
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    blog_category();
  }, []);
  //////////////////////
  // FETCH ALL BLOGS
  /////////////////////
  const fetch_post = async () => {
    try {
      const response = await ClientApi.read(
        `api/blog/blogs`,
        import.meta.env.VITE_API_ACCESS_KEY
      );
      if (response.status == 200) {
        const simulatedData = response.data;
        const startIndex = (currentPage - 1) * itemsPerPage;
        const slicedData = simulatedData.slice(
          startIndex,
          startIndex + itemsPerPage
        );
        setAllPost(slicedData);
        setTotalItems(simulatedData.length);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetch_post();
  }, []);
  //////////////////////
  // CREATE NEW POST
  /////////////////////
  const create_post = async () => {
    try {
      if (!validate()) {
        const formdata = new FormData();
        formdata.append("blog_title", PostTitle);
        formdata.append("blog_tags", PostTags);
        formdata.append("blog_category", PostCategory);
        formdata.append("blog_thumbnail", PostThumbnail);
        formdata.append("blog_description", PostDetails);
        formdata.append("blog_author", current_user);
        formdata.append("status", PostStatus);
        const response = await ClientApi.create(
          `api/blog/blogs`,
          formdata,
          import.meta.env.VITE_API_ACCESS_KEY
        );
        if (response.status == 201) {
          reset();
          fetch_post();
          toast.success("Blog Upload Success😍📰");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  //////////////////////
  // EDIT BLOGS POST
  /////////////////////
  const edit_post = async (id) => {
    setEditId(id);
    setIsEdit(true);
    try {
      const response = await ClientApi.read(
        `api/blog/blogs/${id}`,
        import.meta.env.VITE_API_ACCESS_KEY
      );
      if (response.status == 200) {
        let data = response.data;
        setPostTitle(data.blog_title);
        setPostTags(data.blog_tags);
        setPostCategory(data.blog_category);
        setPostThumbnail(data.blog_thumbnail);
        setPrevThumbnail(data.blog_thumbnail);
        setPostDetails(data.blog_description);
        setPostStatus(data.status);
      }
    } catch (error) {
      console.log(error);
    }
  };
  //////////////////////
  // UPDATE BLOGS POST
  /////////////////////
  const update_post = async () => {
    try {
      if (!validate()) {
        if (!PostThumbnail) {
          setPostThumbnail(PrevThumbnail);
          console.log(PostThumbnail, PrevThumbnail);
        }
        const formdata = new FormData();
        formdata.append("blog_title", PostTitle);
        formdata.append("blog_tags", PostTags);
        formdata.append("blog_category", PostCategory);
        formdata.append("blog_thumbnail", PostThumbnail);
        formdata.append("blog_description", PostDetails);
        formdata.append("blog_author", current_user);
        formdata.append("status", PostStatus);
        const response = await ClientApi.update(
          `api/blog/blogs/${EditId}`,
          formdata,
          import.meta.env.VITE_API_ACCESS_KEY
        );
        if (response.status === 200) {
          setIsEdit(false);
          reset();
          fetch_post();
          toast.success("Blog Update Success😍📰");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  //////////////////////
  // DELETE BLOGS POST
  /////////////////////
  const delete_post = async (id) => {
    try {
      if (confirm("are you sure you want to delete record!")) {
        const response = await ClientApi.delete(
          `api/blog/blogs/${id}`,
          import.meta.env.VITE_API_ACCESS_KEY
        );
        if (response.status === 200) {
          fetch_post();
          toast.success("Blog Delete Success🎉🎉🎉");
        }
      }
    } catch (error) {
      console.log;
    }
  };
  /******************
   * ERROR ELEMENTS
   ******************/
  const error_element = (error) => {
    return (
      <small
        style={{
          color: "tomato",
          textTransform: "capitalize",
          fontSize: 12,
          paddingTop: 4,
        }}
      >
        {error}
      </small>
    );
  };
  /*********************************
   *BGMI DATA PAGINATION
   *********************************/
  const handlePageChange = (page) => {
    setCurrentPage(page);
    fetch_post();
  };
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  useEffect(() => {
    console.log(PostDetails);
  }, [PostDetails]);
  // <ThreeDots
  // visible={true}
  // height="80"
  // width="80"
  // color="#4fa94d"
  // radius="9"
  // ariaLabel="three-dots-loading"
  // wrapperStyle={{}}
  // wrapperClass=""
  // />
  return (
    <div className="blog_management">
      <Container>
        <div className="blog_management_wrapper">
          {/* BLOG FORM */}
          <div className="blog_management_form">
            <Card className="global_card_border">
              <PageTitle title="Add New Post" color="black" />
              {/* BLOG TITLE */}
              <FormControl fullWidth sx={{ pt: 3 }}>
                <Form.Label>Blog Title</Form.Label>
                <Form.Control
                  className="global_input_shadow"
                  placeholder="Enter Blog Title!"
                  onChange={(e) => setPostTitle(e.target.value)}
                  value={PostTitle}
                />
                {error.PostTitle && error_element(error.PostTitle)}
              </FormControl>
              {/* BLOG TAGS */}
              <FormControl fullWidth sx={{ pt: 3 }}>
                <Form.Label>Blog Tags</Form.Label>
                <Form.Control
                  className="global_input_shadow"
                  placeholder="Enter Blog Tags!"
                  onChange={(e) => setPostTags(e.target.value)}
                  value={PostTags}
                />
                {error.PostTags && error_element(error.PostTags)}
              </FormControl>
              {/* BLOG CATEGORY */}
              <FormControl fullWidth sx={{ py: 3 }}>
                <Form.Label>Blog Category</Form.Label>
                <Form.Select
                  onChange={(e) => setPostCategory(e.target.value)}
                  value={PostCategory}
                  className="global_input_shadow"
                >
                  <option selected>Select Category</option>
                  {AllCategory.map((item) => {
                    return (
                      <option value={item.blog_category_id}>
                        {item.blog_category_name}
                      </option>
                    );
                  })}
                </Form.Select>
                {error.PostCategory && error_element(error.PostCategory)}
              </FormControl>
              {/* BLOG CATEGORY */}
              <FormControl fullWidth>
                <Form.Label>Blog Status</Form.Label>
                <Form.Select
                  onChange={(e) => setPostStatus(e.target.value)}
                  value={PostStatus}
                  className="global_input_shadow"
                >
                  <option selected>status</option>
                  <option value={1}>Active</option>
                  <option value={0}>InActive</option>
                </Form.Select>
                {error.PostStatus && error_element(error.PostStatus)}
              </FormControl>
              {/* BLOG THUMBNAIL */}
              <FormControl fullWidth sx={{ py: 3 }}>
                <Form.Label>Blog Thumbnail</Form.Label>
                <Form.Control type="text" hidden value={PrevThumbnail} />
                <Form.Control
                  onChange={(e) => setPostThumbnail(e.target.files[0])}
                  // value={PostThumbnail.name}
                  className="global_input_shadow"
                  type="file"
                />
                {error.PostThumbnail && error_element(error.PostThumbnail)}
              </FormControl>
              {/* BLOG DESCRIPTION */}
              <FormControl fullWidth>
                <Form.Label>Blog Description</Form.Label>
                {/* <Form.Control
                  onChange={(e) => setPostDetails(e.target.value)}
                  value={denge}
                  as="textarea"
                  className="global_input_shadow"
                /> */}
                <ReactQuill
                  className="global_input_shadow border-0 rounded-3"
                  bounds={true}
                  modules={modules}
                  formats={formats}
                  theme="snow"
                  value={PostDetails}
                  onChange={setPostDetails}
                />
                {error.PostDetails && error_element(error.PostDetails)}
              </FormControl>
              {/* SAVE BUTTON */}
              <FormControl sx={{ mt: 3 }}>
                {isEdit == true ? (
                  <Stack direction="row" spacing={2}>
                    <Button
                      depressed={true}
                      color={"red"}
                      onClick={() => {
                        setIsEdit(false);
                        reset();
                      }}
                    >
                      cancel
                    </Button>
                    <Button depressed={true} onClick={update_post}>
                      update post
                    </Button>
                  </Stack>
                ) : (
                  <Button depressed={true} onClick={create_post}>
                    save post
                  </Button>
                )}
              </FormControl>
            </Card>
          </div>
          {/* BLOG TABLE */}
          <div className="blog_management_table">
            <Card className="global_card_border">
              <PageTitle title="Post Table" color="black" />
              <Table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Thumbnail</th>
                    <th>Title</th>
                    <th>Tags</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {AllPost.map((items, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <Avatar
                          // square={true}
                          rounded={true}
                          src={`
                          ${import.meta.env.VITE_API_IMAGE_URI}/blog_img/${
                            items?.blog_thumbnail
                          }
                          `}
                        />
                      </td>
                      <td>{items?.blog_title}</td>
                      <td>
                        {items?.blog_tags?.split(",").map((tag) => (
                          <Badge>{tag}</Badge>
                        ))}
                      </td>
                      <td>{items?.blog_description?.slice(0, 100)}</td>
                      <td>
                        {AllCategory?.find(
                          (i) => i.blog_category_id === items.blog_category
                        )?.blog_category_name || "not found!"}
                      </td>
                      <td>
                        <IconButton onClick={() => edit_post(items.blog_id)}>
                          <Edit htmlColor="green" />
                        </IconButton>
                        <IconButton onClick={() => delete_post(items.blog_id)}>
                          <Delete htmlColor="orangered" />
                        </IconButton>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <section className="pagination">
                <Pagination
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 5,
                    alignItems: "center",
                  }}
                >
                  <IconButton
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    <ArrowCircleLeftRounded htmlColor="#232" />
                  </IconButton>
                  <Chip
                    type="success"
                    sx={{ marginTop: "3px", borderRadius: "5px" }}
                  >
                    {currentPage} of {totalPages}
                  </Chip>
                  <IconButton
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    color="success"
                  >
                    <ArrowCircleRightRounded htmlColor="#232" />
                  </IconButton>
                </Pagination>
              </section>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlogManagement;
