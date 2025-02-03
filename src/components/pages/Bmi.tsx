import React from "react";
import { useState } from "react";

//height
//weight
//bmi
function Bmi() {
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [bmi , setBmi] = useState<number>(0);

  const handleSubmitted = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(weight);
    console.log(height);
    const bmi = weight / (height / 100) ** 2;
    console.log(bmi);
    setBmi(bmi);
  };
  const handleWeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(Number(event.target.value));
    console.log(weight);
  };
  const handleHeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(Number(event.target.value));
    console.log(height);
  };
  return (
    <div>
      <div>BMI Calculate</div>
      <h1>{bmi}</h1>
      <form onSubmit={handleSubmitted}>
        <div>
          <label htmlFor="weight">Weight</label>
          <input onChange={handleWeightChange} type="text" id="weight" />
        </div>
        <div>
          <label htmlFor="height">Height</label>
          <input onChange={handleHeightChange} type="text" id="height" />
        </div>
        <input type="submit" value="Submit" />
      </form> 
    </div>
  );
}
// น้ำหนัก / ส่วนสูง ^ 2
export default Bmi;
