import React, { useState } from 'react';
import './Menu.scss';

const diasSemana = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];

const Menu = () => {
  const [selectedDay, setSelectedDay] = useState("Segunda");


  return (
    <div>
      <div className="dias-semana">
        {diasSemana.map((dia) => (
          <button
            key={dia}
            className={selectedDay === dia ? 'active' : ''}
            onClick={() => setSelectedDay(dia)}
          >
            {dia}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Menu;
