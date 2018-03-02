//Logic Challenge - X dan O

function xo(str) {
  var jml_x = '';
  var jml_o = '';
  
  for(i=0;i<str.length;i++){
    if(str[i]=='x'){
      jml_x += 1;
    }else{
      jml_o += 1;
    }
  }
  
  if(jml_x==jml_o){
    return true;
  }else{
    return false;
  }
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true