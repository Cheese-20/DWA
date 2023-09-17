//@ts-check

const products = [
    { product: 'banana', price: "2" },
    { product: 'mango', price: 6 },
    { product: 'potato', price: '0' },
    { product: 'avocado', price: "8" },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '0' },
  ];

products.forEach((item) =>{
    console.log(item.product)
});

// filtered products less than 5
const list = products.filter((item) =>{
 return item.product.length <=5
});
console.log(list)

// filter and map and total price 
const mapped = products.map((item)=>{
  return parseInt(item.price)
});

const filteredMap = mapped.filter((val) =>{
  return val > 0
});

const totalPrice = filteredMap.reduce((total , item)=>{
  return total + item
},0)
console.log(totalPrice);

// concatenate products

const concat = products.reduce((word ,item)=>{
    return `${word},${item.product}`
},'')

console.log(concat);

// TODO Highest and lowest 
const prices = products
  .filter((product) => product.price !== '' && !isNaN(parseFloat(product.price)))
  .map((product) => parseFloat(product.price));

const highestPrice = Math.max(...prices);
const lowestPrice = Math.min(...prices);
const highestProduct = products.find((product) => parseFloat(product.price) === highestPrice).product;
const lowestProduct = products.find((product) => parseFloat(product.price) === lowestPrice).product;
console.log(`Highest: ${highestProduct}. Lowest: ${lowestProduct}`);

// TODO New object
const modifiedObject = Object.entries(products).reduce((obj, [key, value]) => {
  const modifiedKey = key === 'product' ? 'name' : 'cost';
  obj[modifiedKey] = value;
  return obj;
}, {});
console.log(modifiedObject);