import React, { useEffect, useState } from "react";
import "./blog_category_management.css";
import { Container, Form, Table } from "react-bootstrap";
import { Button, Card, IconButton } from "ui-neumorphism";
import PageTitle from "../../components/PageTitle";
import { Delete, Edit } from "@mui/icons-material";
import { FormControl } from "@mui/material";
const BlogCategoryManagement = () => {
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
                placeholder="Enter Blog Title!"
              />
            </FormControl>
            {/* BLOG CATEGORY SUB NAME */}
            <FormControl fullWidth sx={{ pt: 3 }}>
              <Form.Label>Sub Category</Form.Label>
              <Form.Select className="global_input_shadow">
                <option value="">welcome</option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </Form.Select>
            </FormControl>
            {/* BLOG CATEGORY STATUS */}
            <FormControl fullWidth sx={{ pt: 3 }}>
              <Form.Label>Category Status</Form.Label>
              <Form.Select className="global_input_shadow">
                <option value="">Status</option>
                <option value={1}>Active</option>
                <option value={0}>InActive</option>
              </Form.Select>
            </FormControl>
            {/* SAVE BUTTON */}
            <FormControl sx={{ mt: 3 }}>
              <Button depressed={true}>save category</Button>
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
                  <th>Title</th>
                  <th>Thumbnail</th>
                  <th>Tags</th>
                  <th>Description</th>
                  <th>Category</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <IconButton>
                      <Edit />
                    </IconButton>
                    <IconButton>
                      <Delete />
                    </IconButton>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default BlogCategoryManagement;
