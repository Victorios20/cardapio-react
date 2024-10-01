import React, { useState } from 'react';
import './Menu.scss';


const categorias = [
  { "label": "Entrada", "value": "entrada" },
  { "label": "Principal", "value": "principal" },
  { "label": "Sobremesa", "value": "sobremesa" },
  { "label": "Bebidas", "value": "bebidas" }
];


const Menu = ({setDiaDaSemana, diaDaSemana}) => {


  return (
    <div>
      <div className="categorias">
        {categorias.map((categoria) => (
          <button
            key={categoria.value}
            className={diaDaSemana === categoria.label ? 'active' : ''}
            onClick={() => setDiaDaSemana(categoria.label)}
          >
            {categoria.label}
          </button>
  ))}
</div>

    </div>
  );
};

export default Menu;
