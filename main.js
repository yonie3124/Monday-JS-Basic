// 1. Print 1 - 135

for (let i = 1; i <=135; i++){
    console.log(i)
}

// 2. Print Odd Numbers 1 - 135

for (let i = 1; i <=135; i+=2){
        console.log(i)
    }
// 3. Sum of Printed Numbers

let sum=0;
for (let i = 0; i <=135; i++){
    
    sum=sum+i
    console.log(`The series is: ${i} the sum is: ${sum} and the factorial value is: ${sum}`)
}



//4. Print the elements of an array 

X = [1,4,2,12]

for (let i = 0; i < X.length; i++) {
    console.log(X[i])
}


// 5. Find Max

let max=null;

X = [2,-3,-1, 0]
for (let i = 0; i < X.length; i++){
    if(X[i]>max){
        max=X[i]
    }
}

console.log("max= "+max)



// 6. Get Average

let sumAverage=0;
X = [2,1,3]
for (let i = 0; i < X.length; i++){
    sumAverage=sumAverage+X[i]
}
console.log(sumAverage/X.length)


// 7. Eliminate the Negatives

X = [2,-1,4,-3]
for (let i = 0; i < X.length; i++){
    if(X[i]<0){
        X[i]=0
    }
}
console.log(X)


// 8. Number to String

X = [1,-4,0,-1]
for (let i = 0; i < X.length; i++){
    if(X[i]<0){
        X[i]="Turing"
    }
}

console.log(X)
