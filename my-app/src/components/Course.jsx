const Course = ({course}) => {
    return (
        <div className="card m-1 p-2">
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