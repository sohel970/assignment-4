// problem-1 

// function  calculateMoney(ticketSale){
//   if (ticketSale > 0){
//     const ticketPrice= 120;
//     const gurdSalary= 500;
//     const staffLunch= 50;
     
//       const totalSale = ticketPrice * ticketSale;
//       const totalCost = gurdSalary + (staffLunch)*8;
//       const dailyIncome = totalSale - totalCost;
//  return dailyIncome;
//   } 
//   else{
//     return "Inavalid Number";
//   }
// }
// const ticketSale = -20;
// const totalIcome = calculateMoney(ticketSale);
// console.log("Total Daily Income:" ,totalIcome);



// problem-2

// function checkName(name) {

//     if (typeof name !== 'string') {
//         return "invalid";
//     }

//     name = name.toLowerCase();

//     if (name.endsWith["A, y, i , e , o , u, w"]) {
//         return "Bad Name";
//     }
//     for (let i = 0; i < forbiddenNames.length; i++) {
//         if (name.includes(forbiddenNames[i])) {
//             return "Bad Name";
//         }
//     }

//     return "Good Name";
// }

// console.log(checkName("Salman")); // Output: Good Name





// problem-3

// function deleteInvalids(array) {
//     if (!Array.isArray(array)) {
//         return "Error: Input must be an array.";
//     }
// {
    
//     const result = array.filter(item => typeof item === 'number' && !isNaN(item));

//     return result;
// }
// }
// const inputArray =[1,5 ] ;
// console.log(deleteInvalids(inputArray));
// const inputArray1 ={num: [ 1 , 2 , 3 ]}  ;
// console.log(deleteInvalids(inputArray1));



// problem-4
function password(info) {
    if (typeof info !== 'object' || info === null) {
        return "invalid";
    }

    if (!info.name || !info.birthYear || !info.siteName ||
        typeof info.name !== 'string' ||
        typeof info.birthYear !== 'number' || 
        info.birthYear < 1000 || info.birthYear >= 10000 ||
        typeof info.siteName !== 'string') {
        return "invalid";
    }
 
    const password = `${info.siteName}#${info.name}@${info.birthYear}`;
    
    return password;
}

const userInfo = { name: 5545, birthYear:1100, siteName: "youtube" };
console.log(password(userInfo)); 
