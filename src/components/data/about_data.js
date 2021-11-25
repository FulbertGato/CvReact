import React from 'react';

import frontend from '../../assets/icons/frontend.svg'
import backend from '../../assets/icons/backend.svg'
import settings from '../../assets/icons/settings.svg'
import game from '../../assets/icons/mobile.svg'
import ux from '../../assets/icons/uxui.svg'
import manage from '../../assets/icons/manage.svg'


const skills = [
    {
        icon: frontend,
        title: "Frontend Development",
        about: "Je peux créer un interface client  magnifique et évolutif en utilisant HTML, CSS, React.js et Angular"
    },

    {
        icon: backend,
        title: "Backend Development",
        about: " JavaScript (Express.JS , Node.js), Php (Symfony, Laravel), Python (Django), Java "
    },
    {
        icon: settings,
        title: "Maintenance de site ",
        about: "Je peux assurer la Maintenance de votre site peut importe la technologie utilisé",
    },
    {
        icon: game,
        title: "Mobile Development",
        about: "Je suis capable de dévélopper des applications mobiles sur mésure !"
    },
    {
        icon: ux,
        title: "UI/UX designer",
        about: "concepteur d'interface utilisateur minimaliste utilisant figma et Adobe XD"
    },
    {
        icon: manage,
        title: "Projet managment",
        about: "Mes compétences me permettent de gérer vos projects de la phase analyse en passant par la conception jusqu'en mise en production"
    },
]

export default skills;
