import './App.scss';
import OrderDetails from './components/OrderDetails';
import Item from './components/Item';
import { useState } from 'react';



function App() {
    const shopName = "Cardapio"


    const [items, setItems] = useState([
        {
          id: 1,
          photo: "garde_manger.jpg",
          name: "Garde Manger",
          price: 119.99,
          active: false,
          description: "Alface Crespa, Romana, Radichio, Batata doce, Couve de Bruxelas, Mini Milho, Panzanella, Sardela, Caponata e Babaganoush.",
          isInBag: false
        },
        {
          id: 2,
          photo: "salmon.jpg",
          name: "Salmão Grelhado",
          price: 139.99,
          active: false,
          description: "Salmão grelhado com ervas, legumes salteados e arroz de couve-flor.",
          isInBag: false
        },
        {
          id: 3,
          photo: "steak.jpg",
          name: "Filé Mignon",
          price: 169.99,
          active: false,
          description: "Filé ao molho madeira com purê de batata e brócolis grelhado.",
          isInBag: false
        },
        {
          id: 4,
          photo: "pasta.jpg",
          name: "Pasta Carbonara",
          price: 89.99,
          active: false,
          description: "Pasta com pancetta, parmesão e ovo pochê.",
          isInBag: false
        },
        {
          id: 5,
          photo: "ravioli.jpg",
          name: "Ravioli de Ricota",
          price: 99.99,
          active: false,
          description: "Ravioli de ricota e espinafre com molho de tomate e manjericão.",
          isInBag: false
        },
        {
          id: 6,
          photo: "shrimp.jpg",
          name: "Camarão ao Alho",
          price: 149.99,
          active: false,
          description: "Camarão ao alho com risoto de limão siciliano e aspargos.",
          isInBag: false
        },
        {
          id: 7,
          photo: "lasagna.jpg",
          name: "Lasagna Bolonhesa",
          price: 109.99,
          active: false,
          description: "Lasagna com carne moída, molho de tomate e queijo.",
          isInBag: false
        },
        {
          id: 8,
          photo: "frango.jpeg",
          name: "Frango ao Curry",
          price: 119.99,
          active: false,
          description: "Frango ao molho curry com arroz basmati.",
          isInBag: false
        },
        {
          id: 9,
          photo: "tiramisu.jpg",
          name: "Tiramisu",
          price: 69.99,
          active: false,
          description: "Tiramisu clássico com mascarpone, café e cacau.",
          isInBag: false
        }
      ]);
      
      
      

    const itemsInBag = items.filter(item => item.isInBag)

    

    function selectHandler(id){
        let item = items.filter(item => item.id === id)[0];
        item.isInBag = !item.isInBag;
        setItems(items.map(el => el.id === id ? item : el));

    }

    return ( 
        <>
            <section className="items">
                <h4>{shopName}</h4>


                {items.map(item =>
                    <Item 
                        selectProduct={(id) => selectHandler(id)}
                        quantityProduct={(e, id, increment) => quantityHandler(e, id, increment)}
                        item={item} 
                        key={item.id} 
                    />
                )}
                
                
                
            </section>
            

        </>
    );
}

export default App
