const courseList = ({courses}) => (
  <div>
    { Object.entries(courses).map(([course, i]) => <div key={course}>
        <p>{i.term} {i.number} {i.title} {i.meets}</p>
        </div>) }
  </div>
);

export default courseList;