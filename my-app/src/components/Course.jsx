const Course = ({course}) => {
    return (
        <div className="card m-1 p-2">
            <div className="card-body">
                <h5 className="card-title">CS {course.number}</h5>
                <p className="card-text">{course.title}</p>
            </div>
            <div className="card-footer">
                <p>{course.term}</p>
                <p>{course.meets}</p>
            </div>
        </div>

    )
}

export default Course;