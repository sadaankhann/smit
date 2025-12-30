const people = [
    { age: 16, fullName: "Ali Khan", country: "Pakistan" },
    { age: 25, fullName: "Sara Ahmed", country: "Pakistan" },
    { age: 30, fullName: "John Smith", country: "USA" },
    { age: 12, fullName: "Emma Brown", country: "UK" },
    { age: 22, fullName: "Ayesha Malik", country: "Pakistan" },
    { age: 35, fullName: "Michael Johnson", country: "Canada" },
    { age: 27, fullName: "Fatima Noor", country: "Pakistan" },
    { age: 40, fullName: "David Wilson", country: "Australia" },
    { age: 14, fullName: "Hassan Raza", country: "Pakistan" },
    { age: 33, fullName: "Sophia Lee", country: "South Korea" }
];
const changedPeople = people.filter((elem) => {
    return elem.age > 18;
})
console.log(changedPeople);