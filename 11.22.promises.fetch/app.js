//promises

// sinxron vs asinxron
console.log("first");

setTimeout(() => {
  console.log("second");
}, 1000);

console.log("third");

//promise states
// pending, fulfilled, rejected;

const techs = ["html", "css", "js"];
// const techs = [];
const myPromise = new Promise((resolve, reject) => {
  if (techs.length > 0) {
    resolve("success");
  } else {
    reject("failed");
  }
});

// console.log(myPromise);

//then, catch, finally

// myPromise
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("nəticədən asılı olmayaraq ən sonda işləyəcək!");
//   });

// promise chaning

const students = ["murad", "vusala", "nigar", "feyza"];
// students.length = 0;
const promise = new Promise((resolve, reject) => {
  if (students.length > 0) {
    resolve(students);
  } else {
    reject("failed to get data");
  }
});

// console.log(promise);

promise
  .then((res) => {
    res.pop();
    return res;
  })
  .then((data) => {
    data.shift();
    return data;
  })
  .then((updatedStudent) => {
    console.log(updatedStudent);
  })
  .catch((err) => {
    // throw new Error(err);
    console.log(err);
  });

//callback hell

setTimeout(() => {
  console.log("1ci əməliyyat icra olundu");

  setTimeout(() => {
    console.log("2ci əməliyyat icra olundu");

    setTimeout(() => {
      console.log("3ci əməliyyat icra olundu");

      setTimeout(() => {
        console.log("4ci əməliyyat icra olundu");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

// crud - create, read, update, delete
