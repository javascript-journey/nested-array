
// function papan ular,  menerima 2 parameter yaitu ekorUlar dan kepalaUlar
function displayBoard (ekorUlar, kepalaUlar) {

	let jumlah_kotak = 10;// JUmlah Kotak per arah masihg2 10
	let papanUlar = new Array(); // buat array baru
	// buat sebuah perulangan
	for (loop = 10; loop >= 1; loop--) {// perulangan akan terus jalan selama variable loop lebih dari 1 atau sama dengan 1
		let a = loop * jumlah_kotak // variable a = loop * jumlah kotak
		let b = a - 1 // a - 1
		let c = b - 1 //b - 1 
		let d = c - 1 //c - 1 
		let e = d - 1 //d - 1 
		let f = e - 1 //e - 1 
		let g = f - 1 //f - 1 
		let h = g - 1 //g - 1 
		let i = h - 1 //h - 1 
		let j = i - 1 //i - 1 

		// jika a berada diantara ekor dan kepalaUlar maka variable a diubah menjadi '=' untuk menggambar kan sebagai Ular
		if ((a >= ekorUlar && a <= kepalaUlar) || (a <= kepalaUlar && a >= kepalaUlar)) {
			a = "=";
		}
		// jika b berada diantara ekor dan kepalaUlar maka variable a diubah menjadi '=' untuk menggambar kan sebagai Ular
		if ((b >= ekorUlar && b <= kepalaUlar) || (b <= kepalaUlar && b >= kepalaUlar)) {
			b = "=";
		}
		// jika c berada diantara ekor dan kepalaUlar maka variable a diubah menjadi '=' untuk menggambar kan sebagai Ular
		if ((c >= ekorUlar && c <= kepalaUlar) || (c <= kepalaUlar && c >= kepalaUlar)) {
			c = "=";
		}
		// jika d berada diantara ekor dan kepalaUlar maka variable a diubah menjadi '=' untuk menggambar kan sebagai Ular
		if ((d >= ekorUlar && d <= kepalaUlar) || (d <= kepalaUlar && d >= kepalaUlar)) {
			d = "=";
		}
		// jika e berada diantara ekor dan kepalaUlar maka variable a diubah menjadi '=' untuk menggambar kan sebagai Ular
		if ((e >= ekorUlar && e <= kepalaUlar) || (e <= kepalaUlar && e >= kepalaUlar)) {
			e = "=";
		}
		// jika f berada diantara ekor dan kepalaUlar maka variable a diubah menjadi '=' untuk menggambar kan sebagai Ular
		if ((f >= ekorUlar && f <= kepalaUlar) || (f <= kepalaUlar && f >= kepalaUlar)) {
			f = "=";
		}
		// jika g berada diantara ekor dan kepalaUlar maka variable a diubah menjadi '=' untuk menggambar kan sebagai Ular
		if ((g >= ekorUlar && g <= kepalaUlar) || (g <= kepalaUlar && g >= kepalaUlar)) {
			g = "=";
		}
		// jika h berada diantara ekor dan kepalaUlar maka variable a diubah menjadi '=' untuk menggambar kan sebagai Ular
		if ((h >= ekorUlar && h <= kepalaUlar) || (h <= kepalaUlar && h >= kepalaUlar)) {
			h = "=";
		}
		// jika i berada diantara ekor dan kepalaUlar maka variable a diubah menjadi '=' untuk menggambar kan sebagai Ular
		if ((i >= ekorUlar && i <= kepalaUlar) || (i <= kepalaUlar && i >= kepalaUlar)) {
			i = "=";
		}
		// jika j berada diantara ekor dan kepalaUlar maka variable a diubah menjadi '=' untuk menggambar kan sebagai Ular
		if ((j >= ekorUlar && j <= kepalaUlar) || (j <= kepalaUlar && j >= kepalaUlar)) {
			j = "=";
		}

		// Jika loop bernilai ganjil ,maka array urutan array dimulai dari kanan
		if (loop == 1 || loop == 3|| loop == 5 || loop == 7 || loop == 9) {
			papanUlar.push([j,i,h,g,f,e,d,c,b,a])	
		}else{// dan sebaliknya
			papanUlar.push([a,b,c,d,e,f,g,h,i,j])
		}

	}
	console.log(papanUlar) // console
}	

displayBoard(3, 6)
// output
// 100 99 98 97 96 95 94 93 92 91
// 81 82 83 84 85 86 87 88 89 90
// 80 79 78 77 76 75 74 73 72 71
// 61 62 63 64 65 66 67 68 69 70 
// 60 59 58 57 56 55 54 53 52 51
// 41 42 43 44 45 46 47 48 49 50
// 40 39 38 37 36 35 34 33 32 31
// 21 22 23 24 25 26 27 28 29 30
// 20 19 18 17 16 15 14 13 12 11
// 1 2 = = = = 7 8 9 10
