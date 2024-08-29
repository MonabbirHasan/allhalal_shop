import React, { lazy, useEffect, useState } from "react";
import "./blogs.css";
const Header = lazy(() => import("../../components/common/header/Header"));
const Footer = lazy(() => import("../../components/common/footer/Footer"));
import Pagination from "../../../components/pagination/Pagination";
import CustomTitle from "../../components/custom_title/CustomTitle";
import { Search } from "@mui/icons-material";
import { Card, Carousel, CarouselItem, Button } from "ui-neumorphism";
import ApiClient from "../../../utils/apiClient/ApiClient";
import BlogCard from "../../components/blog_card/BlogCard";
import { Container, Form } from "react-bootstrap";
import { Button as MuiBTN, FormControl } from "@mui/material";

const Blogs = () => {
  const TOKEN = import.meta.env.VITE_API_ACCESS_KEY;
  const [AllPost, setAllPost] = useState([]);
  const [AllCategory, setAllCategory] = useState([]);

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
      const response = await ClientApi.read(`api/blog/blogs`, TOKEN);
      if (response.status == 200) {
        const simulatedData = response.data;
        const startIndex = (currentPage - 1) * itemsPerPage;
        const slicedData = simulatedData.slice(
          startIndex,
          startIndex + itemsPerPage
        );
        setAllPost(response.data);
        setTotalItems(simulatedData.length);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetch_post();
  }, []);
  return (
    <>
      <Header />
      <div className="blog_page">
        <Container>
          <div className="blog_wrapper">
            {/* blog_banner */}
            <div className="blog_banner">
              <Card style={{ padding: 10 }}>
                <Carousel showArrows showArrowsOnHover>
                  <CarouselItem>
                    <img
                      src="https://t3.ftcdn.net/jpg/04/42/44/98/360_F_442449827_ispo2oI83ffX0TSax4Pgdd7xkqCA5ThA.jpg"
                      alt=""
                    />
                    {/* <H3>Slide 1</H3> */}
                  </CarouselItem>
                  <CarouselItem style={{ background: "var(--error)" }}>
                    <img
                      src="https://t3.ftcdn.net/jpg/05/14/95/12/360_F_514951224_2dxMLbIw5qNRdPGD003chpbVcxWtcp7K.jpg"
                      alt=""
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      src="https://img.freepik.com/free-photo/world-smile-day-emojis-arrangement_23-2149024492.jpg"
                      alt=""
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      src="https://cdn.pixabay.com/photo/2024/03/26/05/28/ai-generated-8655959_1280.jpg"
                      alt=""
                    />
                  </CarouselItem>
                </Carousel>
              </Card>
            </div>
            {/*  blog_options*/}
            <div className="blog_options">
              <Card elevation={1} className="global_card_border">
                <div className="category">
                  <Form.Select className="global_input_shadow">
                    <option selected>category</option>
                    {AllCategory.map((item) => {
                      return (
                        <option value={item.blog_category_id}>
                          {item.blog_category_name}
                        </option>
                      );
                    })}
                  </Form.Select>
                </div>
                <div className="search">
                  <FormControl>
                    <Form.Control
                      type="text"
                      placeholder="Enter the topic name!"
                      className="global_input_shadow"
                    />
                    <MuiBTN
                      variant=""
                      className="mt-3 _cL4RU _17_OS  _3W7Om _CWiZp _EotAP border-0"
                      startIcon={<Search htmlColor="green" />}
                    >
                      search
                    </MuiBTN>
                  </FormControl>
                </div>
              </Card>
            </div>
            {/* blog_item_grid */}
            {AllCategory.map((category) => (
              <div key={category.blog_category_id}>
                <CustomTitle title={category.blog_category_name} />
                <section>
                  <div className="blog_item_grid">
                    {AllPost.filter(
                      (post) => post.blog_category == category.blog_category_id
                    ).map((post) => (
                      <BlogCard
                        key={post.blog_id}
                        post_id={post.blog_id}
                        thumbnail={`${
                          import.meta.env.VITE_API_IMAGE_URI
                        }/blog_img/${post.blog_thumbnail}`}
                        category={post.blog_category_name}
                        published={post.blog_publish?.split("T")[0]}
                        views={343} // Consider fetching actual view count if possible
                        title={post.blog_title}
                        details={post.blog_description.slice(0, 100)}
                        author_img={
                          post.role === "admin"
                            ? "A"
                            : post.role === "user"
                            ? "C"
                            : post.role === "vendor"
                            ? "V"
                            : post.role === "advertisor"
                            ? "AD"
                            : post.username
                        }
                        author_name={
                          post.role === "admin"
                            ? "admin"
                            : post.role === "user"
                            ? "customer"
                            : post.role === "vendor"
                            ? "vendor"
                            : post.role === "advertisor"
                            ? "advertisor"
                            : post.username
                        }
                      />
                    ))}
                  </div>
                </section>
              </div>
            ))}
            {/* news pagination */}
            <div className="blog_pagination">
              <Pagination />
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
