const courseList = ({courses}) => (
  <div>
    { Object.entries(courses).map(([course, i]) => <div key={course}>
        <p>{i.term} {i.meets} | {i.number} {i.title}</p>
        </div>) }
  </div>
);

export default courseList;