import './Course.css'

const Course = ({course, id, selected, toggleSelected, conflicts}) => {
    return (
        <div className={`card m-1 p-2 ${selected.includes(id) ? 'selected' : ''} ${conflicts.includes(id) ? 'conflicted' : ''} my-card`} onClick={()=>toggleSelected(id)}>
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