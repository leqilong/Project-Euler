var F_number=[];
var sum=0;
var i=0;

F_number[0]=1;
F_number[1]=2;


while (F_number[i]<4000000){
  F_number[i+2]=F_number[i+1]+F_number[i];
  i++;
  if(F_number[i]%2==0){
    sum+=F_number[i];
  }
  else continue;
}

console.log(sum);
