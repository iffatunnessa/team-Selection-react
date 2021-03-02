import React from 'react';

const Member = (props) => {
    const member = props.member;
    console.log(props);
    return (
        <tr>
            <td>{member.first_name} {member.last_name}</td>
            <td>${member.salary}</td>
        </tr>
        
    );
};

export default Member;