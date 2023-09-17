//@ts-check

const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];

//!logging names
names.forEach(names =>{
    console.log(names)
});

// !name and province
names.forEach((nest,index) =>{ 
    console.log(`${nest}(${provinces[index]})`)
});
// !uppercase province
const result = provinces.map((item) =>{
    return item.toUpperCase()
});
console.log(result);
// !name lengths 
const nameLength = names.map((item)=>{
    return item.length
});
console.log(nameLength);
// !provinces sorted
console.log(provinces.toSorted());
// !filter 
const capeFilter = provinces.filter((item, index) =>{
   return !item.includes(' Cape');
});
console.log(capeFilter.length)

// ! contains s
const sCharacter = names.map((item) =>{
    return item.split('').some(string=>{
        string.toUpperCase()==='S'
    });
});
console.log(sCharacter)

// const hasSCharacter = names.map(name => name.split('').some(char => char.toUpperCase() === 'S'));

// const individualsProvince = names.reduce((provinceObj, name, index) => {
//     provinceObj[name] = provinces[index];
//     return provinceObj }, 
//     {});
  
//   console.log('individualsProvince: ', individualsProvince);