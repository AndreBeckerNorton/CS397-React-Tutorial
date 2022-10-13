import Course from './Course'
import './CourseList.css'

const CourseList = ({ courses, selection, select, toggleSelect }) => {
    return (
        <div className="course-list">
            {Object.entries(courses).map(([id, course]) => course.term === selection && <Course id={id} key={id} course={course} select={select} toggleSelect={toggleSelect} />)}
        </div>
    )
}

export default CourseList;