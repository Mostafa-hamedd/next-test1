import { useEffect, useState } from "react";


const paginationPage = () => {
  const [page,setPage]=useState(1)
  const [data, setData] = useState([])
  const fetchHandler = async (pages) => {
    await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=9f88bf74a43bfc37f66724aa8369bbe1&page=${pages}`)
      .then((res) => res.json())
      .then((data) => setData(data.results));
  };
  useEffect(() => {
    fetchHandler(page);
  }, [page]);
  console.log(data[0]?.id);
  const arr=[1,2,3,4,5,6]
  return (
    <>
    {data.map((data,index)=>(

    <div key={index}>
      {data.id}
    </div>
    ))}
    {arr.map((no,index)=>(
      <div onClick={()=>{setPage(no)}}>
        {no}
      </div>
    ))}
    <div onClick={()=>{setPage(++page)}}>next</div>
    <div onClick={()=>{setPage(--page)}}>back</div>
    </>
  );
}

export default paginationPage;