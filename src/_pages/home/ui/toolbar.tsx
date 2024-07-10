"use client";
import { NoteAddButton } from "@/src/featuers";
import SearchBar from "./searchbar";
import SortButton from "./sort-button";

export default function Toolbar() {
  return (
    <div className="container">
      <div className="row gx-3 align-items-start">
        <div className="col-xs-12 col-md-12 col-lg-4 d-flex justify-content-center ">
          <NoteAddButton />
        </div>
        <div className="col mt-3 mt-lg-0 d-flex flex-column justify-content-center align-items-center">
          <div className="w-100">
            <SearchBar />
          </div>

          <div className="w-100 mt-3 d-flex justify-content-center justify-content-md-end">
            <SortButton />
          </div>
        </div>
      </div>
    </div>
  );
}
