
// // Array destructuring
// const companies = [ 'Dell', 'Infosys', 'Wipro', 'Apple' ];
// // let c1 = companies[0];
// // let c2 = companies[1];

// let [ c1, c2, ...others ] = companies;

// console.log(c1);
// console.log(c2);
// console.log(others);

const company = {
  name1: 'Dell',
  address: {
    line1: 'Divyasree Greens',
    place: 'Bangalore',
  },
  country: 'India'
};

// const name1 = company.name1;

const { 
  name1: name2, 
  country, 
  address: { place } 
} = company;

// console.log(company);
console.log(name2);
console.log(country);
console.log(place);
