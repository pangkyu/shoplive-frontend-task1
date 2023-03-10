import { useState } from "react";
import queryString from "querystring";
import { useSearchParams } from "react-router-dom";

const Search = (props) => {
  const [query, setQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearchSubmit(e);
    }
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

    props.setSearchItem(fetchData);
  };

  const ViewAllItems = async (e) => {
    e.preventDefault();
    props.setSearchItem(props.data);
    setSearchParams("");
  };

  return (
    <div className="searchBar">
      <div className="searchBar-all" onClick={ViewAllItems}>
        전체 글 보기
      </div>
      <input
        placeholder="검색"
        type="text"
        onChange={handleInputChange}
        onKeyPress={handleOnKeyPress}
      />
      <button onClick={handleSearchSubmit}>검색</button>
    </div>
  );
};
export default Search;
