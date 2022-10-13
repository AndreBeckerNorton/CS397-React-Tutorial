import './Course.css'

const Course = ({course, id, select, toggleSelect }) => {
    return (
        <div className={`card m-1 p-2 ${select.includes(id) ? 'selected' : ''}`} onClick={()=>toggleSelect(id)}>
            <div className="card-body">
                <h3>CS {course.number}</h3>
                <p>{course.title}</p>
            </div>
            <div className="card-footer bg-white float-left">
                <h6>{course.term} {course.meets}</h6>
            </div>
        </div>

    )
}

export default Course;