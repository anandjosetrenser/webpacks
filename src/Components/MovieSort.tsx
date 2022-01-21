import { useState } from "react";
export default function MovieSort() {
  const [showContent, setShowContent] = useState<boolean>(true);
  return (
    <div className="sideNav">
      <div className="head itemGroup">
        Sort
        <span
          className={"toggleArrow" + (showContent === true ? " active" : "")}
          onClick={() => {
            setShowContent(() => {
              return !showContent;
            });
          }}
        ></span>
      </div>

      <div
        className={
          "itemGroup item-det" + (showContent === true ? "" : " hidden")
        }
      >
        <div className="nav-contents" style={{ width: "100%" }}>
          <label>Sort Results By</label>
          <div>
            <select className="form-control sort-select">
              <option>Popuplar ASC</option>
              <option>Popuplar DESC</option>
              <option>Rating ASC</option>
              <option>Rating DESC</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
