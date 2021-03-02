import React from 'react';
import './individualStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';


const IndividualCricketer = (props) => {
    const {first_name, last_name, image, salary} = props.cricketer;
    return (
        <div className="card">
            <img src={image} alt=""/>
            <div className="card-body">
                <h6 className="card-title">{first_name} {last_name}</h6>
                <p className="card-text">${salary}</p>
                <button className="btn btn-primary" onClick={()=>props.handleAddPlayer(props.cricketer)}><FontAwesomeIcon icon={faUsers}/> Add in Club</button>
            </div>
        </div>
        
    );
};
export default IndividualCricketer;