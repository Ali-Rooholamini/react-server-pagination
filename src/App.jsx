import useFetch from "./hooks/useFetch";
import Card from "./components/card";
import { useState } from "react";
import Pagination from "./components/pagination";

const url = "https://react-mini-projects-api.classbon.com/Programmer/sieve";
const pageSize = 3;

function App() {
  const [page, setPage] = useState(1);
  const [programmers, isLoading] = useFetch(url, {
    page,
    pageSize,
  });

  // console.log(programmers);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="w-100 d-flex justify-content-center align-items-center">
          {isLoading && (
            <div className="spinner-border text-primary">
              <span className="sr-only"></span>
            </div>
          )}

          {!isLoading &&
            programmers.data.map((programmer) => {
              return (
                <div className="col-3 mx-3" key={programmer.id}>
                  <Card {...programmer} />
                </div>
              );
            })}
        </div>
      </div>
      <div className="row mt-5">
        <Pagination
          pagesLenght={Math.ceil(programmers.totalRecords / pageSize)}
          setPage={setPage}
          activePage={page}
        />
      </div>
    </div>
  );
}

export default App;
