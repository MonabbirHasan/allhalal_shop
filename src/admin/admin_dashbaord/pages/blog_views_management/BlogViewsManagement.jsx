import React, { useContext, useEffect, useState } from "react";
import "./blog_views_management.css";
import { Container, Pagination, Table } from "react-bootstrap";
import PageTitle from "../../components/PageTitle";
import { Card, Chip, IconButton } from "ui-neumorphism";
import {
  ArrowCircleLeftRounded,
  ArrowCircleRightRounded,
  Delete,
  Edit,
} from "@mui/icons-material";
import ApiClient from "../../../../utils/apiClient/ApiClient";
const BlogViewsManagement = () => {
  const [AllViews, setAllViews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [totalItems, setTotalItems] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  /////////////////////////////////
  // INITIALIZE CLIENT API ROOT
  /////////////////////////////////
  const ClientApi = new ApiClient(import.meta.env.VITE_API_ROOT_URI);
  //////////////////////
  // GET ALL CATEGORY
  //////////////////////
  const blog_views = async () => {
    try {
      setIsLoading(true);
      const response = await ClientApi.read(
        `api/blog/views`,
        import.meta.env.VITE_API_ACCESS_KEY
      );
      if (response.status === 200) {
        setIsLoading(false);
        const simulatedData = response.data;
        const startIndex = (currentPage - 1) * itemsPerPage;
        const slicedData = simulatedData.slice(
          startIndex,
          startIndex + itemsPerPage
        );
        setAllViews(slicedData);
        setTotalItems(simulatedData.length);
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    blog_views();
  }, []);
  /*********************************
   * DATA PAGINATION
   *********************************/
  const handlePageChange = (page) => {
    setCurrentPage(page);
    blog_views();
  };
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  return (
    <div className="blog_views_management">
      <Container>
        <div className="blog_views_management_table">
          <Card className="global_card_border">
            <PageTitle title="post views Table" />
            <Table>
              <thead>
                <tr>
                  <th>views</th>
                  <th>post</th>
                  <th>user</th>
                  <th>status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {AllViews.map((items) => (
                  <tr>
                    <td>{items.blog_view_count}</td>
                    <td>{items.blog_view_post_id}</td>
                    <td>{items.blog_view_user_id}</td>
                    <td>{items.status == 1 ? "Active" : "InActive"}</td>
                    <td>
                      <IconButton>
                        <Delete />
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
      </Container>
    </div>
  );
};

export default BlogViewsManagement;
