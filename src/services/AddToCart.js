const CART_ITENS = 'cart_itens';

if (!JSON.parse(localStorage.getItem(CART_ITENS))) {
  localStorage.setItem(CART_ITENS, JSON.stringify([]));
}
// adicionando chave
const readCartItens = () => JSON.parse(localStorage.getItem(CART_ITENS));

// salvando
const saveCartItens = (cartItens) => localStorage
  .setItem(CART_ITENS, JSON.stringify(cartItens));

export const getCartItens = async () => {
  const cart = await readCartItens();
  return cart;
};

export const addToCart = async (item) => {
  if (item) {
    const cart = await readCartItens();
    saveCartItens([...cart, item]);
  }
};
