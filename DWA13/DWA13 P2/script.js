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
},'');

console.log(concat);

// TODO: Display Highest product 
const highestPrice = products.reduce((previous, current, index) => {

  if ( parseInt(current.price) > previous) {
    return current.price;
  } else {
    return previous;
  }
  },0);

console.log(`highest: ${highestPrice}`);

const lowestPrice = products.reduce((previous, current) => {
  if (current.price !== '' && parseInt(current.price) < previous) {
    return current.product;
  } else {
    return previous;
  }
});

console.log(`lowest: ${lowestPrice.product}`)


// TODO New object

const sObject = Object.entries(products).reduce((obj, [key, value]) => {

}, {});
console.log(sobj);