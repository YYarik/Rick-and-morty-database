import React, {useState, useEffect} from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({info, setPagenumber, pageNumber}) => {

  let [width, setWidth] = useState(window.innerWidth);
  let updateDimension=()=>{
    setWidth(window.innerWidth);
  };
  useEffect(()=>{
    window.addEventListener("resize", updateDimension);
    return () => window.remove("resize", updateDimension);
  },[]);
  return (
    <>
    <style jsx>
      {`
      @media (max-width: 768px){
        .next, .prev{
          display: none;
        }
        .pagination{
        font-size: 14px;
        }
      }
      `}
    </style>
    <ReactPaginate 
      forcePage={pageNumber===1? 0 : pageNumber - 1}
      className="pagination justify-content-center gap-4 my-4"
      nextLabel="Next"
      previousLabel="Prev"
      nextClassName="page-item next"
      previousClassName="page-item prev"
      nextLinkClassName="btn btn-primary text-white"
      previousLinkClassName="btn btn-primary text-white"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      activeClassName="active"
      onPageChange={(data)=>{setPagenumber(data.selected + 1)}}
      pageCount={info?.pages}
      marginPagesDisplayed={width < 576 ? 1 : 2}
      pageRangeDisplay={width < 576 ? 1 : 2}
    />
    </>
  )
}

export default Pagination