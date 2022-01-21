import React, { useContext, useEffect, useState } from "react";
import ENV from "../Service/enviornmrnt";
import { MovieFilterContext } from "../hooks/MovieFilter";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import CategoryTags from "./CategoryTags";

export default function MovieFilter() {
  const movieFilterFromParent = useContext(MovieFilterContext);
  const [loading, setLoading] = useState<number>(1);
  const [configGere, setconfigGere] = useState<[]>([]);
  const [configLanguage, setconfigLanguage] = useState<[]>([]);
  const [configCountry, setconfigCountry] = useState<[]>([]);
  const [showContent, setShowContent] = useState<boolean>(true);

  function getLaguageList() {
    return axios.get(
      `${ENV.MOVIE_API_URL}3/configuration/languages?api_key=f4250dcf013b1608d4ab3e8a5ee483c2`
    );
  }

  function getGenereList() {
    return axios.get(
      `${ENV.MOVIE_API_URL}3/genre/movie/list?api_key=f4250dcf013b1608d4ab3e8a5ee483c2`
    );
  }

  function getCountryList() {
    return axios.get(
      `${ENV.MOVIE_API_URL}3/configuration/countries?api_key=f4250dcf013b1608d4ab3e8a5ee483c2`
    );
  }

  function handleTagClick(
    type: string,
    itemId: number | string,
    itemList: string[]
  ) {
    const itemExist = itemList.find((val) => val === itemId);
    var filterState;
    if (itemExist !== undefined) {
      filterState = {
        ...movieFilterFromParent.filterState,
        [type]: [...itemList].filter((val) => {
          return val !== itemId;
        }),
      };
    } else {
      filterState = {
        ...movieFilterFromParent.filterState,
        [type]: [...itemList, itemId],
      };
    }
    movieFilterFromParent.setFilterState(filterState);
  }

  const handleKeyWordSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    movieFilterFromParent.setFilterState({
      ...movieFilterFromParent.filterState,
      searchKeyword: e.target.value,
    });
  };

  useEffect(() => {
    setLoading(1);
    Promise.all([getLaguageList(), getGenereList(), getCountryList()]).then(
      function (results) {
        setconfigGere(results[1].data.genres);
        setconfigLanguage(results[0].data);
        setconfigCountry(results[2].data);
        setLoading(0);
      }
    );
    return () => {};
  }, []);
  if (loading === 1) {
    return <h4>Loading...</h4>;
  }
  return (
    <div className="sideNav filters">
      <div className="head itemGroup">
        Filters
        <span
          className={"toggleArrow " + (showContent === true ? " active" : "")}
          onClick={() => {
            setShowContent(() => {
              return !showContent;
            });
          }}
        ></span>
      </div>
      <div className={showContent === true ? "" : "hidden"}>
        <div className={"itemGroup item-det"}>
          <div className="nav-contents" style={{ width: "100%" }}>
            <label>Show Me</label>
            <div>
              <div className="radio-btn">
                <input
                  disabled
                  checked={
                    movieFilterFromParent.filterState.movieWatched === "0"
                  }
                  name="watchFilter"
                  type="radio"
                  value="0"
                  onChange={(e) => {
                    var filterObj = {
                      ...movieFilterFromParent.filterState,
                      movieWatched: e.target.value,
                    };
                    movieFilterFromParent.setFilterState(filterObj);
                  }}
                />{" "}
                Everything
              </div>
              <div className="radio-btn">
                <input
                  disabled
                  checked={
                    movieFilterFromParent.filterState.movieWatched === "1"
                  }
                  name="watchFilter"
                  type="radio"
                  value="1"
                  onChange={(e) => {
                    var filterObj = {
                      ...movieFilterFromParent.filterState,
                      movieWatched: e.target.value,
                    };
                    movieFilterFromParent.setFilterState(filterObj);
                  }}
                />{" "}
                Movies I Haven't Seen
              </div>
              <div className="radio-btn">
                <input
                  disabled
                  checked={
                    movieFilterFromParent.filterState.movieWatched === "2"
                  }
                  name="watchFilter"
                  type="radio"
                  value="2"
                  onChange={(e) => {
                    var filterObj = {
                      ...movieFilterFromParent.filterState,
                      movieWatched: e.target.value,
                    };
                    movieFilterFromParent.setFilterState(filterObj);
                  }}
                />{" "}
                Movies I Have Seen
              </div>
            </div>
          </div>
        </div>

        <div className="itemGroup item-det">
          <div className="nav-contents" style={{ width: "100%" }}>
            <label>Availabilities</label>
            <div>
              <div className="check-box">
                <input
                  disabled
                  type="checkbox"
                  className="form-ontrol"
                  checked={
                    movieFilterFromParent.filterState.availabilities === true
                  }
                  onChange={(e) => {
                    var filterObj = {
                      ...movieFilterFromParent.filterState,
                      availabilities:
                        !movieFilterFromParent.filterState.availabilities,
                    };
                    movieFilterFromParent.setFilterState(filterObj);
                  }}
                />{" "}
                Search all availabilities?
              </div>

              {movieFilterFromParent.filterState.availabilities === false ? (
                <>
                  <div className="check-box">
                    <input type="checkbox" /> Stream
                  </div>
                  <div className="check-box">
                    <input type="checkbox" /> Free
                  </div>
                  <div className="check-box">
                    <input type="checkbox" /> Adds
                  </div>
                  <div className="check-box">
                    <input type="checkbox" /> Rent
                  </div>
                  <div className="check-box">
                    <input type="checkbox" /> Buy
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>

        <div className="itemGroup item-det">
          <div className="nav-contents" style={{ width: "100%" }}>
            <label>Release Dates</label>
            <div className="form-i">
              <div className="check-box">
                <input
                  disabled
                  type="checkbox"
                  checked={
                    movieFilterFromParent.filterState.searchAllRelease === true
                  }
                  onChange={(e) => {
                    var filterObj = {
                      ...movieFilterFromParent.filterState,
                      searchAllRelease:
                        !movieFilterFromParent.filterState.searchAllRelease,
                    };
                    movieFilterFromParent.setFilterState(filterObj);
                  }}
                />{" "}
                Search all releases?
                {movieFilterFromParent.filterState.searchAllRelease ===
                false ? (
                  <>
                    <div className="check-box">
                      <input type="checkbox" /> Search All Countries
                    </div>
                    <div className="check-box">
                      <input type="checkbox" /> Premiere
                    </div>
                    <div className="check-box">
                      <input type="checkbox" /> Theatrical (limited)
                    </div>
                    <div className="check-box">
                      <input type="checkbox" /> Theatrical
                    </div>
                    <div className="check-box">
                      <input type="checkbox" /> Digital
                    </div>
                    <div className="check-box">
                      <input type="checkbox" /> Physical
                    </div>
                    <div className="check-box">
                      <input type="checkbox" /> TV
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
              <div style={{ marginTop: "8px" }}>
                <span className="itemLabel dispBlk">from</span>
                <DatePicker
                  dateFormat="d/M/Y"
                  wrapperClassName="datePicker"
                  className="dispBlk form-control"
                  selected={movieFilterFromParent.filterState.releaseFromDate}
                  onChange={(date) => {
                    var filterObj = {
                      ...movieFilterFromParent.filterState,
                      releaseFromDate: date,
                    };
                    movieFilterFromParent.setFilterState(filterObj);
                  }}
                />
              </div>

              <div style={{ marginTop: "8px" }}>
                <span className="itemLabel dispBlk">to</span>
                <DatePicker
                  dateFormat="d/M/Y"
                  wrapperClassName="datePicker"
                  className="dispBlk form-control"
                  selected={movieFilterFromParent.filterState.releaseToDate}
                  onChange={(date) => {
                    var filterObj = {
                      ...movieFilterFromParent.filterState,
                      releaseToDate: date,
                    };
                    movieFilterFromParent.setFilterState(filterObj);
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="itemGroup item-det">
          <div className="nav-contents" style={{ width: "100%" }}>
            <label>Genres</label>
            <CategoryTags
              handleTagClick={handleTagClick}
              Items={configGere}
              catType={"genres"}
              selectedItems={movieFilterFromParent.filterState.genres}
            />
          </div>
        </div>

        <div className="itemGroup item-det">
          <div className="nav-contents" style={{ width: "100%" }}>
            <label>Certification</label>
            <div>
              <CategoryTags
                handleTagClick={handleTagClick}
                Items={ENV.movieCertifications}
                catType={"movieCentification"}
                selectedItems={
                  movieFilterFromParent.filterState.movieCentification
                }
              />
            </div>
          </div>
        </div>

        <div className="itemGroup item-det">
          <div className="nav-contents" style={{ width: "100%" }}>
            <label>Language</label>
            <div>
              <select
                className="form-control sort-select"
                onChange={(e) => {
                  var filterObj = {
                    ...movieFilterFromParent.filterState,
                    movieLanguage: e.target.value,
                  };
                  movieFilterFromParent.setFilterState(filterObj);
                }}
              >
                <option value="">--Select--</option>
                {configLanguage.map((lang: any) => (
                  <option key={lang.iso_639_1} value={lang.iso_639_1}>
                    {lang.english_name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="itemGroup item-det">
          <div className="nav-contents" style={{ width: "100%" }}>
            <label>Keywords</label>
            <div>
              <input
                type="text"
                onChange={(e) => handleKeyWordSearch(e)}
                className="form-control"
                placeholder="Filter by keywords..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
