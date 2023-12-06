import React from 'react';
import { useState } from 'react';
import HeaderOther from '../HeaderOther/HeaderOther';
import './IMC.css';
import Footer from '../Footer/Footer';

const IMC = () => {
  //BMI API
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmiResult, setBmiResult] = useState(null);
  const [buttonClicked, setButtonClicked] = useState(false);
  const BMICalculator = async () => {
    const url = `https://fitness-calculator.p.rapidapi.com/bmi?age=${age}&weight=${weight}&height=${height}`;

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'd0a44fa0d1mshfd0e5059b7877f4p1d2de4jsnccf8f78e6f51',
        'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com',
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      setBmiResult(result);
      setButtonClicked(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <HeaderOther pageTitle="IMC" headerUrl="../src/assets/hero1.jpg" />
      <section className="IMC-wrapper">
        <h1 className="h1">Calculator indice de masă corporală</h1>
        <p className="p">
          Indicele de Masă Corporală (IMC) este o măsură numerică a greutății
          unei persoane în raport cu înălțimea sa, utilizată pentru a evalua
          starea generală a greutății corporale.
        </p>
        <div className="form-input-wrapper">
          <div className="IMC-input">
            <form className="IMC-form-wrapper form-wrapper">
              <input
                type="number"
                placeholder="Vârstă"
                name="user_age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
              />
              <input
                type="number"
                placeholder="Greutate (kg)"
                name="user_weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
              />
              <input
                type="number"
                placeholder="înălțime (cm)"
                name="user_height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={BMICalculator}
                className="button-calculeaza"
              >
                Calculează
              </button>
            </form>
          </div>
          <div className="IMC-table">
            <table className="my-table">
              <thead>
                <tr>
                  <th className="table-header-cell">IMC</th>
                  <th className="table-header-cell">Starea greutății</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="table-cell">Sub 18.5</td>
                  <td className="table-cell">Subponderal</td>
                </tr>
                <tr>
                  <td className="table-cell">18,5 - 24,9</td>
                  <td className="table-cell">Sănătos</td>
                </tr>
                <tr>
                  <td className="table-cell">25,0 - 29,9</td>
                  <td className="table-cell">Supraponderal</td>
                </tr>
                <tr>
                  <td className="table-cell">30,0 sau peste</td>
                  <td className="table-cell">Obez</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {buttonClicked && (
          <p className="imc-result">Rezultat: {bmiResult?.data?.bmi}</p>
        )}
      </section>
      <Footer />
    </>
  );
};

export default IMC;
