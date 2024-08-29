import React from "react";
import { Card } from "ui-neumorphism";
import "./pagination.css"
import { Pagination as BootstrapPagination } from "react-bootstrap";
const Pagination = () => {
  return (
    <Card className="pagination_component">
      <BootstrapPagination>
        <BootstrapPagination.First />
        <BootstrapPagination.Prev />
        <BootstrapPagination.Item>{1}</BootstrapPagination.Item>
        <BootstrapPagination.Ellipsis />

        <BootstrapPagination.Item>{10}</BootstrapPagination.Item>
        <BootstrapPagination.Item>{11}</BootstrapPagination.Item>
        <BootstrapPagination.Item active>{12}</BootstrapPagination.Item>
        <BootstrapPagination.Item>{13}</BootstrapPagination.Item>
        <BootstrapPagination.Item disabled>{14}</BootstrapPagination.Item>

        <BootstrapPagination.Ellipsis />
        <BootstrapPagination.Item>{20}</BootstrapPagination.Item>
        <BootstrapPagination.Next />
        <BootstrapPagination.Last />
      </BootstrapPagination>
    </Card>
  );
};

export default Pagination;
