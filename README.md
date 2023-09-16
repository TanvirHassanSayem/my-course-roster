## Project Features

- Display all available courses.
- Each course includes the course name,description, price, and credit information.
- Users can Select course and add to the cart 
- Users can select courses up to a maximum of 20 credits.
- An alert is shown if the user attempts to exceed the 20-credit limit.
- An alert is shown if the user attempts to select a course that has already been chosen.
## Managing State

In the project I've use five state which are,

Display Remaining Credits:
You can display the remaining credits to the user so they know how many more courses they can select. For example:

javascript
Copy code
<p>Remaining Credits: {remaining}</p>
Validation on Course Selection:
You can use the "remaining" state to validate whether the user can select more courses. If "remaining" becomes zero, you can disable the course selection or show a message indicating that the user has reached the limit.

javascript
Copy code
const handleCourseSelect = (course) => {
  if (remaining > 0) {
    // Allow course selection
    // Update selectedCourses, totalUsedCredits, and totalPrice
    setRemaining(remaining - course.credits);
  } else {
    // Display a message or prevent further course selection
  }
};
Reset Functionality:
You can also use the "remaining" state for a reset functionality that resets the selected courses and credits back to their initial state when needed.

javascript
Copy code
const resetSelection = () => {
  setSelectedCourses([]);
  setTotalUsedCredits(0);
  setTotalPrice(0);
  setRemaining(20);
};
These are just a few ways you can use the "remaining" state to manage the user's course selection experience in your project. Depending on your application's requirements, you can customize how it's presented and used.

