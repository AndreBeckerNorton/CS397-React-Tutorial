const Cart = ({selected}) => (
    <div className="cart">
      {
        selected.length === 0
        ? <h2>Please select courses before checking out!</h2>
        : selected.map(course => (
            <div key={course.term +" "+ course.number}>
              <b>{course.term} CS {course.number}:</b> {course.title} meets {course.meets}
            </div>
          ))
      }
    </div>
  );
  
  export default Cart;