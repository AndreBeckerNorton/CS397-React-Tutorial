import { useState } from "react";
import Selector from "./Selector";
import CourseList from "./CourseList";

const Page = ({ courses }) => {
    const [selection, setSelection] = useState("Fall");
    
    return (
      <div>
        <Selector selection={selection} setSelection={setSelection} />
        <CourseList courses={courses} selection={selection} />
      </div>
    )
    
};

export default Page;