const CART_ITENS = 'cart_itens';

if (!JSON.parse(localStorage.getItem(CART_ITENS))) {
  localStorage.setItem(CART_ITENS, JSON.stringify([]));
}

const readCartItens = () => JSON.parse(localStorage.getItem(CART_ITENS));

const saveCartItens = (cartItens) => localStorage
  .setItem(CART_ITENS, JSON.stringify(cartItens));

export const getCartItens = () => {
  const cart = readCartItens();
  return cart;
};

export const addToCart = (item) => {
  const cart = readCartItens();
  if (cart.some((cartItem) => cartItem.id === item.id)) {
    const map = cart.map((cartI) => {
      if (cartI.id === item.id) {
        if (cartI.quantidade) {
          cartI.quantidade += 1;
        } else {
          cartI.quantidade = 2;
        }
      }
      return cartI;
    });
    saveCartItens(map);
  } else {
    saveCartItens([...cart, item]);
  }
};
