import exp from "constants";
import SearchBar from "./searchbar";

export default function Toolbar() {
  return (
    <div className="container">
      <div className="row gx-3 align-items-start">
        <div className="col-xs-12 col-md-12 col-lg-4 d-flex justify-content-center ">
          <div className="w-100 mx-0 mx-lg-3 btn btn-primary d-flex justify-content-center">
            <i className="bi bi-plus"></i> Add Note
          </div>
        </div>
        <div className="col mt-3 mt-lg-0 d-flex flex-column justify-content-center align-items-center">
          <div className="w-100">
            <SearchBar />
          </div>

          <div className="w-100 mt-3 d-flex justify-content-center justify-content-md-end">
            <div>Sorting placeholder</div>
          </div>
        </div>
      </div>
    </div>
  );
}
