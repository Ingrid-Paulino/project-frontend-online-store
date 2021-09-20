export async function getCategories() {
  const fetchAPI = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const jsonFetchAPI = await fetchAPI.json();
  return jsonFetchAPI;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const fetchAPI = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const jsonFetchAPI = await fetchAPI.json();
  return jsonFetchAPI;
}
