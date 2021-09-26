const CART_ITENS = 'cart_itens';

if (!JSON.parse(localStorage.getItem(CART_ITENS))) {
  localStorage.setItem(CART_ITENS, JSON.stringify([]));
}

export const readCartItens = () => JSON.parse(localStorage.getItem(CART_ITENS));

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
        if (!cartI.quantidade) {
          cartI.quantidade = 1;
          cartI.quantidade += 1;
        } else {
          cartI.quantidade += 1;
        }
      }
      return cartI;
    });
    saveCartItens(map);
  } else {
    saveCartItens([...cart, item]);
  }
};

export const subFromCart = (item) => {
  const cart = readCartItens();
  if (item.quantidade !== 1) {
    const map = cart.map((cartItem) => {
      if (cartItem.id === item.id) {
        cartItem.quantidade -= 1;
        if (cartItem.quantidade === 0) {
          cartItem.quantidade = 1;
        }
      }
      return cartItem;
    });
    saveCartItens(map);
  } else {
    item.quantidade -= 1;
  }
};
