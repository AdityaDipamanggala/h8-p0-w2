//Logic Challenge - Konversi Menit

function konversiMenit(menit) {
  var hasilmenit = menit%60;
  var hasiljam = (menit-hasilmenit)/60;
  
  if(hasilmenit<10){
    return hasiljam+":0"+hasilmenit; 
  }else{
    return hasiljam+":"+hasilmenit;
  }
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00