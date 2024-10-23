import React from "react";

const AddModule = () => {
  return (
    <div className="back">
      Add Module
      <br />
      <br />
      <br />
      <div className="mb-3">
        <label htmlFor="code" className="form-label">
          Module code
        </label>
        <input type="text" className="form-control bg-transparent" id="code" />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Module title
        </label>
        <input type="text" className="form-control bg-transparent" id="title" />
      </div>
      <div className="mb-3">
        <label htmlFor="isgpa" className="form-label">
          GPA/NGPA
        </label>
        <br />
        <select name="isgpa" id="isgpa">
          <option value="1">GPA</option>
          <option value="2">NGPA</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="lecHours" className="form-label">
          Lecture Hours per week
        </label>
        <input
          type="number"
          className="form-control bg-transparent"
          id="lecHours"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="labHours" className="form-label">
          Lab/Tutorial Hours per week
        </label>
        <input
          type="number"
          className="form-control bg-transparent"
          id="labHours"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="credits" className="form-label">
          Credits
        </label>
        <input
          type="number"
          className="form-control bg-transparent"
          id="credits"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="credits" className="form-label">
          pre-requisites
        </label>
        <input
          type="number"
          className="form-control bg-transparent"
          id="credits"
        />
      </div>
      <label className="form-label">Evaluation</label>
      <div className="input-group ">
        <span className="input-group-text bg-transparent">CA</span>
        <input
          type="number"
          aria-label="CA"
          className="form-control bg-transparent"
        />
        <span className="input-group-text bg-transparent">WE</span>
        <input
          type="number"
          aria-label="WE"
          className="form-control bg-transparent"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="objectives" className="form-label">
          Module Objectives
        </label>
        <textarea
          className="form-control bg-transparent"
          id="objectives"
          rows="3"
        ></textarea>
      </div>
    </div>
  );
};

export default AddModule;
