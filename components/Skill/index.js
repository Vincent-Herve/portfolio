import React from 'react';
import SkillIcon from './Skill';
import iconList from './icon-list';

const Skill = () => (
    <div className="skill">
        <h1>Compétences</h1>
        <div className="block">
            {iconList.map((value) =><SkillIcon name={value.name} icon={value.icon} key={value.name} />)} 
        </div>
    </div>
);

export default Skill;