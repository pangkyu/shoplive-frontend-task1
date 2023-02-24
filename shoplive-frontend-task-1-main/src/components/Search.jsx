import { useState } from "react";
import queryString from "querystring";
import { Link, useSearchParams } from "react-router-dom";

const Search = (props) => {
  const [query, setQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    const parsed = queryString.parse(window.location.search);
    const newQueryString = queryString.stringify({ keyword: query });
    setSearchParams(newQueryString);

    let array = [];
    props.data.map((item) => {
      const matchItem = item.title.match(query);

      if (matchItem !== null) {
        if (item.title === matchItem.input) {
          array.push(item.id);
        }
      }
    });
    const fetchData = array.map((item) => {
      return JSON.parse(localStorage.getItem(item));
    });
    console.log(fetchData);
    props.setSearchItem(fetchData);
  };

  const ViewAllItems = async (e) => {
    e.preventDefault();
    props.setSearchItem();
  };

  return (
    <div className="searchBar">
      <div className="searchBar-all" onClick={ViewAllItems}>
        전체 글 보기
      </div>
      <input
        placeholder="검색"
        type="text"
        value={query}
        onChange={handleInputChange}
      />
      <button onClick={handleSearchSubmit}>검색</button>
      {/* <Link to="/keyword?" onClick={handleSearchSubmit}>
        검색
      </Link> */}
    </div>
  );
};
export default Search;
