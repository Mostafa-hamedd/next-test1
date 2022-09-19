import { useEffect, useState } from "react";
import ReactPaginate from 'react-paginate';


const paginationPage = () => {
  const [page,setPage]=useState(1)
  const [data, setData] = useState([])

  const fetchHandler = async (pages) => {
    await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=9f88bf74a43bfc37f66724aa8369bbe1&page=${pages}`)
      .then((res) => res.json())
      .then((data) =>    
      setData(data),
  )};

  useEffect(() => {
    fetchHandler(page);
  }, [page]);

  const handlePage = (e) => {
    setPage(e.selected+1)
  } 
  // const handlePage = (e) => {
  //   setPage(e.selected+1)
  // }
  return (
    <>
    <div className="data">
      <ul className="data-list">
        {data?.results?.map((data,index)=>(
        <li className="data-item"  key={index}>
          {data.id}
        </li>
        ))}
        {data.page}
      </ul>
    </div>
    {/* {arr.map((number,index)=>(
      <div onClick={()=>{setPage(number)}}>
        {number}
      </div>
    ))} */} 
    <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePage}
        pageRangeDisplayed={5}
        pageCount={500}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    {/* <div className="pagination">
      <div className="btn-next" onClick={()=>{setPage(++page)}}>next</div>
      {data?.results?.map((item, index) => ( 
          index!=0&& 
          <button
            key={index}
            className={`${index === page ? 'active-btn' : null}`}
            onClick={() => handlePage(index)}
          >
            {index }
          </button>
        
      ))}
      <div className="btn-back" onClick={()=>{setPage(--page)}}>back</div>
    </div> */}
    </>
  );
}

export default paginationPage;