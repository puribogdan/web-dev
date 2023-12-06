import React from 'react';
import { useState, useEffect } from 'react';
import HeaderOther from '../HeaderOther/HeaderOther';
import './Exercitii.css';
import Footer from '../Footer/Footer';

import { Routes, Route, Link } from 'react-router-dom';

const Exercitii = () => {
  //   const [exercises, setExercises] = useState([]);
  //   const url =
  //     'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back?limit=100&offset=10';
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const options = {
  //         method: 'GET',
  //         headers: {
  //           'X-RapidAPI-Key':
  //             'f87c0aab03msh4eddac69d082156p16eb1ejsn6a8a049fc1b5',
  //           'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  //         },
  //       };
  //       try {
  //         const response = await fetch(url, options);
  //         const result = await response.json();
  //         console.log(result);
  //         setExercises(result);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     };
  //     fetchData();
  //   }, []); // Empty dependency array ensures useEffect runs only once, equivalent to componentDidMount
  //   return (
  //
  //
  //
  //
  //         <Routes>
  //           {exercises.map((exercise) => (
  //             <Route
  //               key={exercise.id}
  //               path={exercise.id}
  //               render={(props) => (
  //                 <ExerciseDetail {...props} exercise={exercise} />
  //               )}
  //             />
  //           ))}
  //         </Routes>
  //         <ul>
  //           {exercises.map((exercise) => (
  //             <li key={exercise.id}>
  //               <h2>{exercise.name}</h2>
  //               <Link to={exercise.id}>
  //                 <img src={exercise.gifUrl} alt={exercise.name} />
  //               </Link>
  //               {/* Add other details about the exercise if needed */}
  //             </li>
  //           ))}
  //         </ul>
  //
  //
  //
  // };

  // const handleSearch = () => {};

  return (
    <>
      <HeaderOther pageTitle="Exerciții" headerUrl="../src/assets/hero1.jpg" />
      <section className="exercitii-wrapper">
        <h1 className="h1">Categorii</h1>
        {/* <div className="input-wrapper">
          <input
            type="text"
            placeholder="Search..."
            // value={searchTerm}
            // onChange={handleInputChange}
          />
          <button onClick={handleSearch}>Search</button>
        </div> */}
        <div className="categories-wrapper">
          <Link to="/Exercitii/back">
            <div className="category">
              <img src="../src/assets/backicon1.svg" alt=""></img>

              <h2>Back</h2>
            </div>
          </Link>
          <Link to="/Exercitii/cardio">
            <div className="category">
              <img src="../src/assets/cardioicon1.svg" alt=""></img>
              <h2>Cardio</h2>
            </div>
          </Link>
          <Link to="/Exercitii/chest">
            <div className="category">
              <img src="../src/assets/chesticon1.svg" alt=""></img>
              <h2>Chest</h2>
            </div>
          </Link>
          <Link to="/Exercitii/lower%20arms">
            <div className="category">
              <img src="../src/assets/armsicon1.svg" alt=""></img>
              <h2>Lower Arms</h2>
            </div>
          </Link>
          <Link to="/Exercitii/lower%20legs">
            <div className="category">
              <img src="../src/assets/legsicon1.svg" alt=""></img>
              <h2>Lower Legs</h2>
            </div>
          </Link>
          <Link to="/Exercitii/neck">
            <div className="category">
              <img src="../src/assets/neckicon1.svg" alt=""></img>
              <h2>Neck</h2>
            </div>
          </Link>
          <Link to="/Exercitii/shoulders">
            <div className="category">
              <img src="../src/assets/shouldersicon1.svg" alt=""></img>
              <h2>Shoulders</h2>
            </div>
          </Link>
          <Link to="/Exercitii/upper%20arms">
            <div className="category">
              <img src="../src/assets/armsicon1.svg" alt=""></img>
              <h2>Upper Arms</h2>
            </div>
          </Link>
          <Link to="/Exercitii/upper%20legs">
            <div className="category">
              <img src="../src/assets/legsicon1.svg" alt=""></img>
              <h2>Upper Legs</h2>
            </div>
          </Link>
          <Link to="/Exercitii/waist">
            <div className="category">
              <img src="../src/assets/absicon1.svg" alt=""></img>
              <h2>Abs</h2>
            </div>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Exercitii;
