import React, { useState } from 'react';
import './Menu.scss';

const diasSemana = [
  { "label": "Segunda", "value": "segunda" },
  { "label": "Terça", "value": "terça" },
  { "label": "Quarta", "value": "quarta" },
  { "label": "Quinta", "value": "quinta" },
  { "label": "Sexta", "value": "sexta" },
  { "label": "Sábado", "value": "sábado" },
  { "label": "Domingo", "value": "domingo" }
]


const Menu = ({setDiaDaSemana, diaDaSemana}) => {


  return (
    <div>
      <div className="dias-semana">
        {diasSemana.map((dia) => (
          <button
            key={dia.value}
            className={diaDaSemana === dia.label ? 'active' : ''}
            onClick={() => setDiaDaSemana(dia.label)}
          >
            {dia.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Menu;
