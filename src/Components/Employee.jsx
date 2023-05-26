import React from "react";
import Nav from "./Nav";

const Employee = () => {
  return (
    <div>
      <Nav />
      <h1>Add Employee</h1>

      <div className="container">
        <div className="row p-4">
          <div className="col-md-12">
            <form>
              <div className="form-group pb-4">
                <label htmlFor="name">Employee Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="naem"
                  placeholder="Enter Name"
                />
              </div>
              <div className="form-group pb-4">
                <label htmlFor="Designation">Employee Designation</label>
                <input
                  type="text"
                  className="form-control"
                  id="Designation"
                  placeholder="Enter Designation"
                />
              </div>
              <div className="form-group pb-4">
                <label htmlFor="Location">Employee Location</label>
                <input
                  type="text"
                  className="form-control"
                  id="Location"
                  placeholder="Enter Location"
                />
              </div>
              <div className="form-group">
                <label htmlFor="Salary">Employee Salary</label>
                <input
                  type="text"
                  className="form-control"
                  id="Salary"
                  placeholder="Enter Salary"
                />
              </div>
              <div className="form-group mt-4">
                <button className="btn btn-danger">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employee;
