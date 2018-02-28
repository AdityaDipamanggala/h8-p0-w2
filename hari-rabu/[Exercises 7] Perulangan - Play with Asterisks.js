//1. Menyusun Barisan Bintang
// with while
var rows1 = 5;

while(rows1 > 0){
  console.log('*');
  rows1--;
}

//with for
for(rows1 = 5;rows1>0; rows1--){
  console.log('*');	
}

//2. Menyusun Barisan Bintang Dengan Nested Looping

var text = "";
for(rows2=5;rows2>0;rows2--){
  for(rows3=5;rows3>0;rows3--){
    text +="*";
  }
  text += "\n";
}
console.log(text);

//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping

var text = "";
for(rows4=5;rows4>=1;rows4--){
  for(rows5=5;rows5>=rows4;rows5--){
    text +="*";
  }
  text += "\n";
}
console.log(text);