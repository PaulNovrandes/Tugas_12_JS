function hapusData(){
  var dataBuah = ['Pisang','Jeruk','Apel','Mangga'];
  console.log(dataBuah);

  dataBuah.pop();
  console.log(dataBuah);
  
  dataBuah.shift();
  return dataBuah;

}

console.log(hapusData());
