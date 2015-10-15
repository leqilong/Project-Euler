var palindrom[];
var first_digit;
var second_digit=1000;
var i;
var product;


for (first_digit=0; first_digit<1000; first_digit++){
  for (second_digit=0; second_digit<1000; second_digit++){
    product=first_digit * second_digit;
    if(product.toString()===(product.toString().split('').reverse().join(''))){
      palindrom.push(product);
    }
    else continue;
  }
}

for (i=0; i<palindrom.length; i++){
  console.log(palindrom[i]);
}
