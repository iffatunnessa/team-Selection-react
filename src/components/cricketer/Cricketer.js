import React, { useEffect, useState } from 'react';
import cricketerData from '../../fakeData/data.json';
import Club from '../club/Club';
import IndividualCricketer from '../IndividualCricketer/IndividualCricketer';

import './Cricketer.css';

const Cricketer = () => {
    const [cricketers, setCricketer]= useState(cricketerData);
    const [player, setPlayer] =useState([]);
    useEffect(()=>{
        setCricketer(cricketerData);
    }, []);
    const handleAddPlayer= (cricketer) =>{
        const newClub = [...player, cricketer];
        setPlayer(newClub);
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-8 individual-container">
                {
                    cricketers.map(cricketer=> <IndividualCricketer handleAddPlayer ={handleAddPlayer} cricketer={cricketer} ></IndividualCricketer>)
                }
                </div>
                <div className="col-3 club-container">
                    <Club player={player}></Club>
                </div>
            </div>
            
        </div>
    );
};

export default Cricketer;