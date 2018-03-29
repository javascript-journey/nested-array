# nested-array

# Papan Ular Tangga

Untuk melatih pemahaman nested array, kita membuat sebuah function yang akan menampilkan papan permainan ular tangga. Tapi kali ini tidak hanya membuat papannya, tapi juga membuat ularnya.

Buatlah sebuah function yang mengembalikan nested array yang berisi papan ular tangga yang ada ularnya , menerima 2 parameter yaitu ekor ular dan kepala ular.


### Skeleton Code

```
displayBoard (ekorUlar, kepalaUlar) {
// your code

}

// contoh

displayBoard(3, 6)


// dan seterusnya sampai 100
// 20 19 18 17 16 15 14 13 12 11
// 1 2 = = = = 7 8 9 10

```

Harus menggunakan nested Array, contoh nested array.
Nested array adalah array yang memiliki nilai array lagi di dalamnya.

```
[[2, 4, 6, 8], [1, 3, 5, 7, 9]]
```

### Penjelasan Dasar Tentang Array
Operasi Dasar dalam memanipulasi array ada dua. Yaitu :

- array.push(data)
- array.pop()

#### array.push

Adalah kita memasukkan data / nilai baru ke dalam sebuah array dan nilai itu secara urutannya akan masuk di urutan data terakhir. Misal kita punya array `[1, 2]` lalu dilakukan `array.push(3)` maka data nya menjadi `[1, 2, 3]` 

#### array.pop

Adalah untuk menghapus data terakhir dari sebuah array. misal kita punya array `[1, 2, 3]` ketika dilakukan `array.pop()` , maka data yang tersisa adalah `[1, 2]`

### Bagaimana cara mengakses data di dalam array ?

Array sebagaimana kita tahu adalah kumpulan data yang dimasukkan dalam tampungan. Ibarat buku yang kita simpan dalam lemari buku. maka buku adalahnya data nya dan lemari adalah array. 

Kalau ngomong kumpulan, biasa nya ada urutan. Nah di array juga data nya berurutan, anehnya urutannya tidak dimulai dari 1, tapi dari 0.

Jadi jika kita punya array `[a, b, c]` maka 'a' adalah urutan ke 0, 'b' adalah urutan ke 1, 'c' adalah urutan ke 2.

Misal kita ingin mengambil data yang pertama yaitu 'a', maka cara nya adalah `array[0]`, kita menggunakan kurung kotak untuk menunjukkan data urutan ke berapa yang ingin di ambil.

Referensi belajar yang bisa digunakan untuk memahami array:

[W3schools Array](https://www.w3schools.com/js/js_arrays.asp)

[Mdn Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

