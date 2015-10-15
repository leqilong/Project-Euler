var i=0;
var count=0;

for(i=0;i<1000;i++){
  if((i%3==0)||(i%5==0)){
    count+=i;
  }
  else continue;
}

console.log(count);
