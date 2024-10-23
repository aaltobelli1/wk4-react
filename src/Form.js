import React from "react";
import Form from "./Form.css";
export default function Form() {
  return (
    <div className="Form">
      <header>
        <Form class="searchForm">
          ;
          <input
            type="search"
            placeholder="Type a city"
            class=" form-control"
            id="city-input"
          />
          <input type="submit" value="Search" class="btn btn-primary w-100" />
        </Form>
      </header>
    </div>
  );
}
