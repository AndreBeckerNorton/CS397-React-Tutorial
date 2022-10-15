import { useState } from "react";
import Selector from "./Selector";
import CourseList from "./CourseList";
import Modal from "./Modal";
import CourseSelector from "./CourseSelector";

const Page = ({ courses }) => {
    const [selection, setSelection] = useState("Fall");
    const [select, setSelect] = useState([]);
    const [open, setOpen] = useState(false);

    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);
    const toggleSelect = (item) => {
      setSelect(select.includes(item) ? select.filter( x => x !== item) : [...select, item]);
    }

    return (
      <div>
        <Selector selection={selection} setSelection={setSelection}/>
        <button className="ms-auto btn btn-dark float-end" onClick={openModal}>Check Out</button>
        <Modal open={open} close={closeModal}>
          <CourseSelector selection={selection} courses={courses} />
        </Modal>
        <CourseList courses={courses} selection={selection} select={select} toggleSelect={toggleSelect}/>
      </div>
    )

};

export default Page;