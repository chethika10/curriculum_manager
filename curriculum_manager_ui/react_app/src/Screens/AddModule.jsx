import React, { useEffect, useState } from "react";

const AddModule = () => {
  const [code, setCode] = useState("");
  const [title, setTitle] = useState("");
  const [isgpa, setGpa] = useState(0);
  const [lectureHours, setLectureHours] = useState(0);
  const [labHours, setLabHours] = useState(0);
  const [credits, setCredits] = useState(0);
  const [EvaluationCa, setEvaluationCa] = useState(0);
  const [objectives, setObjectives] = useState("");

  // useEffect(() => {
  //   console.log (isgpa)

  // }, [isgpa])

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
        <input
          onChange={(e) => setCode(e.target.value)}
          type="text"
          className="form-control bg-transparent"
          id="code"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Module title
        </label>
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="form-control bg-transparent"
          id="title"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="isgpa" className="form-label">
          GPA/NGPA
        </label>
        <br />
        <select
          onChange={(e) => setGpa(e.target.value)}
          name="isgpa"
          id="isgpa"
        >
          <option value="0">GPA</option>
          <option value="1">NGPA</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="lecHours" className="form-label">
          Lecture Hours per week
        </label>
        <input
          onChange={(e) => setLectureHours(e.target.value)}
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
          onChange={(e) => setLabHours(e.target.value)}
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
          onChange={(e) => setCredits(e.target.value)}
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
          onChange={(e) => setEvaluationCa(e.target.value)}
          type="number"
          aria-label="CA"
          className="form-control bg-transparent"
        />
        <span className="input-group-text bg-transparent">WE</span>
        <input
          type="number"
          aria-label="WE"
          className="form-control bg-transparent"
          disabled
          value={100 - EvaluationCa}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="objectives" className="form-label">
          Module Objectives
        </label>
        <textarea
          onChange={(e) => setObjectives(e.target.value)}
          className="form-control bg-transparent"
          id="objectives"
          rows="3"
        ></textarea>
      </div>
    </div>
  );
};

export default AddModule;
