import React from 'react'
import { useState, useEffect } from 'react'
import "./Drinkwater.css"
import '@fortawesome/fontawesome-free/css/all.min.css';


function Dringwater() {
    const [weight, setWeight] = useState<number>(0);
    const [water, setWater] = useState<number>(0);
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    const handleSubmitted = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const calculatedWater = weight * 2.2 * 30/2;
        console.log("water", water);
        setWater(calculatedWater);
    };

    const handleWeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWeight(Number(event.target.value));
        console.log("weight", weight);
    };

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    const toggleTheme = (selectedTheme: 'light' | 'dark') => {
        setTheme(selectedTheme);
    }


  return (
    <div>
        <div className="container">
            {/*dropdown change mode dark and light */}
            <div className="dropdown">
                <button className="dropdown-btn">{theme === 'light' ? 'Mode: Light' : 'Mode: Dark'}
                    <i className="fas fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                    <a href="#" onClick={() => toggleTheme('light')}>Light</a>
                    <a href="#" onClick={() => toggleTheme('dark')}>Dark</a>
                </div>
            </div>
            {/*end dropdown change mode dark and light */}

            <h1>คุณควรดื่มน้ำวันละเท่าไหร่ ??</h1>

            <form onSubmit={handleSubmitted}>
                <div>
                    <label className='label' htmlFor="weight">น้ำหนัก</label>
                    <input onChange={handleWeightChange} type="number" id="weight" placeholder='ระบุตัวเลข (กิโลกรัม)'></input>
                </div>

                <button className='btn' type='submit'>คำนวณ</button>
            </form>

            {/* result */}
            <h1>= {water.toFixed(2)} มิลลิลิตร.</h1>
            <h1>= {(water/1000).toFixed(2)} ลิตร</h1>
        </div>
    </div>

  )
}

export default Dringwater