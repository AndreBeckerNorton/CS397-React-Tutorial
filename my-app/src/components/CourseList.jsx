import CourseListIndiv from "./CourseListIndiv";

const CourseList = ({schedule}) => {
    // <div> <h1>{schedule.title}</h1></div>
    <div class='courseList'>
        { Object.entries(schedule.courses).map(([id, course]) => 
        <li> {course.term} CS {course.number}: {course.title} </li>) }

    </div>
};

  export default CourseList; 