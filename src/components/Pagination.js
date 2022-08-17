import React from "react";
import { usePagination, DOTS } from "../hooks";

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    if (currentPage === lastPage) return;
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    if (currentPage === 1) return;
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <div className={`flex sm:flex-row flex-col justify-between ${className}`}>
      <div className="sm:text-left text-center sm:mb-0 mb-4">{`Showing ${
        1 + (currentPage - 1) * pageSize
      } to ${
        currentPage * pageSize > totalCount
          ? totalCount
          : currentPage * pageSize
      } of ${totalCount} entries`}</div>
      <ul className="flex list-style-none bg-white justify-center">
        <li
          className={
            "px-3 text-center cursor-pointer flex justify-center items-center hover:bg-forth transition " +
            (currentPage === 1 && "cursor-not-allowed opacity-50")
          }
          onClick={onPrevious}
        >
          Previous
        </li>
        {paginationRange.map((pageNumber, index) => {
          if (pageNumber === DOTS) {
            return <li className="px-1 text-center">&#8230;</li>;
          }

          return (
            <li
              className={
                "mx-1 text-xl h-10 w-8 text-center cursor-pointer flex justify-center items-center hover:bg-forth transition " +
                (pageNumber === currentPage && "bg-third")
              }
              onClick={() => onPageChange(pageNumber)}
              key={index}
            >
              {pageNumber}
            </li>
          );
        })}
        <li
          className={
            "px-3 text-center cursor-pointer flex justify-center items-center hover:bg-forth transition " +
            (currentPage === lastPage && "cursor-not-allowed opacity-50")
          }
          onClick={onNext}
        >
          Next
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
