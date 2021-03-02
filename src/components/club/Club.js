import React from 'react';
import Member from '../Member/Member';
import './Club.css';

const Club = (props) => {
    const player = props.player;
    const total = player.reduce( (total,plyer) => total+ plyer.salary ,0);
    
    return (
        <div>
            <h4>Dhaka Platoon Team selection</h4>
            <p>Total Members : {player.length} </p>
            <p>Total Expense: ${total.toFixed(2)}</p>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">Member</th>
                    <th scope="col">Salary</th>
                </tr>
                </thead>
                <tbody>
                   
                    {
                        player.map(ck=> <Member member={ck} count={player.count}></Member>)
                    }
                   
                   </tbody>
           </table>
            
        </div>
    );
};
export default Club;