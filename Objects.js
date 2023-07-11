var obj1 = {name: "Santy", age: 22};
var obj2 = {name: "yadav", age: 20};

var key = "name";

console.log(obj1[key]);    // I can get name attribute from 'name'

var arr = [obj1, obj2];

console.log(arr);

arr.sort(function (obj1, obj2) {
    compareFunc(obj1[key],obj2[key]);
});

const compareFunc = (a, b) => {
    if (a < b) {
      return -1;
    }
  
    if (a > b) {
      return 1;
    }
  
    return 0;
  };

  console.log(arr);