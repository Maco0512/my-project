import React, { useState, useEffect, useMemo } from "react";

export default function Pagination(props) {
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    console.log(props.total);
    if (props.total > 0 && props.itemsPerPage > 0)
      setTotalPages(Math.ceil(props.total / props.itemsPerPage));

    // return () => {
    //   cleanup;
    // };
  }, [props.total, props.itemsPerPage]);

  const paginationItems = useMemo(() => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      let css = "pagination-link ";
      if (i === props.currentPage) css = "pagination-link is-current";
      pages.push(
        <div key={"page" + i}>
          <a
            className={css}
            aria-label={"Page " + i}
            aria-current="page"
            onClick={() => props.onPageChange(i)}
          >
            {i}
          </a>
        </div>
      );
    }
    return pages;
  }, [totalPages, props.currentPage]);

  if (totalPages === 0) return null;

  return (
    <nav
      className="pagination is-rounded"
      role="navigation"
      aria-label="pagination"
    >
      <a
        className="pagination-previous"
        title="This is the first page"
        onClick={() => props.onPageChange(props.currentPage - 1)}
        disabled={props.currentPage === 1}
      >
        Previous
      </a>
      <ul className="pagination-list">{paginationItems}</ul>
      <a
        className="pagination-next"
        onClick={() => props.onPageChange(props.currentPage + 1)}
        disabled={props.currentPage === totalPages}
      >
        Next page
      </a>
    </nav>
  );
}
