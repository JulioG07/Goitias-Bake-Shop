//CoffeID: price_1NctyuLxYWMyETBmHWWpcdEi
//SunglassesID: price_1NctzoLxYWMyETBmtmhJWJ5l
//CameraID: price_1Ncu0cLxYWMyETBm2rzcXvh9

const productsArray = [
  { // line 6-20 are test items 
    id: "price_1NctyuLxYWMyETBmHWWpcdEi",
    title: "Coffe",
    price: 4.99
  },
  {
    id: "price_1NctzoLxYWMyETBmtmhJWJ5l",
    title: "Sunglasses",
    price: 9.99
  },
  {
    id: "price_1Ncu0cLxYWMyETBm2rzcXvh9",
    title: "Camera",
    price: 39.99
  },
  { // CAKE CATEGORY 
    id: "price_1NdEJOLxYWMyETBmGjOUF57o",
    title: "Tres Leches Cake",
    price: 20.00
  },
  {
    id: "price_1NdEKQLxYWMyETBmBuDfhRV2",
    title: "Selva Negra Cake",
    price: 25.00
  },
  {
    id: "price_1NdENeLxYWMyETBmSH5xXhsL",
    title: "Torta De Piña",
    price: 25.00
  },
  {
    id: "price_1NdEY5LxYWMyETBmBDp75nsS",
    title: "Red Velvet Cake ",
    price: 25.00
  },
  {
    id: "price_1Nf2heLxYWMyETBmvkKpnQsm",
    title: "Carrot Cake",
    price: 20.00
  },
  { //CUPCAKE CATEGORY
    id: "price_1Nf4OJLxYWMyETBmwlQSQaAX",
    title: "Oreo Cupcake",
    price: 13.00
  },
  {
    id: "price_1Nf4XQLxYWMyETBm8KdGzloX",
    title: "Corn Cupcake",
    price: 12.00
  },
  {
    id: "price_1Nf4YNLxYWMyETBmOTYIqTAJ",
    title: "Blueberry Cupcake",
    price: 13.00
  },
  {  //DULCE CATEGORY
    id: "price_1Nf4fALxYWMyETBmXD3aNl39",
    title: "Quesillo",
    price: 17.50
  },
  {
    id: "price_1Nf4gmLxYWMyETBmFTtndcz3",
    title: "Conserva de Leche",
    price: 10.00
  },
  { //COOKIE CATEGORY
    id: "price_1Nf4iBLxYWMyETBmhMF0IdHq",
    title: "Sugar Cookies",
    price: 10.00
  }
];

function getProductData(id) {
  let productData = productsArray.find((product) => product.id === id);

  if (productData == undefined) {
    console.log("Product data does not exist for ID: " + id);
    return undefined;
  }

  return productData;
}

export { productsArray, getProductData };
