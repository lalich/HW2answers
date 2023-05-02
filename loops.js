// //1// 0 to 99

for (let i = 0; i <100; i++) 
console.log(i)

// //2// 99 to 0

for (let i = 99; i>=0; i--)
console.log(i)

//3// even count to 98   
for (let i = 0; i <=98; i++) {
    if(i % 2 == 0){ 
    console.log(i);
    }
}

//4//  98-0 even   *****
for (let i = 99; i>=0; i--)
{
    if(i % 2 == 0){ 
    console.log(i);
    }
}

// //5// 0 to 99 odd  ******

for (let i = 0; i <100; i++) {
    if(i % 2 !== 0){ 
    console.log(i);
    }
}

//6// 99 to 0 odd   *******

for (let i = 99; i>=0; i--) {
    if(i % 2 !== 0){ 
    console.log(i);
    }
}


// 7 // 49 - 72 ascending

for (let i = 49; i <73; i++) 
console.log(i)


// 8 // 81-26 decending

for (let i = 81; i >25; i--) 
console.log(i)


// 9 // 3-90 3x

for (let i = 1; i <91; i++)  {
    if(i % 3 == 0){ 
    console.log(i);
    }
}
