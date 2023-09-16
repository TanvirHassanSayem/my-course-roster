import React, { useEffect, useState } from 'react';
import './Home1.css';
import Cart from '../Cart/Cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const [allCourses, setAllCourses] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [totalUsedCredits, setTotalUsedCredits] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [remaining, setRemaining] = useState(20);

  useEffect(() => {
    fetch('./data.json')
      .then((res) => res.json())
      .then((data) => setAllCourses(data));
  }, []);

  const handleSelectCourses = (course) => {
    const isExist = selectedCourses.find((item) => item.id === course.id);

    if (isExist) {
      return toast.warn('Course Already Selected', { autoClose: 1500 });
    }

    const usedCredits = selectedCourses.reduce(
      (total, item) => total + item.credit,
      course.credit
    );

    const price = selectedCourses.reduce(
      (total, item) => total + item.price,
      course.price
    );

    const totalRemaining = 20 - usedCredits;

    if (usedCredits > 20) {
      toast.error('InSufficient Credits for this Course', { autoClose: 2000 });
    } else {
      toast.success('Added Successfully', { autoClose: 1000 });
      setTotalUsedCredits(usedCredits);
      setTotalPrice(price);
      setRemaining(totalRemaining);
      setSelectedCourses([...selectedCourses, course]);
    }
  };

  return (
    <div className="container">
      <h1>Course Registration</h1>
      <div className="home-container">
        <div className="card-container">
          {allCourses.map((course) => (
            <div key={course.id} className="card">
              <div className="card-img">
                <img className="photo" src={course.image} alt="" />
              </div>
              <div>
                <h5 className="title">{course.title}</h5>
                <p className="description">
                  <small>{course.description}</small>
                </p>
                <div className="info">
                  <p>
                    <i className="fa-solid fa-dollar-sign"></i>
                    <small> Price : {course.price}</small>
                  </p>
                  <p>
                    <i className="fa-solid fa-book-open"></i>
                    <small> Credit: {course.credit}hr</small>
                  </p>
                </div>
              </div>
              <button onClick={() => handleSelectCourses(course)} className="card-btn">
                Select
              </button>
            </div>
          ))}
          <ToastContainer />
        </div>
        <div className="cart">
          <Cart
            selectedCourses={selectedCourses}
            totalPrice={totalPrice}
            totalUsedCredits={totalUsedCredits}
            remaining={remaining}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
