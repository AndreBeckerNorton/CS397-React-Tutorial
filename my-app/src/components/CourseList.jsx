const CourseList = ({ courses }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Course</th>
            <th>Title</th>
            <th>Meeting Time</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(courses).map(course => (
            <Course key={course.number} course={course} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
  
  export default CourseList;