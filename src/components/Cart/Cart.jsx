import React from 'react';
import "./Cart.css";
const Cart = ({selectedCourses,totalPrice,totalUsedCredits,remaining}) => {
    console.log(selectedCourses)
    return (
        <div className="cart-container">
            <div className='underline'><h5 className='blue-title'>Credit Hour Remaining {remaining} hr</h5></div>
            <div className='underline'><h4>Course Name</h4>
            <ol>
                {selectedCourses.map((course)=>(
                <li key={course.id}><p><small>{course.title}</small></p></li> 
        ))}  
            </ol></div>
            <div className='underline'> <p><small>Total Credit Hour : {totalUsedCredits} </small></p></div>        
            <p><small>Total Price : {totalPrice} $</small></p>
        </div>
    );
};
export default Cart;