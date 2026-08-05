import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({info, setPagenumber, pageNumber}) => {

  return (
    <ReactPaginate 
      forcePage={pageNumber===1? 0 : pageNumber - 1}
      className="pagination justify-content-center gap-4 my-4"
      nextLabel="Next"
      previousLabel="Prev"
      nextClassName="page-item"
      previousClassName="page-item"
      nextLinkClassName="btn btn-primary text-white"
      previousLinkClassName="btn btn-primary text-white"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      activeClassName="active"
      onPageChange={(data)=>{setPagenumber(data.selected + 1)}}
      pageCount={info?.pages}
    />
  )
}

export default Pagination