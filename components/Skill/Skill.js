import React from 'react';

const Skill = ({ name, icon }) => (
    <div className="block-div">
        {icon()}
        <p>{name}</p>    
    </div>
);

export default Skill;