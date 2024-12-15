import './App.scss';
import OrderDetails from './components/OrderDetails';
import Item from './components/Item';
import Menu from './components/Menu';
import { useState, useEffect } from 'react';
import React from 'react';
import { CardapioService } from './service/CardapioService'; // Corrigido para importar a classe

function App() {
    const shopName = "Cardápio";
    const [cardapios, setCardapios] = useState({});
    const [categoriaSelecionada, setCategoriaSelecionada] = useState('Entrada');
    const [items, setItems] = useState([]);
    const cardapioService = new CardapioService(); // Instancia a classe

    // Carrega os dados do cardápio ao montar o componente
    useEffect(() => {
        const carregarCardapio = async () => {
            try {
                await cardapioService.inicializar(); // Inicializa o serviço e carrega o cache
                const dadosCardapio = cardapioService.getCardapio(); // Obtém os dados do cache
                setCardapios(dadosCardapio); // Atualiza o estado com os dados do cardápio
            } catch (error) {
                console.error("Erro ao carregar o cardápio:", error);
            }
        };

        carregarCardapio();
    }, []); // Dependência da instância do serviço

    // Atualiza os items sempre que a categoria ou os cardápios mudarem
    useEffect(() => {
        setItems(cardapios[categoriaSelecionada]?.items || []);
    }, [categoriaSelecionada, cardapios]);

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
                <h1>{shopName}</h1>
            </div>
            <section className="items">
                <div>
                    <Menu setDiaDaSemana={setCategoriaSelecionada} diaDaSemana={categoriaSelecionada} />
                </div>
                <h2>{categoriaSelecionada}</h2>
                {items?.map(item => (
                    <Item
                        selectProduct={() => selectHandler(item.id)}
                        item={item}
                        key={item.id}
                    />
                ))}
            </section>
        </>
    );
}

export default App;
