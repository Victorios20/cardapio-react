import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

function Item({ item, selectProduct, quantityProduct }) {
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleSelectProduct = (id, Conditionalrendering) => {
    selectProduct(id); // Atualiza o estado do item
    if (!Conditionalrendering) {
      setSnackbarOpen(true); // Exibe o Snackbar se a condição for verdadeira
    } else {
        setSnackbarOpen(false);
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <>
      <div
        onClick={() =>
          handleSelectProduct(item.id, item.Conditionalrendering)
        }
        className={`product ${item.Conditionalrendering ? "selected" : ""}`}
      >
        <div className="photo">
          <img src={"./img/" + item.photo} alt={item.name} />
        </div>
        <div className="description">
          <span className="name">{item.name}</span>
          <span className="price">$ {item.price}</span>

          {item.Conditionalrendering && (
            <div className="quantity-area">
              <h3>
                <span className="descrição">Descrição do prato: </span>
              </h3>
              <span className="name">{item.description}</span>
            </div>
          )}
        </div>
      </div>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: "100%" }}>
          {`Você selecionou: ${item.name}`}
        </Alert>
      </Snackbar>
    </>
  );
}

export default Item;
