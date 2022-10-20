import { hasConflict } from './time.jsx'
import { Link } from 'react-router-dom';

const Course = ({ course, selected, setSelected }) => {
  const isSelected = selected.includes(course);
  const isDisabled = !isSelected && hasConflict(course, selected);
  const style = {
    backgroundColor:  isDisabled? 'lightgrey' : isSelected ? 'red' : 'white'
  };

  const id = course.term[0] + course.number;
  
  return (
    <div className="card m-1 p-2"
      style={style}
      onClick={() => isDisabled ? console.log("Select disabled") : setSelected(toggle(course, selected))}
    >
      <div className="card-body">
        <div className="topSection">
          <div className="card-title">CS {course.number}</div>
          <div className="card-text">{course.title}</div>
        </div>
        <hr></hr>
        <div className="card-text">{course.term}: {course.meets}</div>
        <p><Link to={`/edit/${id}`}>Edit</Link></p>
      </div>
    </div>
  );
};

export const toggle = (x, lst) => (
  lst.includes(x) ? lst.filter(y => y !== x) : [x, ...lst]
);

export default Course;