import React, { useEffect, useState } from "react";

const AddModule = () => {
  const [code, setCode] = useState("");
  const [title, setTitle] = useState("");
  const [isgpa, setGpa] = useState("0");
  const [lectureHours, setLectureHours] = useState(0);
  const [labHours, setLabHours] = useState(0);
  const [credits, setCredits] = useState(0);
  const [evaluationCa, setEvaluationCa] = useState(0);
  const [objectives, setObjectives] = useState("");
  const [los, setLos] = useState([]);
  const [SyllabusOutlines, setSyllabusOutlines] = useState([]);

  const AddLo = () => {
    const newLos = [...los, { learningOutcome: "" }];
    setLos(newLos);
  };
  const handleLochange = (changedVAlue, i) => {
    const inputData = [...los];
    inputData[i].learningOutcome = changedVAlue.target.value;
    setLos(inputData);
  };
  const removeLo = (i) => {
    const deleteLo = [...los];
    deleteLo.splice(i, 1);
    setLos(deleteLo);
  };
  const AddSo = () => {
    const newSyllabusOutlines = [
      ...SyllabusOutlines,
      { syllabusOutline: "", description: "", hours: 0 },
    ];
    setSyllabusOutlines(newSyllabusOutlines);
  };
  const removeSo = (i) => {
    const deleteSo = [...SyllabusOutlines];
    deleteSo.splice(i, 1);
    setSyllabusOutlines(deleteSo);
  };
  const handleSoValuechange = (changedVAlue, i) => {
    const inputData = [...SyllabusOutlines];
    inputData[i].syllabusOutline = changedVAlue.target.value;
    setSyllabusOutlines(inputData);
  };
  const handleSoDescriptionchange = (changedVAlue, i) => {
    const inputData = [...SyllabusOutlines];
    inputData[i].description = changedVAlue.target.value;
    setSyllabusOutlines(inputData);
  };
  const handleSoHourschange = (changedVAlue, i) => {
    const inputData = [...SyllabusOutlines];
    inputData[i].hours = changedVAlue.target.value;
    setSyllabusOutlines(inputData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var gpa = isgpa === "0";
    var learningOutcomes = los;
    var syllabusOutlines = SyllabusOutlines;
    const module = {
      code,
      title,
      gpa,
      lectureHours,
      labHours,
      credits,
      evaluationCa,
      objectives,
      learningOutcomes,
      syllabusOutlines,
    };
    console.log(JSON.stringify(module));
  };
  // console.log(JSON.stringify(SyllabusOutlines));
  // useEffect(() => {
  // console.log (isgpa==="0")

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
          value={100 - evaluationCa}
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
      <div>
        <label htmlFor="los" className="form-label">
          Learning outcomes
        </label>
        <br />
        {los.map((data, i) => {
          return (
            <div key={i} className="mb-3">
              <label htmlFor={i} className="form-label">
                LO{i + 1}
              </label>
              <textarea
                value={data.learningOutcome}
                onChange={(e) => handleLochange(e, i)}
                className="form-control bg-transparent"
                id={i}
                rows="3"
              ></textarea>
              <br />
              <button
                onClick={() => removeLo(i)}
                type="button"
                className="btn btn-outline-danger"
              >
                remove
              </button>
            </div>
          );
        })}
        <br />
        <button
          type="button"
          className="btn btn-outline-dark"
          onClick={() => AddLo()}
        >
          + add
        </button>
      </div>
      <br />
      <div>
        <label htmlFor="los" className="form-label">
          Syllabus Outlines
        </label>
        <br />
        {SyllabusOutlines.map((data, i) => {
          return (
            <div key={i} className="mb-3">
              <label htmlFor="a" className="form-label">
                Syllabus Outline 1
              </label>
              <textarea
                value={data.syllabusOutline}
                onChange={(e) => handleSoValuechange(e, i)}
                className="form-control bg-transparent"
                id="a"
                rows="3"
              ></textarea>
              <label htmlFor="a" className="form-label">
                description
              </label>
              <textarea
                value={data.description}
                onChange={(e) => handleSoDescriptionchange(e, i)}
                className="form-control bg-transparent"
                id="a"
                rows="3"
              ></textarea>
              <label htmlFor="hours" className="form-label">
                Hours
              </label>
              <input
                value={data.hours}
                onChange={(e) => handleSoHourschange(e, i)}
                type="number"
                className="form-control bg-transparent"
                id="hours"
              />
              <br />
              <button
                onClick={() => removeSo(i)}
                type="button"
                className="btn btn-outline-danger"
              >
                remove
              </button>
            </div>
          );
        })}
        <br />
        <button
          type="button"
          className="btn btn-outline-dark"
          onClick={() => AddSo()}
        >
          + add
        </button>
      </div>
      <br />
      <br />
      <br />
      <button
        type="button"
        className="btn btn-outline-dark"
        onClick={(e) => handleSubmit(e)}
      >
        Submit
      </button>
    </div>
  );
};

export default AddModule;
