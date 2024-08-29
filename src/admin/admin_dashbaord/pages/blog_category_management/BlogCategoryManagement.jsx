import React, { useEffect, useState } from "react";
import "./blog_category_management.css";
import { Badge, Container, Form, Pagination, Table } from "react-bootstrap";
import { Button, Card, Chip, IconButton } from "ui-neumorphism";
import PageTitle from "../../components/PageTitle";
import {
  ArrowCircleLeftRounded,
  ArrowCircleRightRounded,
  Delete,
  Edit,
} from "@mui/icons-material";
import { FormControl, Stack } from "@mui/material";
import ApiClient from "../../../../utils/apiClient/ApiClient";
import { toast } from "react-toastify";
const BlogCategoryManagement = () => {
  const [AllCategory, setAllCategory] = useState([]);
  const [CategoryName, setCategoryName] = useState("");
  const [CategoryType, setCategoryType] = useState("");
  const [CategoryStatus, setCategoryStatus] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [totalItems, setTotalItems] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const [isEdit, setIsEdit] = useState(false);
  const [EditId, setEditId] = useState("");
  const [error, setError] = useState({});
  const TOKEN = import.meta.env.VITE_API_ACCESS_KEY;
  /////////////////////////////////
  // INITIALIZE CLIENT API ROOT
  /////////////////////////////////
  const ClientApi = new ApiClient(import.meta.env.VITE_API_ROOT_URI);
  // POST VALIDATION
  const validate = () => {
    let errors = {};
    if (!CategoryName) {
      errors.CategoryName = "category name is required";
    }
    if (!CategoryType) {
      errors.CategoryType = "category type is required";
    }
    if (!CategoryStatus) {
      errors.CategoryStatus = "category status is required";
    }
    setError(errors);
    return Object.keys(errors).length > 0;
  };
  const reset = () => {
    setCategoryName("");
    setCategoryType("");
    setCategoryStatus("");
  };
  //////////////////////
  // GET ALL CATEGORY
  //////////////////////
  const fetch_blog_category = async () => {
    try {
      setIsLoading(true);
      const response = await ClientApi.read(
        `api/blog/category`,
        import.meta.env.VITE_API_ACCESS_KEY
      );
      if (response.status === 200) {
        setIsLoading(false);
        const filterd = response.data.filter((i) => i.blog_category_sub === 0);
        setAllCategory(response.data);
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetch_blog_category();
  }, []);
  //////////////////////
  // CREATE CATEGORY
  //////////////////////
  const create_category = async () => {
    try {
      if (!validate()) {
        const data = {
          blog_category_name: CategoryName,
          blog_category_sub: CategoryType,
          status: CategoryStatus,
        };
        const response = await ClientApi.create(
          `api/blog/category`,
          data,
          TOKEN
        );
        if (response.status === 201) {
          reset();
          blog_category();
          toast.success("blog category create success🎉🎉🎉");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  //////////////////////
  // EDIT CATEGORY
  //////////////////////
  const edit_category = async (id) => {
    setIsEdit(true);
    setEditId(id);
    try {
      const response = await ClientApi.read(`api/blog/category/${id}`, TOKEN);
      if (response.status === 200) {
        const data = response.data;
        setCategoryName(data.blog_category_name);
        setCategoryType(data.blog_category_sub);
        setCategoryStatus(data.status);
      }
    } catch (error) {
      console.log(error);
    }
  };
  //////////////////////
  // UPDATE CATEGORY
  //////////////////////
  const update_category = async () => {
    try {
      if (!validate()) {
        const data = {
          blog_category_name: CategoryName,
          blog_category_sub: CategoryType,
          status: CategoryStatus,
        };
        const response = await ClientApi.update(
          `api/blog/category/${EditId}`,
          data,
          TOKEN
        );
        if (response.status === 200) {
          console.log(response.status);
          reset();
          setIsEdit(false);
          fetch_blog_category();
          toast.success("blog category update success🎉🎉🎉");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  //////////////////////
  // DELETE CATEGORY
  //////////////////////
  const delete_category = async (id) => {
    try {
      if (confirm("are you sure you want to delete this record?")) {
        const response = await ClientApi.delete(
          `api/blog/category/${id}`,
          TOKEN
        );
        if (response.status === 200) {
          fetch_blog_category();
          toast.success("blog category delete success🎉🎉🎉");
        }
      }
    } catch (error) {
      console.log(error);
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
  return (
    <div className="blog_category_management">
      <Container>
        {/* BLOG CATEGORY FORM */}
        <div className="blog_category_management_form">
          <Card className="global_card_border">
            <PageTitle title="Add New category" />
            {/* BLOG CATEGORY NAME */}
            <FormControl fullWidth sx={{ pt: 3 }}>
              <Form.Label>Blog Title</Form.Label>
              <Form.Control
                className="global_input_shadow"
                placeholder="Enter Category Name!"
                onChange={(e) => setCategoryName(e.target.value)}
                value={CategoryName}
              />
              {error.CategoryName && error_element(error.CategoryName)}
            </FormControl>
            {/* BLOG CATEGORY SUB NAME */}
            <FormControl fullWidth sx={{ pt: 3 }}>
              <Form.Label>Category</Form.Label>
              <Form.Select
                className="global_input_shadow"
                onChange={(e) => setCategoryType(e.target.value)}
                value={CategoryType}
              >
                <option selected>select category</option>
                <option value={0}>parent category</option>
                {AllCategory.filter((i) => i.blog_category_sub === 0).map(
                  (item) => {
                    return (
                      <option value={item.blog_category_id}>
                        {item.blog_category_name}
                      </option>
                    );
                  }
                )}
              </Form.Select>
              {error.CategoryType && error_element(error.CategoryType)}
            </FormControl>
            {/* BLOG CATEGORY STATUS */}
            <FormControl fullWidth sx={{ pt: 3 }}>
              <Form.Label>Category Status</Form.Label>
              <Form.Select
                className="global_input_shadow"
                onChange={(e) => setCategoryStatus(e.target.value)}
                value={CategoryStatus}
              >
                <option selected>select Status</option>
                <option value={1}>Active</option>
                <option value={0}>InActive</option>
              </Form.Select>
            </FormControl>
            {/* SAVE BUTTON */}
            <FormControl sx={{ mt: 3 }}>
              {isEdit == true ? (
                <Stack direction={"row"} spacing={2}>
                  <Button
                    depressed={true}
                    color={"red"}
                    onClick={() => {
                      reset();
                      setIsEdit(false);
                    }}
                  >
                    cancel
                  </Button>
                  <Button onClick={update_category} depressed={true}>
                    update category
                  </Button>
                </Stack>
              ) : (
                <Button depressed={true} onClick={create_category}>
                  save category
                </Button>
              )}
            </FormControl>
          </Card>
        </div>
        {/* BLOG CATEGORY TABLE */}
        <div className="blog_category_management_table ">
          <Card className="global_card_border">
            <PageTitle title="Category Table" />
            <Table>
              <thead>
                <tr>
                  <th>Category Name</th>
                  <th>Category Type</th>
                  <th>Category Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {AllCategory.map((items) => (
                  <tr>
                    <td>{items.blog_category_name}</td>
                    {/* <td>{items.blog_category_sub}</td> */}
                    <td>
                      {AllCategory?.find(
                        (i) => i.blog_category_id === items.blog_category_sub
                      )?.blog_category_name || "parent"}
                    </td>
                    <td>
                      {items.status == 1 ? (
                        <Badge bg="success">Active</Badge>
                      ) : (
                        <Badge bg="warning">InActive</Badge>
                      )}
                    </td>
                    <td>
                      <IconButton
                        onClick={() => edit_category(items.blog_category_id)}
                      >
                        <Edit htmlColor="green" />
                      </IconButton>
                      <IconButton
                        onClick={() => delete_category(items.blog_category_id)}
                      >
                        <Delete htmlColor="orangered" />
                      </IconButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            {/* PAGINATION SECTION */}
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
      </Container>
    </div>
  );
};

export default BlogCategoryManagement;
