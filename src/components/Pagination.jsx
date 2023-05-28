import { useState, useEffect } from "react";

function Pagination({ numOfPages, currentPage, setCurrentPage }) {
  const [displayedPages, setDisplayedPages] = useState([]);

  const generatePageNumbers = () => {
    let pages = [];
    const totalPages = numOfPages;
    const maxDisplayedPages = 5; // Change this value to control the number of visible page links

    if (totalPages <= maxDisplayedPages) {
      pages = [...Array(totalPages).keys()].map((num) => num + 1);
    } else {
      const currentPageIndex = currentPage - 1;
      const halfDisplayedPages = Math.floor(maxDisplayedPages / 2);
      let startPage = currentPageIndex - halfDisplayedPages;
      let endPage = currentPageIndex + halfDisplayedPages;

      if (currentPageIndex < halfDisplayedPages) {
        endPage += halfDisplayedPages - currentPageIndex;
      } else if (totalPages - 1 - currentPageIndex < halfDisplayedPages) {
        startPage -= halfDisplayedPages - (totalPages - 1 - currentPageIndex);
      }

      pages = [...Array(maxDisplayedPages).keys()]
        .map((num) => num + startPage)
        .filter((num) => num > 0 && num <= totalPages);

      if (startPage > 1) {
        pages = [1, "...", ...pages];
      }
      if (endPage < totalPages) {
        pages = [...pages, "...", totalPages];
      }
    }

    setDisplayedPages(pages);
  };

  const nextPage = () => {
    if (currentPage < numOfPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    generatePageNumbers();
  }, [numOfPages, currentPage]);

  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex items-center -space-x-px">
        <li onClick={prevPage}>
          <a
            href="#"
            className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
          >
            <span className="sr-only">Previous</span>
            <span className="material-symbols-outlined w-5 h-5 text-md">
              navigate_before
            </span>
          </a>
        </li>
        {displayedPages.map((pgNum, index) => (
          <li key={index}>
            <a
              onClick={() => setCurrentPage(pgNum)}
              href="#"
              className={`px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${
                pgNum === currentPage ? "font-bold" : ""
              }`}
            >
              {pgNum}
            </a>
          </li>
        ))}
        <li>
          <a
            onClick={nextPage}
            href="#"
            className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
          >
            <span className="sr-only">Next</span>
            <span className="material-symbols-outlined text-md">
              navigate_next
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
