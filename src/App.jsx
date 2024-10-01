import './App.scss';
import OrderDetails from './components/OrderDetails';
import Item from './components/Item';
import Menu from './components/Menu';
import { useState, useEffect } from 'react';
import React from 'react';

function App() {
    const shopName = "Cardápio";
    const cardapios = {
        "Entrada": {
          items: [
            {
              id: 1,
              photo: "bruschetta.jpg",
              name: "Bruschetta",
              price: 49.99,
              active: false,
              description: "Pão tostado com tomate, manjericão e azeite de oliva.",
              Conditionalrendering: false
            },
            {
              id: 2,
              photo: "ceviche.jpg",
              name: "Ceviche",
              price: 79.99,
              active: false,
              description: "Ceviche de peixe branco com limão, coentro e cebola roxa.",
              Conditionalrendering: false
            },
            {
              id: 3,
              photo: "camarao_cocktail.jpg",
              name: "Coquetel de Camarão",
              price: 89.99,
              active: false,
              description: "Camarões com molho coquetel, servidos com limão.",
              Conditionalrendering: false
            },
            {
              id: 4,
              photo: "carpaccio.jpg",
              name: "Carpaccio",
              price: 99.99,
              active: false,
              description: "Carpaccio de carne com lascas de parmesão e rúcula.",
              Conditionalrendering: false
            },
            {
              id: 5,
              photo: "salada_caprese.jpg",
              name: "Salada Caprese",
              price: 69.99,
              active: false,
              description: "Tomate, mussarela de búfala, manjericão e azeite de oliva.",
              Conditionalrendering: false
            },
            {
              id: 6,
              photo: "croquete.jpg",
              name: "Croquete de Carne",
              price: 59.99,
              active: false,
              description: "Croquete de carne moída empanado, servido com molho de mostarda.",
              Conditionalrendering: false
            }
          ]
        },
        "Principal": {
          items: [
            {
              id: 7,
              photo: "garde_manger.jpg",
              name: "Garde Manger",
              price: 119.99,
              active: false,
              description: "Alface Crespa, Romana, Radichio, Batata doce, Couve de Bruxelas, Mini Milho, Panzanella, Sardela, Caponata e Babaganoush.",
              Conditionalrendering: false
            },
            {
              id: 8,
              photo: "salmon.jpg",
              name: "Salmão Grelhado",
              price: 139.99,
              active: false,
              description: "Salmão grelhado com ervas, legumes salteados e arroz de couve-flor.",
              Conditionalrendering: false
            },
            {
              id: 9,
              photo: "steak.jpg",
              name: "Filé Mignon",
              price: 169.99,
              active: false,
              description: "Filé ao molho madeira com purê de batata e brócolis grelhado.",
              Conditionalrendering: false
            },
            {
              id: 10,
              photo: "pasta.jpg",
              name: "Pasta Carbonara",
              price: 89.99,
              active: false,
              description: "Pasta com pancetta, parmesão e ovo pochê.",
              Conditionalrendering: false
            },
            {
              id: 11,
              photo: "ravioli.jpg",
              name: "Ravioli de Ricota",
              price: 99.99,
              active: false,
              description: "Ravioli de ricota e espinafre com molho de tomate e manjericão.",
              Conditionalrendering: false
            },
            {
              id: 12,
              photo: "shrimp.jpg",
              name: "Camarão ao Alho",
              price: 149.99,
              active: false,
              description: "Camarão ao alho com risoto de limão siciliano e aspargos.",
              Conditionalrendering: false
            },
            {
              id: 13,
              photo: "lasagna.jpg",
              name: "Lasagna Bolonhesa",
              price: 109.99,
              active: false,
              description: "Lasagna com carne moída, molho de tomate e queijo.",
              Conditionalrendering: false
            },
            {
              id: 14,
              photo: "frango.jpeg",
              name: "Frango ao Curry",
              price: 119.99,
              active: false,
              description: "Frango ao molho curry com arroz basmati.",
              Conditionalrendering: false
            },
            {
              id: 15,
              photo: "quiche.jpeg",
              name: "Quiche de Alho-Poró",
              price: 89.99,
              active: false,
              description: "Quiche recheada com alho-poró e queijo, acompanhada de salada.",
              Conditionalrendering: false
            }
          ]
        },
        "Sobremesa": {
          items: [
            {
              id: 16,
              photo: "tiramisu.jpg",
              name: "Tiramisu",
              price: 69.99,
              active: false,
              description: "Tiramisu clássico com mascarpone, café e cacau.",
              Conditionalrendering: false
            },
            {
              id: 17,
              photo: "brownie.jpg",
              name: "Brownie de Chocolate",
              price: 39.99,
              active: false,
              description: "Brownie de chocolate com nozes, servido com sorvete de baunilha.",
              Conditionalrendering: false
            },
            {
              id: 18,
              photo: "cheesecake.jpg",
              name: "Cheesecake",
              price: 59.99,
              active: false,
              description: "Cheesecake com calda de frutas vermelhas.",
              Conditionalrendering: false
            },
            {
              id: 19,
              photo: "mousse_chocolate.jpg",
              name: "Mousse de Chocolate",
              price: 49.99,
              active: false,
              description: "Mousse de chocolate amargo com raspas de chocolate branco.",
              Conditionalrendering: false
            },
            {
              id: 20,
              photo: "pudim.jpg",
              name: "Pudim de Leite",
              price: 34.99,
              active: false,
              description: "Pudim de leite condensado com calda de caramelo.",
              Conditionalrendering: false
            },
            {
              id: 21,
              photo: "sorvete.jpg",
              name: "Sorvete Artesanal",
              price: 29.99,
              active: false,
              description: "Sorvete artesanal de baunilha, chocolate ou morango.",
              Conditionalrendering: false
            }
          ]
        },
        "Bebidas": {
          items: [
            {
              id: 22,
              photo: "suco_laranja.jpg",
              name: "Suco de Laranja",
              price: 19.99,
              active: false,
              description: "Suco natural de laranja espremido na hora.",
              Conditionalrendering: false
            },
            {
              id: 23,
              photo: "agua_coco.jpg",
              name: "Água de Coco",
              price: 14.99,
              active: false,
              description: "Água de coco natural.",
              Conditionalrendering: false
            },
            {
              id: 24,
              photo: "refrigerante.jpg",
              name: "Refrigerante",
              price: 9.99,
              active: false,
              description: "Opções: Coca-Cola, Fanta, Guaraná.",
              Conditionalrendering: false
            },
            {
              id: 25,
              photo: "vinho_tinto.jpg",
              name: "Vinho Tinto",
              price: 79.99,
              active: false,
              description: "Vinho tinto seco, safra selecionada.",
              Conditionalrendering: false
            },
            {
              id: 26,
              photo: "caipirinha.jpg",
              name: "Caipirinha",
              price: 29.99,
              active: false,
              description: "Caipirinha clássica com cachaça, limão e açúcar.",
              Conditionalrendering: false
            },
            {
              id: 27,
              photo: "agua.jpg",
              name: "Água Mineral",
              price: 5.99,
              active: false,
              description: "Água mineral com ou sem gás.",
              Conditionalrendering: false
            }
          ]
        }
      };
      
      

    const [categoriaSelecionada, setCategoriaSelecionada] = useState('Principal');
    const [items, setItems] = useState(cardapios[categoriaSelecionada]?.items || []);

    useEffect(() => {
        setItems(cardapios[categoriaSelecionada]?.items || []);
    }, [categoriaSelecionada]);

    function selectHandler(itemId) {
        const updatedItems = items.map(item => {
            if (item.id === itemId) {
                return { ...item, Conditionalrendering: !item.Conditionalrendering };
            }
            return item;
        });
        setItems(updatedItems);
    }

    return (
        <>
            



            <div className="titulo">
            <h1>Cardápio</h1>
            </div>
            <section className="items">
                    <div>
                    <Menu setDiaDaSemana={setCategoriaSelecionada} diaDaSemana={categoriaSelecionada} />

                    </div>
                    <h2>{categoriaSelecionada}</h2>
                     
                {
                    items?.map(item => (
                        <Item
                            selectProduct={() => selectHandler(item.id)}
                            item={item}
                            key={item.id}
                        />
                    ))
                }
            </section>
            
        </>
    );
}

export default App;
