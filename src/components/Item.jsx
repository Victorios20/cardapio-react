function Item ({item, selectProduct, quantityProduct}){

    


    return(
    <>
                    <div onClick={() => selectProduct(item.id)} className={`product ${item.isInBag ? 'selected' : ''}`}>
                    <div className="photo">
                        <img src={"./img/" + item.photo} />
                    </div>
                    <div className="description">
                        <span className="name">{item.name}</span>
                        <span className="price">$ {item.price}</span>

                        {item.isInBag &&

                        <div className="quantity-area">
                            <h3><span className="descrição">Descrição do prato: </span></h3>
                            <span className="name">{item.description}</span>
                        </div>
                        }
                    </div>
                </div>
    </>
    )
}
export default Item