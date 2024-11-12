import React, { useEffect, useState } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { json, useLocation } from "react-router-dom";

const ViewModule = () => {
  const axiosPrivate = useAxiosPrivate();
  const [module, setModule] = useState({
    code: "",
    title: "",
    gpa: true,
    lectureHours: 0,
    labHours: 0,
    credits: 0,
    evaluationCa: 0,
    objectives: "",
    learningOutcomes: [],
    syllabusOutlines: [],
  });
  const location = useLocation();
  const index = location.state.moduleCode;

  const getdata = async () => {
    const { data } = await axiosPrivate.get(
      "/module/getbycode/" + String(index)
    );
    // const data2 = Array.from(data);
    setModule(data);
    // console.log("/module/getbycode/" + String(index))
    console.log("asdf", data);
  };
  useEffect(() => {
    getdata();
  }, []);
  return (
    <div className="back">
      View Module
      <br />
      <br />
      <br />
      <div className="mb-3">
        <label htmlFor="code" className="form-label">
          Module code
        </label>
        <input
          //   onChange={(e) => setCode(e.target.value)}
          disabled
          value={module.code}
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
          //   onChange={(e) => setTitle(e.target.value)}
          disabled
          value={module.title}
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
          //   onChange={(e) => setGpa(e.target.value)}
          disabled
          value={module.gpa ? 0 : 1}
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
          //   onChange={(e) => setLectureHours(e.target.value)}
          disabled
          value={module.lectureHours}
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
          //   onChange={(e) => setLabHours(e.target.value)}
          disabled
          value={module.labHours}
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
          // onChange={(e) => setCredits(e.target.value)}
          disabled
          value={module.credits}
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
          // onChange={(e) => setEvaluationCa(e.target.value)}
          disabled
          value={module.evaluationCa}
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
          value={100 - module.evaluationCa}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="objectives" className="form-label">
          Module Objectives
        </label>
        <textarea
          // onChange={(e) => setObjectives(e.target.value)}
          disabled
          value={module.objectives}
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
        {module.learningOutcomes.map((data, i) => {
          return (
            <div key={i} className="mb-3">
              <label htmlFor={i} className="form-label">
                LO{i + 1}
              </label>
              <textarea
                value={data.learningOutcome}
                // onChange={(e) => handleLochange(e, i)}
                disabled
                className="form-control bg-transparent"
                id={i}
                rows="3"
              ></textarea>
              <br />
            </div>
          );
        })}
        <br />
      </div>
      <div>
        <label htmlFor="los" className="form-label">
          Syllabus Outlines
        </label>
        <br />
        {module.syllabusOutlines.map((data, i) => {
          return (
            <div key={i} className="mb-3">
              <label htmlFor="a" className="form-label">
                Syllabus Outline 1
              </label>
              <textarea
                value={data.syllabusOutline}
                // onChange={(e) => handleSoValuechange(e, i)}
                disabled
                className="form-control bg-transparent"
                id="a"
                rows="3"
              ></textarea>
              <label htmlFor="a" className="form-label">
                description
              </label>
              <textarea
                value={data.description}
                // onChange={(e) => handleSoDescriptionchange(e, i)}
                disabled
                className="form-control bg-transparent"
                id="a"
                rows="3"
              ></textarea>
              <label htmlFor="hours" className="form-label">
                Hours
              </label>
              <input
                value={data.hours}
                // onChange={(e) => handleSoHourschange(e, i)}
                disabled
                type="number"
                className="form-control bg-transparent"
                id="hours"
              />
              <br />
            </div>
          );
        })}
        <br />
      </div>
    </div>
  );
};

export default ViewModule;
