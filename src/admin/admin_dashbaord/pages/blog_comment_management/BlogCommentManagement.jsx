import React from "react";
import { Container, Table } from "react-bootstrap";
import PageTitle from "../../components/PageTitle";
import { Card, IconButton } from "ui-neumorphism";
import { Delete, Edit } from "@mui/icons-material";
import "./blog_comment_management.css";
const BlogCommentManagement = () => {
  return (
    <div className="blog_comment_management">
      <Container>
        <div className="blog_comment_management_table">
          <Card className="global_card_border">
            <PageTitle title="post comment Table" />
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

export default BlogCommentManagement;
