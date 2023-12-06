// ExerciseDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderOther from '../HeaderOther/HeaderOther';
import './ExercitiiID.css';

const ExerciseDetail = () => {
  const { id } = useParams();
  const [exercise, setExercise] = useState({});
  const url = `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`;

  const goBack = () => {
    if (window.history && window.history.length > 1) {
      window.history.back();
    } else {
      // Fallback behavior or handle the case when history.back() is not available
      console.log('History back not supported');
      // You might want to provide alternative navigation or display a message to the user
    }
  };

  useEffect(() => {
    console.log('Effect is running');
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
        setExercise(result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once, equivalent to componentDidMount

  return (
    <div>
      <HeaderOther pageTitle="" headerUrl="../../src/assets/hero1.jpg" />
      <section className="exercitiiID-wrapper">
        <button className="return-btn" onClick={goBack}>
          Înapoi
        </button>

        <div className="gif">
          <h2>{exercise.name}</h2>
          <img src={exercise.gifUrl} alt={exercise.name} />
        </div>

        <div className="target-equipment">
          <h4>
            Primarily targets: <span>{exercise.target}</span>
          </h4>

          <h4>
            Equipment: <span>{exercise.equipment}</span>
          </h4>
        </div>
      </section>
    </div>
  );
};

export default ExerciseDetail;
