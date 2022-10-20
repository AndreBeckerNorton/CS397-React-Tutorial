import React, { useState, useEffect } from 'react';
import Course from "./Course";
import ScheduleModal from './Modal';
import Cart from './Cart';

const terms = { F: 'Fall', W: 'Winter', S: 'Spring' };

const CourseList = ({ courses }) => {

    const [term, setTerm] = useState('Fall');
    const [selected, setSelected] = useState([]);
    const termCourses = Object.values(courses).filter(course => term === course.term);
    const [open, setOpen] = useState(false);

    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);

    return (
        <>
            <div className="controls">
                <TermSelector term={term} setTerm={setTerm} />
                <button className="btn btn-primary" onClick={openModal}>Show Schedule</button>
            </div>
            <ScheduleModal open={open} close={closeModal}>
                <Cart selected={selected} />
            </ScheduleModal>
            <div className="course-list">
                {
                    termCourses.map((course) => 
                        <Course key={course.term + " " + course.number} course={course}
                            selected={selected} setSelected={setSelected} />
                    )
                }
            </div>
        </>
    );
};


const TermSelector = ({ term, setTerm }) => {
    return (
        <div className="btn-toolbar justify-content-between">
            <div className="btn-group" id="term-btns">
                {
                    Object.values(terms).map(
                        value => <TermButton key={value} term={value} setTerm={setTerm} checked={value === term} />
                    )
                }
            </div>
        </div>
    );
};

const TermButton = ({ term, setTerm, checked }) => (
    <>
        <input type="radio" id={term} className="btn-check" checked={checked} autoComplete="off"
            onChange={() => setTerm(term)} />
        <label className="btn btn-success m-1 p-2" htmlFor={term}>
            {term}
        </label>
    </>
);

export default CourseList;