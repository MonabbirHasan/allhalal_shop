import React from "react";
import "./blog_views.css";
import { Container, Table } from "react-bootstrap";
import PageTitle from "../../../../components/page_title/PageTitle";
import { Link } from "react-router-dom";
import { Delete, Edit, LinkSharp } from "@mui/icons-material";
import { IconButton, Stack } from "@mui/material";
const BlogViews = () => {
  return (
    <div className="user_blog_views">
      <Container>
        <div className="user_blog_views_wrapper">
          <div className="blog_view_table form_table_shadow">
            <PageTitle
              title={"blogs views"}
              style={{
                padding: 3,
                textTransform: "capitalize",
                fontSize: "2rem",
                color: "#232",
                fontFamily: "fantasy",
                letterSpacing: 1,
              }}
            />
            <Table>
              <thead>
                <tr>
                  <th align="center">user</th>
                  <th align="center">views</th>
                  <th align="center">date</th>
                  <th align="center">post</th>
                  <th align="center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 10 }).map((i) => (
                  <tr>
                    <td align="center">jhone doe</td>
                    <td align="center">34k</td>
                    <td align="center">20/03/2023</td>
                    <td align="center">
                      <LinkSharp />
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

export default BlogViews;
