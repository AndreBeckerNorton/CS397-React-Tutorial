import { useState } from "react";
import CourseList from "./CourseList";
import { catchConflicts } from './timeChecker';

const SelectedCourses = ({ courses, selected }) => {
  return (
      <div className="selected-courses">
          {
              selected.length === 0
              ? <p>You haven't selected any courses.</p>
              : selected.map(course => (
                  <div className="card" key={course}>
                      <div className="card-body" key={courses[course].id}>
                          <h5>{courses[course].term} CS {courses[course].number}</h5>
                          <p className='info'>{courses[course].title}</p>
                          <p className='info'>{courses[course].meets}</p>
                      </div>
                  </div>
                  ))
          }
      </div>
  )
}

const Modal = ({children, open, close}) => (
  <div
    className={`modal ${open ? 'modal-show' : ''}`}
    tabIndex="-1"
    role="dialog"
    onClick={(evt) => { if (evt.target === evt.currentTarget) close(); }}
  >
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="btn-close" aria-label="Close"
            onClick={close}
          />
        </div>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  </div>
);

const terms = {
  Fall: 'Fall',
  Winter: 'Winter',
  Spring: 'Spring'
};

const TermButton = ({term, selection, setSelection}) => (
  <div className="TermButton">
    <input type="radio" id={term} className="btn-check" checked={term === selection} autoComplete="off"
      onChange={() => setSelection(term)} />
    <label className="btn btn-success" htmlFor={term}>
    { term }
    </label>
  </div>
);

const TermSelector = ({selection, setSelection}) => (
  <div className="btn-group">
    { 
      Object.keys(terms).map(term => <TermButton key={term} term={term} selection={selection} setSelection={setSelection} />)
    }
  </div>
);

const TermPage = ({ courses }) => {
  const [selection, setSelection] = useState("Fall");
  const [selected, setSelected] = useState([]);
  const [conflicts, setConflicts] = useState([]);
  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  const toggleSelected = (item) => {
    if (!conflicts.includes(item)) {
      setSelected(
        selected.includes(item)
          ? selected.filter(x => x !== item)
          : [...selected, item]
      );

      const newConflicts = catchConflicts(courses, item);
      console.log(conflicts)
      console.log(newConflicts)
      setConflicts(
        selected.includes(item)
          ? conflicts.filter(x => !newConflicts.includes(x))
          : [...conflicts, ...newConflicts.filter(x => !conflicts.includes(x))]
      )
    }
  }

  return (
    <div>
      <TermSelector selection={selection} setSelection={setSelection} />
      <button className="ms-auto btn btn-dark float-end" onClick={openModal}>Check Out</button>
      <Modal open={open} close={closeModal}>
        <SelectedCourses selected={selected} courses={courses} />
      </Modal>
      <CourseList courses={courses} selection={selection} selected={selected} toggleSelected={toggleSelected} conflicts={conflicts} />
    </div>
  )

};

export default TermPage;