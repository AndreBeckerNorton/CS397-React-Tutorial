import { useState } from "react";
import Selector from "./Selector";
import CourseList from "./CourseList";

const Page = ({ courses }) => {
    const [selection, setSelection] = useState("Fall");
    const [select, setSelect] = useState([]);

    const toggleSelect = (item) => setSelect(
      select.includes(item) ? select.filter( x => x !== item) : [...select, item]
    );

    return (
      <div>
        <Selector selection={selection} setSelection={setSelection}/>
        <CourseList courses={courses} selection={selection} select={select} toggleSelect={toggleSelect}/>
      </div>
    )

};

export default Page;