import React, { useEffect, useState } from "react";
import "./blog.css";
import PageTitle from "../../../../components/page_title/PageTitle";
import InputBox from "../../../../components/inputbox/InputBox";
import ApiClient from "../../../../utils/apiClient/ApiClient";
import { Badge, Container, Form, Table } from "react-bootstrap";
import { Avatar, FormControl, IconButton, Stack } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Blogs = () => {
  const [AllPost, setAllPost] = useState([]);
  const accessToken = import.meta.env.VITE_API_ACCESS_KEY;
  /////////////////////////////////
  // INITIALIZE CLIENT API ROOT
  /////////////////////////////////
  const ClientApi = new ApiClient(import.meta.env.VITE_API_ROOT_URI);
  /////////////////////
  // FETCH ALL POSTS
  ////////////////////
  const all_posts = async () => {
    const response = await ClientApi.read(`blogs.php?type=all`, accessToken);
    if (response.status == 200) {
      setAllPost(response.data);
    }
  };
  useEffect(() => {
    all_posts();
  }, []);
  /////////////////////
  // CREATE NEW POSTS
  ////////////////////
  /////////////////////
  // EDIT SINGLE POSTS
  ////////////////////
  ///////////////////////
  // UPDATE SINGLE POSTS
  //////////////////////
  ////////////////////////
  // DELETE SINGLE POST
  ///////////////////////
  return (
    <div className="user_blogs">
      <Container>
        <div className="user_blog_wrapper">
          <div className="user_blog_form form_table_shadow">
            <PageTitle
              title={"add new post"}
              style={{
                padding: 3,
                textTransform: "capitalize",
                fontSize: "2rem",
                color: "#232",
                fontFamily: "fantasy",
                letterSpacing: 1,
              }}
            />
            <InputBox
              label="blog title"
              input_type="text"
              fullWidth={true}
              placeholder="Enter Blog Title"
              onChange={(e) => {}}
            />
            <InputBox
              input_type="text"
              form_style={[
                {
                  my: 2,
                },
              ]}
              label="blog Tags"
              fullWidth={true}
              placeholder="Enter Blog Tags"
              onChange={(e) => {}}
            />
            <InputBox
              label="blog category"
              fullWidth={true}
              option_title="select category"
              option={[
                {
                  title: "Politic",
                  value: 1,
                },
                {
                  title: "fishing",
                  value: 2,
                },
                {
                  title: "news",
                  value: 3,
                },
              ]}
              type="dropdown"
              onChange={(e) => {}}
            />
            <InputBox
              label="blog thumbnail"
              input_type="file"
              form_style={[
                {
                  my: 2,
                },
              ]}
              fullWidth={true}
              placeholder="Enter Blog Tags"
              onChange={(e) => {}}
            />
            <InputBox
              label="blog description"
              input_type="text"
              as="textarea"
              fullWidth={true}
              placeholder="Enter Blog Tags"
              onChange={(e) => {}}
            />
            <InputBox
              only_btn={true}
              onClick={() => {
                alert();
              }}
              btn_title="save post"
              variant="outlined"
              size="small"
              btn_style={{ marginTop: 10 }}
            />
          </div>
          <div className="user_blog_table form_table_shadow">
            <Stack>
              <PageTitle
                title={"post table"}
                style={{
                  padding: 3,
                  textTransform: "capitalize",
                  fontSize: "2rem",
                  color: "#232",
                  fontFamily: "fantasy",
                  letterSpacing: 1,
                }}
              />
            </Stack>
            <Table>
              <thead>
                <tr>
                  <th align="center">Title</th>
                  <th align="center">Thumbnail</th>
                  <th align="center">Tags</th>
                  <th align="center">Category</th>
                  <th align="center">Description</th>
                  <th align="center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {AllPost.map((items) => (
                  <tr>
                    <td align="center">{items.blog_title}</td>
                    <td align="center">
                      <LazyLoadImage
                        src={`${import.meta.env.VITE_API_IMAGE_URI}/blogs_img/${
                          items.blog_thumbnail
                        }`}
                        style={{
                          width: "100px",
                          height: "auto",
                          borderRadius: 5,
                        }}
                      />
                    </td>
                    <td align="center">
                      {items.blog_tags.split(",").map((tag) => (
                        <Badge>{tag}</Badge>
                      ))}
                    </td>
                    <td align="center">news</td>
                    <td align="center">
                      {items.blog_description &&
                        items.blog_description.slice(0, 70)}
                    </td>
                    <td align="center">
                      <span>
                        <IconButton>
                          <Edit htmlColor="green" />
                        </IconButton>
                        <IconButton>
                          <Delete htmlColor="orangered" />
                        </IconButton>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Blogs;
