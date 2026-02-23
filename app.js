const myPromise = new Promise((resolve, reject) => {
    const condition = true; // You can change to false to test rejection
    if (condition) {
        resolve('Success!');
    } else {
        reject('Failure!');
    }
});

myPromise.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});