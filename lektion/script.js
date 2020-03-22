let arr = ["a", "b", "c", "d", "e"];

arr.forEach((item, i, array) => {
  console.log(i + ":" + item + "(массив" + array);
});

arr.pop();
arr.push("cc");

console.log(arr);
/*****************---------------------------- */
let mass = [1, 3, 4, 7, 8, 9];
for (let key of mass) {
  console.log(key + "--" + mass[key]);
}
for (let key in mass) {
  console.log(key + "--" + mass[key]);
}
/*****************---------------------------- */
let ans = prompt("", ""),
  arrs = [];
arrs = ans.split(",");
/*****************---------------------------- */

let arjoin = ["eee", "dddd", "vvvv"],
  i = arjoin.join(", ");

/*****************---------------------------- */
let arsort = ["eee", "dddd", "vvvv"],
  is = arsort.join(", ");
console.log(is);
/*****************---------------------------- */
let sorNumArr = [23, 4, 2, 1, 4, 5, 6, 7],
  iSortNum = sorNumArr.sort(compareNum);

function compareNum(a, b) {
  return a - b;
}

console.log(sorNumArr);

let soldier = {
    health: 400,
    armor: 100
};

let john = {
    health:100
};

john.__proto__ = soldier;

console.log(john);
console.log(john.armor);


let x = 5; 
alert(x++);
