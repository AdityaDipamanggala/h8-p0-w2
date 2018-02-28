//1. Melakukan Looping Menggunakan While

var index = 0;

console.log("LOOPING PERTAMA");

while(index < 20){
  index += 2;
  console.log(index + " - I love coding");
}

console.log("LOOPING KEDUA");

while(index > 0){
  console.log(index + " - I will become fullstack developer");
  index -=2;
}

//2. Melakukan Looping Menggunakan For
console.log("LOOPING PERTAMA");

for(index=1; index<=20; index++){
  console.log(index + " - I love coding");
}

console.log("LOOPING KEDUA");

for(index=20; index>=1; index--){
  console.log(index + " - I will become fullstack developer");
}

//3. Angka Ganjil dan Genap

//contoh - ganjil genap
for(index=1;index<=100;index++){
  if(index%2===0){
    console.log("GENAP");
  }else{
    console.log("GANJIL");
  }
}

//contoh - untuk pertambahan counter 2
//counter sekarang = 1
for(index=1;index<=100;index+=2){
  if(index%3===0){
    console.log(index+" KELIPATAN 3");
  }else{
    console.log("");
  }
}

//contoh - untuk pertambahan counter 5
//counter sekarang = 1
for(index=1;index<=100;index+=5){
  if(index%6===0){
    console.log(index+" KELIPATAN 6");
  }else{
    console.log("");
  }
}

//contoh - untuk pertambahan counter 9
//counter sekarang = 1
for(index=1;index<=100;index+=9){
  if(index%10===0){
    console.log(index+" KELIPATAN 10");
  }else{
    console.log("");
  }
}


