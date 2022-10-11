const validator = {
    isValid: function(cardNumber) {
    const reverseInput = cardNumber.toString().split('').reverse().map(Number);
       
   console.log (reverseInput)

   let newArray = reverseInput.map((num,i) => {
    if (i % 2 === 1) {
      const double = (num * 2);
      const m = double.toString().split('').reduce(function (a, b) {
        if (double >=10) {
          return a + parseInt(b);
    }
    else {
      return double;
    }
      },0);
      return m;
    } 
    else{
      return num;
    }
  });
  console.log(newArray)  

  newArray = newArray.reduce((previus, next) => {
    const sum = previus + next;
    return sum;
  },0);
  console.log(newArray);

  if (newArray % 10 === 0) {
    return true;
 } else {
  return false;
 }
},

maskify: function (cardNumber) {
  let value = cardNumber.toString();
  let replaceNums = value.slice(0, -4);
  let noReplaceNums = value.slice(-4)
  let newArray = replaceNums.split('').map(function (){
    return "#";
  });
  newArray = newArray.join('');
  return newArray.concat(noReplaceNums);
}

};

export default validator;
