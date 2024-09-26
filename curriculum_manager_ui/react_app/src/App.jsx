import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <body class="c57 c103 doc-content">
        <p class="c85 c33">
          <span class="c1"></span>
        </p>
        <table class="c107">
          <tr class="c38">
            <td class="c54 c76" colspan="7" rowspan="1">
              <p class="c13">
                <span class="c1">Module Code</span>
              </p>
            </td>
            <td class="c54 c113" colspan="10" rowspan="1">
              <p class="c13">
                <span class="c1">Module Title</span>
              </p>
            </td>
            <td class="c15 c54" colspan="6" rowspan="1">
              <p class="c13">
                <span class="c1">GPA/NGPA</span>
              </p>
            </td>
          </tr>
          <tr class="c105">
            <td class="c76" colspan="7" rowspan="1">
              <p class="c13">
                <span class="c1">
                  <input type="text" />
                </span>
              </p>
            </td>
            <td class="c113" colspan="10" rowspan="1">
              <p class="c13">
                <span class="c1">
                  <input type="text" />
                </span>
              </p>
            </td>
            <td class="c15" colspan="6" rowspan="1">
              <p class="c13">
                <span class="c1">
                  <select name="isgpa" id="isgpa">
                    <option value="" selected="selected">
                      GPA
                    </option>
                    <option value="">NGPA</option>
                  </select>
                </span>
              </p>
            </td>
          </tr>
          <tr class="c83">
            <td class="c76 c54" colspan="7" rowspan="1">
              <p class="c13">
                <span class="c1">Hours/Week</span>
              </p>
            </td>
            <td class="c54 c84" colspan="5" rowspan="2">
              <p class="c13">
                <span class="c1">Credits</span>
              </p>
            </td>
            <td class="c54 c120" colspan="5" rowspan="2">
              <p class="c13">
                <span class="c1">Pre-Requisites / Co-Requisites</span>
              </p>
            </td>
            <td class="c15 c54" colspan="6" rowspan="1">
              <p class="c13">
                <span class="c1">Evaluation (%)</span>
              </p>
            </td>
          </tr>
          <tr class="c101">
            <td class="c106 c54" colspan="3" rowspan="1">
              <p class="c13">
                <span class="c1">Lecture</span>
              </p>
            </td>
            <td class="c117 c54" colspan="4" rowspan="1">
              <p class="c13">
                <span class="c1">Lab/Tutorial</span>
              </p>
            </td>
            <td class="c35 c54" colspan="3" rowspan="1">
              <p class="c13">
                <span class="c1">CA</span>
              </p>
            </td>
            <td class="c54 c110" colspan="3" rowspan="1">
              <p class="c13">
                <span class="c1">WE</span>
              </p>
            </td>
          </tr>
          <tr class="c105">
            <td class="c106" colspan="3" rowspan="1">
              <p class="c13">
                <span class="c1">
                  <input type="number" />
                </span>
              </p>
            </td>
            <td class="c117" colspan="4" rowspan="1">
              <p class="c13">
                <span class="c1">
                  <input type="number" />
                </span>
              </p>
            </td>
            <td class="c111" colspan="5" rowspan="1">
              <p class="c13">
                <span class="c1">
                  <input type="number" />
                </span>
              </p>
            </td>
            <td class="c115" colspan="5" rowspan="1">
              <p class="c13">
                <span class="c1">CS1050</span>
              </p>
            </td>
            <td class="c35" colspan="3" rowspan="1">
              <p class="c13">
                <span class="c1">40</span>
              </p>
            </td>
            <td class="c110" colspan="3" rowspan="1">
              <p class="c13">
                <span class="c1">60</span>
              </p>
            </td>
          </tr>
          <tr class="c105">
            <td class="c96 c54" colspan="23" rowspan="1">
              <p class="c40">
                <span class="c1">Module Objectives</span>
              </p>
            </td>
          </tr>
          <tr class="c27">
            <td class="c69" colspan="23" rowspan="1">
              <p class="c40">
                <span class="c4">
                  To provide basic understanding on the main components and
                  basic concepts of computer architecture
                </span>
              </p>
            </td>
          </tr>
          <tr class="c38">
            <td class="c96 c54" colspan="23" rowspan="1">
              <p class="c40">
                <span class="c1">Learning Outcomes</span>
              </p>
            </td>
          </tr>
          <tr class="c79">
            <td class="c96" colspan="23" rowspan="1">
              <p class="c51">
                <span class="c4">
                  After completing this module, the student should be able to;
                </span>
              </p>
              <p class="c51">
                <span class="c4">
                  1.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Draw the
                  schematic diagrams of the functional components in a computer
                  system
                </span>
              </p>
              <p class="c51">
                <span class="c4">
                  2.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Describe how
                  a program is executed in a computer
                </span>
              </p>
              <p class="c51">
                <span class="c4">
                  3.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Explain the
                  operation of memory hierarchy, input/output and the related
                  concepts
                </span>
              </p>
              <p class="c51">
                <span class="c4">
                  4.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Develop a
                  simple microprocessor with a limited instruction set
                </span>
              </p>
              <p class="c51">
                <span class="c4">
                  5.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Evaluate the
                  performance enhancement techniques used in computer systems
                </span>
              </p>
            </td>
          </tr>
          <tr class="c38">
            <td class="c23 c31" colspan="19" rowspan="1">
              <p class="c40">
                <span class="c1">Syllabus Outline</span>
              </p>
            </td>
            <td class="c35 c31" colspan="4" rowspan="1">
              <p class="c40">
                <span class="c1">Learning Outcomes</span>
              </p>
            </td>
          </tr>
          <tr class="c38">
            <td class="c23" colspan="19" rowspan="1">
              <ol class="c14 lst-kix_list_2-0 start" start="1">
                <li class="c71 c73 li-bullet-0">
                  <span class="c45">
                    Introduction to computer architecture (2hrs)
                    <br />
                  </span>
                  <span class="c62">
                    Design goals, high-level design, architectural differences
                    programming levels
                  </span>
                </li>
              </ol>
            </td>
            <td class="c35" colspan="4" rowspan="1">
              <p class="c40">
                <span class="c21">LO1</span>
              </p>
            </td>
          </tr>
          <tr class="c38">
            <td class="c23" colspan="19" rowspan="1">
              <ol class="c14 lst-kix_list_2-0" start="2">
                <li class="c71 c73 li-bullet-0">
                  <span class="c45">
                    ALU Design (1hrs)
                    <br />
                  </span>
                  <span class="c62">
                    Half and full adders, encoders, multiplexers
                  </span>
                </li>
              </ol>
            </td>
            <td class="c35" colspan="4" rowspan="1">
              <p class="c40">
                <span class="c21">LO1, LO4</span>
              </p>
            </td>
          </tr>
          <tr class="c38">
            <td class="c23" colspan="19" rowspan="1">
              <ol class="c14 lst-kix_list_2-0" start="3">
                <li class="c40 c46 li-bullet-0">
                  <span class="c1">Registers (1hrs)</span>
                </li>
              </ol>
              <p class="c71">
                <span class="c4">
                  Flip-flops, Registers, Counters, State diagrams, Clocks
                </span>
              </p>
            </td>
            <td class="c35" colspan="4" rowspan="1">
              <p class="c40">
                <span class="c21">LO1, LO4</span>
              </p>
            </td>
          </tr>
          <tr class="c38">
            <td class="c23" colspan="19" rowspan="1">
              <ol class="c14 lst-kix_list_2-0" start="4">
                <li class="c40 c46 li-bullet-0">
                  <span class="c1">
                    Instruction Set Architecture (ISA) (6hrs)
                  </span>
                </li>
              </ol>
              <p class="c40 c87">
                <span class="c4">Micro operations, Assembly instructions </span>
              </p>
              <p class="c40 c87">
                <span class="c4">Addressing modes </span>
              </p>
              <p class="c40 c87">
                <span class="c62">
                  Harvard vs. Von Neumann architecture, RISC/CISC
                </span>
              </p>
            </td>
            <td class="c35" colspan="4" rowspan="1">
              <p class="c40">
                <span class="c21">LO2, LO4</span>
              </p>
            </td>
          </tr>
          <tr class="c38">
            <td class="c23" colspan="19" rowspan="1">
              <ol class="c14 lst-kix_list_2-0" start="5">
                <li class="c40 c46 li-bullet-0">
                  <span class="c1">Data representation (1hr)</span>
                </li>
              </ol>
              <p class="c40 c87">
                <span class="c4">
                  Number systems, Character representations
                </span>
              </p>
            </td>
            <td class="c35" colspan="4" rowspan="1">
              <p class="c40">
                <span class="c21">LO2</span>
              </p>
            </td>
          </tr>
          <tr class="c38">
            <td class="c23" colspan="19" rowspan="1">
              <ol class="c14 lst-kix_list_2-0" start="6">
                <li class="c40 c46 li-bullet-0">
                  <span class="c1">Busses (1hr)</span>
                </li>
              </ol>
            </td>
            <td class="c35" colspan="4" rowspan="1">
              <p class="c40">
                <span class="c21">LO1, LO4</span>
              </p>
            </td>
          </tr>
          <tr class="c38">
            <td class="c23" colspan="19" rowspan="1">
              <ol class="c14 lst-kix_list_2-0" start="7">
                <li class="c40 c46 li-bullet-0">
                  <span class="c45">
                    Memory (4hrs)
                    <br />
                  </span>
                  <span class="c62">
                    Memory hierarchy, Types of memory, Addressing modes, Stack
                  </span>
                </li>
              </ol>
            </td>
            <td class="c35" colspan="4" rowspan="1">
              <p class="c40">
                <span class="c21">LO2, LO3, LO5</span>
              </p>
            </td>
          </tr>
          <tr class="c38">
            <td class="c23" colspan="19" rowspan="1">
              <ol class="c14 lst-kix_list_2-0" start="8">
                <li class="c40 c46 li-bullet-0">
                  <span class="c45">
                    Caching (3hrs)
                    <br />
                  </span>
                  <span class="c62">
                    Locality, Associativity, Optimizations
                  </span>
                </li>
              </ol>
            </td>
            <td class="c35" colspan="4" rowspan="1">
              <p class="c40">
                <span class="c74">LO2, LO3, LO5</span>
              </p>
            </td>
          </tr>
          <tr class="c38">
            <td class="c23" colspan="19" rowspan="1">
              <ol class="c14 lst-kix_list_2-0" start="9">
                <li class="c40 c46 li-bullet-0">
                  <span class="c45">
                    Input/Output (3hrs)
                    <br />
                  </span>
                  <span class="c62">Devices, Polling vs. Interrupts, DMA</span>
                </li>
              </ol>
            </td>
            <td class="c35" colspan="4" rowspan="1">
              <p class="c40">
                <span class="c21">LO2, LO3, LO5</span>
              </p>
            </td>
          </tr>
          <tr class="c38">
            <td class="c23" colspan="19" rowspan="1">
              <ol class="c14 lst-kix_list_2-0" start="10">
                <li class="c40 c46 li-bullet-0">
                  <span class="c1">
                    Performance enhancements in modern computing systems (6hrs)
                  </span>
                </li>
              </ol>
              <p class="c40 c87">
                <span class="c4">Pipelining and Amdahl&rsquo;s law </span>
              </p>
              <p class="c40 c87">
                <span class="c62">Hyper threading, Multi-core, Many-core</span>
              </p>
            </td>
            <td class="c35" colspan="4" rowspan="1">
              <p class="c40">
                <span class="c74">LO2, LO5</span>
              </p>
            </td>
          </tr>
          <tr class="c38">
            <td class="c96 c31" colspan="23" rowspan="1">
              <p class="c109">
                <span class="c1">Assessments</span>
              </p>
            </td>
          </tr>
          <tr class="c112">
            <td class="c116" colspan="5" rowspan="3">
              <p class="c13">
                <span class="c4">Learning outcome</span>
              </p>
            </td>
            <td class="c72" colspan="18" rowspan="1">
              <p class="c13">
                <span class="c4">Assessment</span>
              </p>
            </td>
          </tr>
          <tr class="c48">
            <td class="c114" colspan="10" rowspan="1">
              <p class="c13">
                <span class="c4">Cont. Assessments</span>
              </p>
            </td>
            <td class="c64" colspan="8" rowspan="2">
              <p class="c13">
                <span class="c4">End Semester Examination</span>
              </p>
            </td>
          </tr>
          <tr class="c48">
            <td class="c119" colspan="5" rowspan="1">
              <p class="c13">
                <span class="c4">Labs</span>
              </p>
            </td>
            <td class="c67" colspan="5" rowspan="1">
              <p class="c13">
                <span class="c4">Other Assessments</span>
              </p>
            </td>
          </tr>
          <tr class="c98">
            <td class="c81" colspan="5" rowspan="1">
              <p class="c13">
                <span class="c4">LO1</span>
              </p>
            </td>
            <td class="c93" colspan="5" rowspan="1">
              <p class="c13">
                <span class="c4">35%</span>
              </p>
            </td>
            <td class="c26" colspan="5" rowspan="1">
              <p class="c13">
                <span class="c4">10%</span>
              </p>
            </td>
            <td class="c88" colspan="8" rowspan="1">
              <p class="c13">
                <span class="c4">55%</span>
              </p>
            </td>
          </tr>
          <tr class="c98">
            <td class="c81" colspan="5" rowspan="1">
              <p class="c13">
                <span class="c4">LO2</span>
              </p>
            </td>
            <td class="c93" colspan="5" rowspan="1">
              <p class="c13">
                <span class="c4">40%</span>
              </p>
            </td>
            <td class="c26" colspan="5" rowspan="1">
              <p class="c13">
                <span class="c4">10%</span>
              </p>
            </td>
            <td class="c88" colspan="8" rowspan="1">
              <p class="c13">
                <span class="c4">50%</span>
              </p>
            </td>
          </tr>
          <tr class="c98">
            <td class="c81" colspan="5" rowspan="1">
              <p class="c13">
                <span class="c4">LO3</span>
              </p>
            </td>
            <td class="c93" colspan="5" rowspan="1">
              <p class="c13">
                <span class="c4">45%</span>
              </p>
            </td>
            <td class="c26" colspan="5" rowspan="1">
              <p class="c13">
                <span class="c4">-</span>
              </p>
            </td>
            <td class="c88" colspan="8" rowspan="1">
              <p class="c13">
                <span class="c4">55%</span>
              </p>
            </td>
          </tr>
          <tr class="c98">
            <td class="c81" colspan="5" rowspan="1">
              <p class="c13">
                <span class="c4">LO4</span>
              </p>
            </td>
            <td class="c93" colspan="5" rowspan="1">
              <p class="c13">
                <span class="c4">-</span>
              </p>
            </td>
            <td class="c26" colspan="5" rowspan="1">
              <p class="c13">
                <span class="c4">20%</span>
              </p>
            </td>
            <td class="c88" colspan="8" rowspan="1">
              <p class="c13">
                <span class="c4">80%</span>
              </p>
            </td>
          </tr>
          <tr class="c98">
            <td class="c81" colspan="5" rowspan="1">
              <p class="c13">
                <span class="c4">LO5</span>
              </p>
            </td>
            <td class="c93" colspan="5" rowspan="1">
              <p class="c13">
                <span class="c4">20%</span>
              </p>
            </td>
            <td class="c26" colspan="5" rowspan="1">
              <p class="c13">
                <span class="c4">20%</span>
              </p>
            </td>
            <td class="c88" colspan="8" rowspan="1">
              <p class="c13">
                <span class="c4">60%</span>
              </p>
            </td>
          </tr>
          <tr class="c78">
            <td class="c96 c57" colspan="23" rowspan="1">
              <p class="c40">
                <span class="c70">
                  Tutorials/Continuous Assessments [3 hrs]
                </span>
              </p>
              <ul class="c14 lst-kix_list_1-0 start">
                <li class="c40 c46 li-bullet-0">
                  <span class="c4">
                    Introduction to the selected Assembly Language: Addressing
                    modes, Syntax, Instruction Format (LO2) &ndash; [3 hrs]
                  </span>
                </li>
              </ul>
              <p class="c40 c33">
                <span class="c9"></span>
              </p>
              <p class="c40">
                <span class="c1">Laboratory Sessions [22 hrs] </span>
              </p>
              <ul class="c14 lst-kix_list_1-0">
                <li class="c40 c46 li-bullet-0">
                  <span class="c4">
                    Lab 1: Introduction to the Development Environment (LO2)
                    &ndash; [2 hrs]
                  </span>
                </li>
                <li class="c40 c46 li-bullet-0">
                  <span class="c4">
                    Lab 2: Assembly programming of Memory and Data Manipulation
                    Operations (LO1, LO2, LO3) &ndash; [2 hrs]
                  </span>
                </li>
                <li class="c40 c46 li-bullet-0">
                  <span class="c4">
                    Lab 3: Assembly programming of Input/Output Operations (LO1,
                    LO2, LO3) &ndash; [2 hrs]
                  </span>
                </li>
                <li class="c40 c46 li-bullet-0">
                  <span class="c4">
                    Lab 4: Assembly programming of Arithmetic Operations (LO1,
                    LO2) &ndash; [3 hrs]
                  </span>
                </li>
                <li class="c40 c46 li-bullet-0">
                  <span class="c4">
                    Lab 5: Assembly programming of Bit and Logic Operations
                    (LO1, LO2) &ndash; [2 hrs]
                  </span>
                </li>
                <li class="c40 c46 li-bullet-0">
                  <span class="c4">
                    Lab 6: Assembly programming with Different Data Types (e.g.
                    int, double, float) (LO1, LO2) &ndash; [2 hrs]
                  </span>
                </li>
                <li class="c40 c46 li-bullet-0">
                  <span class="c4">
                    Lab 7: Assembly programming with Branch Instructions (LO1,
                    LO2) &ndash; [3 hrs]
                  </span>
                </li>
                <li class="c40 c46 li-bullet-0">
                  <span class="c4">
                    Lab 8: Assembly programming with Interrupts and Exceptions
                    (LO1, LO2, LO3) &ndash; [3 hrs]
                  </span>
                </li>
                <li class="c40 c46 li-bullet-0">
                  <span class="c4">
                    Lab 9: Cache and Virtual Memory simulation (LO3, LO5)
                    &ndash; [3 hrs]
                  </span>
                </li>
              </ul>
              <p class="c40 c33">
                <span class="c9"></span>
              </p>
              <p class="c40">
                <span class="c1">Field Visit [12 hrs] </span>
              </p>
              <ul class="c14 lst-kix_list_1-0">
                <li class="c40 c46 li-bullet-0">
                  <span class="c4">
                    Report based on a field visit to a computer manufacturing
                    company (LO1) &ndash; [12 hrs]
                  </span>
                </li>
              </ul>
              <p class="c40 c33 c87">
                <span class="c4"></span>
              </p>
              <p class="c40">
                <span class="c1">Assignments</span>
              </p>
              <ul class="c14 lst-kix_list_1-0">
                <li class="c40 c46 li-bullet-0">
                  <span class="c4">
                    Assignment 1: Review of the microprocessor designed in
                    CS1050 and designing an Instruction Set as a group (LO4)
                  </span>
                </li>
                <li class="c40 c46 li-bullet-0">
                  <span class="c4">
                    Assignment 2: Analysis of selected high level language code
                    segments by converting to assembly code (LO2)
                  </span>
                </li>
                <li class="c40 c46 li-bullet-0">
                  <span class="c4">
                    Assignment 3: Solving exercises related to Parallelism (LO5)
                  </span>
                </li>
              </ul>
              <p class="c40 c33">
                <span class="c4"></span>
              </p>
            </td>
          </tr>
          <tr class="c91">
            <td class="c96 c31" colspan="23" rowspan="1">
              <p class="c61">
                <span class="c1">Learning Outcome/Program Outcome Mapping</span>
              </p>
            </td>
          </tr>
          <tr class="c27">
            <td class="c32" colspan="1" rowspan="1">
              <p class="c61">
                <span class="c1">LO</span>
              </p>
            </td>
            <td class="c5" colspan="1" rowspan="1">
              <p class="c61">
                <span class="c1">PO1</span>
              </p>
            </td>
            <td class="c19" colspan="2" rowspan="1">
              <p class="c61">
                <span class="c1">PO2</span>
              </p>
            </td>
            <td class="c19" colspan="2" rowspan="1">
              <p class="c61">
                <span class="c1">PO3</span>
              </p>
            </td>
            <td class="c5" colspan="2" rowspan="1">
              <p class="c61">
                <span class="c1">PO4</span>
              </p>
            </td>
            <td class="c5" colspan="1" rowspan="1">
              <p class="c61">
                <span class="c1">PO5</span>
              </p>
            </td>
            <td class="c6" colspan="2" rowspan="1">
              <p class="c61">
                <span class="c1">PO6</span>
              </p>
            </td>
            <td class="c6" colspan="2" rowspan="1">
              <p class="c61">
                <span class="c1">PO7</span>
              </p>
            </td>
            <td class="c42" colspan="1" rowspan="1">
              <p class="c61">
                <span class="c1">PO8</span>
              </p>
            </td>
            <td class="c6" colspan="2" rowspan="1">
              <p class="c61">
                <span class="c1">PO9</span>
              </p>
            </td>
            <td class="c6" colspan="2" rowspan="1">
              <p class="c61">
                <span class="c1">PO10</span>
              </p>
            </td>
            <td class="c42" colspan="3" rowspan="1">
              <p class="c61">
                <span class="c1">PO11</span>
              </p>
            </td>
            <td class="c37" colspan="1" rowspan="1">
              <p class="c61">
                <span class="c1">PO12</span>
              </p>
            </td>
          </tr>
          <tr class="c27">
            <td class="c32" colspan="1" rowspan="1">
              <p class="c61">
                <span class="c1">LO1</span>
              </p>
            </td>
            <td class="c5" colspan="1" rowspan="1">
              <p class="c61">
                <span class="c1">H</span>
              </p>
            </td>
            <td class="c19" colspan="2" rowspan="1">
              <p class="c61">
                <span class="c1">H</span>
              </p>
            </td>
            <td class="c19" colspan="2" rowspan="1">
              <p class="c61">
                <span class="c1">H</span>
              </p>
            </td>
            <td class="c5" colspan="2" rowspan="1">
              <p class="c61">
                <span class="c1">M</span>
              </p>
            </td>
            <td class="c5" colspan="1" rowspan="1">
              <p class="c61 c33">
                <span class="c1"></span>
              </p>
            </td>
            <td class="c6" colspan="2" rowspan="1">
              <p class="c61 c33">
                <span class="c1"></span>
              </p>
            </td>
            <td class="c6" colspan="2" rowspan="1">
              <p class="c61 c33">
                <span class="c1"></span>
              </p>
            </td>
            <td class="c42" colspan="1" rowspan="1">
              <p class="c61 c33">
                <span class="c1"></span>
              </p>
            </td>
            <td class="c6" colspan="2" rowspan="1">
              <p class="c61 c33">
                <span class="c1"></span>
              </p>
            </td>
            <td class="c6" colspan="2" rowspan="1">
              <p class="c61">
                <span class="c1">H</span>
              </p>
            </td>
            <td class="c42" colspan="3" rowspan="1">
              <p class="c61 c33">
                <span class="c1"></span>
              </p>
            </td>
            <td class="c37" colspan="1" rowspan="1">
              <p class="c61 c33">
                <span class="c1"></span>
              </p>
            </td>
          </tr>
          <tr class="c27">
            <td class="c32" colspan="1" rowspan="1">
              <p class="c61">
                <span class="c1">LO2</span>
              </p>
            </td>
            <td class="c5" colspan="1" rowspan="1">
              <p class="c61">
                <span class="c1">H</span>
              </p>
            </td>
            <td class="c19" colspan="2" rowspan="1">
              <p class="c61">
                <span class="c1">H</span>
              </p>
            </td>
            <td class="c19" colspan="2" rowspan="1">
              <p class="c61">
                <span class="c1">H</span>
              </p>
            </td>
            <td class="c5" colspan="2" rowspan="1">
              <p class="c61">
                <span class="c1">M</span>
              </p>
            </td>
            <td class="c5" colspan="1" rowspan="1">
              <p class="c61">
                <span class="c1">H</span>
              </p>
            </td>
            <td class="c6" colspan="2" rowspan="1">
              <p class="c33 c61">
                <span class="c1"></span>
              </p>
            </td>
            <td class="c6" colspan="2" rowspan="1">
              <p class="c61 c33">
                <span class="c1"></span>
              </p>
            </td>
            <td class="c42" colspan="1" rowspan="1">
              <p class="c61 c33">
                <span class="c1"></span>
              </p>
            </td>
            <td class="c6" colspan="2" rowspan="1">
              <p class="c61 c33">
                <span class="c1"></span>
              </p>
            </td>
            <td class="c6" colspan="2" rowspan="1">
              <p class="c61 c33">
                <span class="c1"></span>
              </p>
            </td>
            <td class="c42" colspan="3" rowspan="1">
              <p class="c61 c33">
                <span class="c1"></span>
              </p>
            </td>
            <td class="c37" colspan="1" rowspan="1">
              <p class="c61 c33">
                <span class="c1"></span>
              </p>
            </td>
          </tr>
          <tr class="c27">
            <td class="c32" colspan="1" rowspan="1">
              <p class="c61">
                <span class="c1">LO3</span>
              </p>
            </td>
            <td class="c5" colspan="1" rowspan="1">
              <p class="c61">
                <span class="c1">H</span>
              </p>
            </td>
            <td class="c19" colspan="2" rowspan="1">
              <p class="c61">
                <span class="c1">H</span>
              </p>
            </td>
            <td class="c19" colspan="2" rowspan="1">
              <p class="c61">
                <span class="c1">H</span>
              </p>
            </td>
            <td class="c5" colspan="2" rowspan="1">
              <p class="c61">
                <span class="c1">M</span>
              </p>
            </td>
            <td class="c5" colspan="1" rowspan="1">
              <p class="c61">
                <span class="c1">L</span>
              </p>
            </td>
            <td class="c6" colspan="2" rowspan="1">
              <p class="c61 c33">
                <span class="c1"></span>
              </p>
            </td>
            <td class="c6" colspan="2" rowspan="1">
              <p class="c61 c33">
                <span class="c1"></span>
              </p>
            </td>
            <td class="c42" colspan="1" rowspan="1">
              <p class="c61 c33">
                <span class="c1"></span>
              </p>
            </td>
            <td class="c6" colspan="2" rowspan="1">
              <p class="c61 c33">
                <span class="c1"></span>
              </p>
            </td>
            <td class="c6" colspan="2" rowspan="1">
              <p class="c61 c33">
                <span class="c1"></span>
              </p>
            </td>
            <td class="c42" colspan="3" rowspan="1">
              <p class="c61 c33">
                <span class="c1"></span>
              </p>
            </td>
            <td class="c37" colspan="1" rowspan="1">
              <p class="c61 c33">
                <span class="c1"></span>
              </p>
            </td>
          </tr>
          <tr class="c27">
            <td class="c32" colspan="1" rowspan="1">
              <p class="c61">
                <span class="c1">LO4</span>
              </p>
            </td>
            <td class="c5" colspan="1" rowspan="1">
              <p class="c61">
                <span class="c1">H</span>
              </p>
            </td>
            <td class="c19" colspan="2" rowspan="1">
              <p class="c61">
                <span class="c1">H</span>
              </p>
            </td>
            <td class="c19" colspan="2" rowspan="1">
              <p class="c61">
                <span class="c1">H</span>
              </p>
            </td>
            <td class="c5" colspan="2" rowspan="1">
              <p class="c61">
                <span class="c1">H</span>
              </p>
            </td>
            <td class="c5" colspan="1" rowspan="1">
              <p class="c61">
                <span class="c1">M</span>
              </p>
            </td>
            <td class="c6" colspan="2" rowspan="1">
              <p class="c61 c33">
                <span class="c1"></span>
              </p>
            </td>
            <td class="c6" colspan="2" rowspan="1">
              <p class="c61 c33">
                <span class="c1"></span>
              </p>
            </td>
            <td class="c42" colspan="1" rowspan="1">
              <p class="c61 c33">
                <span class="c1"></span>
              </p>
            </td>
            <td class="c6" colspan="2" rowspan="1">
              <p class="c61">
                <span class="c1">H</span>
              </p>
            </td>
            <td class="c6" colspan="2" rowspan="1">
              <p class="c61">
                <span class="c1">H</span>
              </p>
            </td>
            <td class="c42" colspan="3" rowspan="1">
              <p class="c61">
                <span class="c1">L</span>
              </p>
            </td>
            <td class="c37" colspan="1" rowspan="1">
              <p class="c61 c33">
                <span class="c1"></span>
              </p>
            </td>
          </tr>
          <tr class="c27">
            <td class="c32" colspan="1" rowspan="1">
              <p class="c2">
                <span class="c1">LO5</span>
              </p>
            </td>
            <td class="c5" colspan="1" rowspan="1">
              <p class="c2">
                <span class="c1">H</span>
              </p>
            </td>
            <td class="c19" colspan="2" rowspan="1">
              <p class="c2">
                <span class="c1">H</span>
              </p>
            </td>
            <td class="c19" colspan="2" rowspan="1">
              <p class="c2">
                <span class="c1">H</span>
              </p>
            </td>
            <td class="c5" colspan="2" rowspan="1">
              <p class="c2">
                <span class="c1">H</span>
              </p>
            </td>
            <td class="c5" colspan="1" rowspan="1">
              <p class="c2">
                <span class="c1">M</span>
              </p>
            </td>
            <td class="c6" colspan="2" rowspan="1">
              <p class="c2 c33">
                <span class="c1"></span>
              </p>
            </td>
            <td class="c6" colspan="2" rowspan="1">
              <p class="c2">
                <span class="c1">M</span>
              </p>
            </td>
            <td class="c42" colspan="1" rowspan="1">
              <p class="c2 c33">
                <span class="c1"></span>
              </p>
            </td>
            <td class="c6" colspan="2" rowspan="1">
              <p class="c2 c33">
                <span class="c1"></span>
              </p>
            </td>
            <td class="c6" colspan="2" rowspan="1">
              <p class="c2 c33">
                <span class="c1"></span>
              </p>
            </td>
            <td class="c42" colspan="3" rowspan="1">
              <p class="c2 c33">
                <span class="c1"></span>
              </p>
            </td>
            <td class="c37" colspan="1" rowspan="1">
              <p class="c2">
                <span class="c1">M</span>
              </p>
            </td>
          </tr>
          <tr class="c27">
            <td class="c32" colspan="1" rowspan="1">
              <p class="c2">
                <span class="c1">Module</span>
              </p>
            </td>
            <td class="c5" colspan="1" rowspan="1">
              <p class="c2">
                <span class="c1">H</span>
              </p>
            </td>
            <td class="c19" colspan="2" rowspan="1">
              <p class="c2">
                <span class="c1">H</span>
              </p>
            </td>
            <td class="c19" colspan="2" rowspan="1">
              <p class="c2">
                <span class="c1">H</span>
              </p>
            </td>
            <td class="c5" colspan="2" rowspan="1">
              <p class="c2">
                <span class="c1">H</span>
              </p>
            </td>
            <td class="c5" colspan="1" rowspan="1">
              <p class="c2">
                <span class="c1">H</span>
              </p>
            </td>
            <td class="c6" colspan="2" rowspan="1">
              <p class="c2 c33">
                <span class="c1"></span>
              </p>
            </td>
            <td class="c6" colspan="2" rowspan="1">
              <p class="c2">
                <span class="c1">M</span>
              </p>
            </td>
            <td class="c42" colspan="1" rowspan="1">
              <p class="c2 c33">
                <span class="c1"></span>
              </p>
            </td>
            <td class="c6" colspan="2" rowspan="1">
              <p class="c2">
                <span class="c1">H</span>
              </p>
            </td>
            <td class="c6" colspan="2" rowspan="1">
              <p class="c2">
                <span class="c1">H</span>
              </p>
            </td>
            <td class="c42" colspan="3" rowspan="1">
              <p class="c2">
                <span class="c1">L</span>
              </p>
            </td>
            <td class="c37" colspan="1" rowspan="1">
              <p class="c2">
                <span class="c1">M</span>
              </p>
            </td>
          </tr>
          <tr class="c27">
            <td class="c102" colspan="22" rowspan="1">
              <p class="c13 c87 c92">
                <span class="c45">H &ndash; </span>
                <span class="c62">High</span>
                <span class="c45">&nbsp; &nbsp; &nbsp; &nbsp; M &ndash; </span>
                <span class="c62">Medium</span>
                <span class="c45">&nbsp; &nbsp; &nbsp; &nbsp; L &ndash; </span>
                <span class="c62">Low</span>
              </p>
            </td>
          </tr>
          <tr class="c38">
            <td class="c31 c96" colspan="23" rowspan="1">
              <p class="c61">
                <span class="c1">
                  Recommended Text Books/ Other Learning Materials
                </span>
              </p>
            </td>
          </tr>
          <tr class="c112">
            <td class="c96" colspan="23" rowspan="1">
              <p class="c121">
                <span class="c4">Text books:</span>
              </p>
              <ol class="c14 lst-kix_list_3-0 start" start="1">
                <li class="c73 c118 li-bullet-0">
                  <span class="c62">
                    Computer Architecture: A Quantitative Approach, 6
                  </span>
                  <span class="c62 c104">th</span>
                  <span class="c4">
                    &nbsp;Edition, John L. Hennessy, David A. Patterson
                  </span>
                </li>
              </ol>
            </td>
          </tr>
        </table>
        <p class="c33 c85">
          <span class="c4"></span>
        </p>
      </body>
    </>
  );
}

export default App;
