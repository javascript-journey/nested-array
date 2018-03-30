<script>
function displayBoard (ekorUlar, kepalaUlar){
  var papan = []; //Variable hasil akhir board, inisialisasi sebagai array kosong
  var num = 0; // untuk menentukan key dari array papan 1-10

  // membuat baris papan 1-10
  for (let row = 10; row > 0; row--) {

    // untuk menentukan key dari setiap key di baris papan 1-10
    let num2 = 0;

    // jika variable i ganjil
    if (row % 2 != 0) {
      // membuat perkalian agar nilai a bernilai 100
      let a = (row * 10);
      // membuat array baru disetiap perulangan dengan menentukan key dari nilai
      // variable num
      papan[num] = [];

      // membuat perulangan menanjak
      for (let n = a - 9; n <= a; n++) {

        // logika untuk replace nilai dengan tanda '='
        if (ekorUlar <= n && kepalaUlar >= n)
          papan[num][num2] = '=';
        else
          papan[num][num2] = n;

        num2++;
      }
    }
    // jika variable i genap
    else {
      let a = (row * 10);
      papan[num] = [];

      // membuat perulangan menurun
      for (let n = a; n > a - 10; n--) {
        if (ekorUlar <= n && kepalaUlar >= n)
          papan[num][num2] = '=';
        else
          papan[num][num2] = n;
        num2++;
      }
    }
      // print setiap baris papan
    console.log(papan[num]);
    num++;

  }

}

displayBoard(3, 6);

</script>
