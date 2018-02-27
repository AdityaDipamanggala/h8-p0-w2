var nama = 'soni';
var peran = 'ksatria';

if(nama==='' && peran==='' || nama==='' && peran!==''){
  console.log("Nama harus diisi!");
}else if(nama!=='' && peran===''){
  console.log("Halo "+nama+", Pilih peranmu untuk memulai game!");
}else if(nama!=='' && (peran.toLowerCase())===('ksatria'.toLowerCase())){
  console.log("Selamat datang di Dunia Proxytia, "+nama+" \nHalo Ksatria "+nama+", kamu dapat menyerang dengan senjatamu!");
}else if(nama!=='' && (peran.toLowerCase())===('tabib'.toLowerCase())){
  console.log("Selamat datang di Dunia Proxytia, "+nama+" \nHalo Tabib "+nama+", kamu akan membantu temanmu yang terluka.");
}else if(nama!=='' && (peran.toLowerCase())===('penyihir'.toLowerCase())){
  console.log("Selamat datang di Dunia Proxytia, "+nama+" \nHalo Penyihir "+nama+", ciptakan keajaiban yang membantu kemenanganmu!");
}else{
  console.log("Pilihan Peran hanya ada Ksatria, Tabib, dan Penyihir");
}