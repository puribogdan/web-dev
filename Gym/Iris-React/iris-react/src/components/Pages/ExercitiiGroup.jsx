import React from 'react';
import { useState, useEffect } from 'react';
import HeaderOther from '../HeaderOther/HeaderOther';
import './Exercitii.css';

import { useParams } from 'react-router-dom';
import './ExercitiiGroup.css';

import { Routes, Route, Link } from 'react-router-dom';

const goBack = () => {
  if (window.history && window.history.length > 1) {
    window.history.back();
  } else {
    // Fallback behavior or handle the case when history.back() is not available
    console.log('History back not supported');
    // You might want to provide alternative navigation or display a message to the user
  }
};

const ExercitiiGroup = () => {
  const { group } = useParams();
  const [exercises, setExercises] = useState([]);
  const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${group}?limit=99999999999999999999999999`;
  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key':
            'f87c0aab03msh4eddac69d082156p16eb1ejsn6a8a049fc1b5',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        },
      };
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        setExercises(result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once, equivalent to componentDidMount
  return (
    <>
      <HeaderOther headerUrl="../../src/assets/hero1.jpg" />
      <Routes>
        {exercises.map((exercise) => (
          <Route
            key={exercise.id}
            path={exercise.id}
            render={(props) => (
              <ExerciseDetail {...props} exercise={exercise} />
            )}
          />
        ))}
      </Routes>

      <section className="group-wrapper">
        <button className="return-btn" onClick={goBack}>
          Înapoi
        </button>
        <ul>
          {exercises.map((exercise) => (
            <Link to={exercise.id}>
              <li key={exercise.id}>
                <img src={exercise.gifUrl} alt={exercise.name} />

                <h2>{exercise.name}</h2>
              </li>
            </Link>
          ))}
        </ul>
      </section>
    </>
  );
};

export default ExercitiiGroup;
