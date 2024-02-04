export const ProductData =  async () => {
    const response = await fetch('https://fakestoreapiserver.reactbd.com/products');
    const data = await response.json();
    return data;
}