import './App.scss';
import OrderDetails from './components/OrderDetails';
import Item from './components/Item';
import Menu from './components/Menu';
import { useState, useEffect } from 'react';
import React from 'react';

function App() {
    const shopName = "Cardapio";
    const cardapios = {
        "Segunda": {
            items: [
                {
                    id: 1,
                    photo: "garde_manger.jpg",
                    name: "Garde Manger",
                    price: 119.99,
                    active: false,
                    description: "Alface Crespa, Romana, Radichio, Batata doce, Couve de Bruxelas, Mini Milho, Panzanella, Sardela, Caponata e Babaganoush.",
                    Conditionalrendering: false
                },
                {
                    id: 2,
                    photo: "salmon.jpg",
                    name: "Salmão Grelhado",
                    price: 139.99,
                    active: false,
                    description: "Salmão grelhado com ervas, legumes salteados e arroz de couve-flor.",
                    Conditionalrendering: false
                },
                {
                    id: 3,
                    photo: "steak.jpg",
                    name: "Filé Mignon",
                    price: 169.99,
                    active: false,
                    description: "Filé ao molho madeira com purê de batata e brócolis grelhado.",
                    Conditionalrendering: false
                },
                {
                    id: 4,
                    photo: "pasta.jpg",
                    name: "Pasta Carbonara",
                    price: 89.99,
                    active: false,
                    description: "Pasta com pancetta, parmesão e ovo pochê.",
                    Conditionalrendering: false
                },
                {
                    id: 5,
                    photo: "ravioli.jpg",
                    name: "Ravioli de Ricota",
                    price: 99.99,
                    active: false,
                    description: "Ravioli de ricota e espinafre com molho de tomate e manjericão.",
                    Conditionalrendering: false
                },
                {
                    id: 6,
                    photo: "shrimp.jpg",
                    name: "Camarão ao Alho",
                    price: 149.99,
                    active: false,
                    description: "Camarão ao alho com risoto de limão siciliano e aspargos.",
                    Conditionalrendering: false
                },
                {
                    id: 7,
                    photo: "lasagna.jpg",
                    name: "Lasagna Bolonhesa",
                    price: 109.99,
                    active: false,
                    description: "Lasagna com carne moída, molho de tomate e queijo.",
                    Conditionalrendering: false
                },
                {
                    id: 8,
                    photo: "frango.jpeg",
                    name: "Frango ao Curry",
                    price: 119.99,
                    active: false,
                    description: "Frango ao molho curry com arroz basmati.",
                    Conditionalrendering: false
                },
                {
                    id: 9,
                    photo: "tiramisu.jpg",
                    name: "Tiramisu",
                    price: 69.99,
                    active: false,
                    description: "Tiramisu clássico com mascarpone, café e cacau.",
                    Conditionalrendering: false
                }
            ]
        },
        "Terça": {
            items: [
                {
                    id: 10,
                    photo: "vegetable_stir_fry.webp",
                    name: "Refogado de Legumes",
                    price: 79.99,
                    active: false,
                    description: "Mistura de legumes frescos salteados com molho de soja e gengibre.",
                    Conditionalrendering: false
                },
                {
                    id: 11,
                    photo: "chicken_soup.webp",
                    name: "Sopa de Frango",
                    price: 69.99,
                    active: false,
                    description: "Sopa de frango com legumes e macarrão caseiro.",
                    Conditionalrendering: false
                },
                {
                    id: 12,
                    photo: "quiche.jpeg",
                    name: "Quiche de Alho-Poró",
                    price: 89.99,
                    active: false,
                    description: "Quiche recheada com alho-poró e queijo, acompanhada de salada.",
                    Conditionalrendering: false
                },
                {
                    id: 13,
                    photo: "brownie.jpg",
                    name: "Brownie de Chocolate",
                    price: 39.99,
                    active: false,
                    description: "Brownie de chocolate com nozes, servido com sorvete de baunilha.",
                    Conditionalrendering: false
                }
            ]
        }
    };

    const [diaSelecionado, setDiaSelecionado] = useState('Segunda');
    const [items, setItems] = useState(cardapios[diaSelecionado]?.items || []);

    useEffect(() => {
        setItems(cardapios[diaSelecionado]?.items || []);
    }, [diaSelecionado]);

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
            <div>
                <Menu diaDaSemana={diaSelecionado} setDiaDaSemana={setDiaSelecionado} />
            </div>

            <section className="items">
                <h4 style={{ color: 'white' }}>{shopName}</h4>

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
