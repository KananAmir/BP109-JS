String.prototype.wavy = function () {
  let result = "";
  for (let i = 0; i < this.length; i++) {
    if (i % 2 === 0) {
      result += this[i].toLowerCase();
    } else {
      result += this[i].toUpperCase();
    }
  }

  return result;
};

let userName = "lorem";

console.log(userName.wavy());

const arr = [1, 2, 4, 5, 6];

// CUSTOM FOREACH

Array.prototype.customForEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, this);
  }
};

// CUSTOM MAP

Array.prototype.customMap = function (cb) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i], i, this));
  }

  return result;
};

// arr.forEach((item, idx, arr) => {
//   console.log(item);
// });
arr.customForEach((item, idx, arr) => {
  console.log(item);
});

const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"]; // array of strings, countries

// countries.customForEach((item, idx, arr) => {
//   console.log(item);
// });
// const res = countries.map((item, idx, arr) => {
//   return item.slice(0, 3).toUpperCase();
// });

const res = countries.customMap((item, idx, arr) => {
  return item.slice(0, 3).toUpperCase();
});
console.log(res);
