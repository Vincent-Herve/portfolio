import React from 'react';
import axios from 'axios';
import download from 'downloadjs';

const About = () => {
    const handleClick = () => {
        axios({
            url: 'http://www.vincentherve.fr',
            method: 'GET',
            responseType: 'blob'
        }).then((res) => {
            download(new Blob([res.data]), 'cv.pdf', 'application/pdf');        
        }).catch((error) => {
            console.error(error);
        });        
    };
    
    return (
        <div className="about">
            <h1>A propos de moi</h1>
            <p>
                Développeur web en reconversion professionnelle, motivé
                curieux, et passionné, j'ai suivi une formation de Développeur Web et Web mobile à l'école Oclock.
                Je suis à l'écoute d'opportunités et disponible dès
                maintenant sur Marseille et environs et / ou télétravail.
            </p>
            <div className="div-download" onClick={handleClick}>Télécharger mon CV</div>
        </div>
    );
};

export default About;