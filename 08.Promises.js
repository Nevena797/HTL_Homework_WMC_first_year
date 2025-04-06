//Promises
//Javascript Nuggets - Promises

//async await
//consume/use promises

//Pending,Rejected,FullFilled

const value = 2;

const promise = new Promise((resolve,reject) => {
    const random = Math.floor(Math.random() * 3);
    console.log(random);
    if (random === value) {
        resolve('you ges it correctly')
    } else {
        reject('wrong number')
    }
})

console.log(promise.value)

promise.then((data) => console.log(data)).catch(err =>
    console.log(err))