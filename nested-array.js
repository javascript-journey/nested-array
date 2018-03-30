// Contoh arrow function pembuatan papan ular tangga dan ularnya.
ularTangga = (ekorUlar, kepalaUlar) => {

	// deklarasikan variabel papan, yg bernilai array[] (akan dijadikan induk dari semua array);
	// deklarasikan variabel index, yg bernilai 0 (akan dijadikan index dari array induk);
	let papan = [];
	let index = 0;

	// Buat looping hingga 10 baris, untuk membuat papan ular tangganya
	for (let i = 10; i > 0; i--) {

		//  deklarasikan variabel index2, yg bernilai 0 (akan dijadikan index "papan[index]" );
		let index2 = 0;

		// logika if, untuk memisahkan "papan[index]" bernilai genap dan ganjil.
		if (i % 2 != 0) {
			let a = (i * 10);

			 // deklarasikan array baru pada "papan[index]" (array yg sudah kita buat sebelumya)
			 // agar menjadi multidmensi array
			 papan[index] = [];

			 // buat perulangan, yg menentukan nilai dari papan ular tangga
			 for (j = a - 9; j <= a; j++) {

			 	// logika if, ubah nilai dari parameter ekorUlar - kepalaUlar menjadi (=)
			 	if (ekorUlar <= j && kepalaUlar >= j) {
			 		papan[index][index2] = "=";
			 	}else{
			 		papan[index][index2] = j;					
			 	}

			 	// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
			 	index2++;

			 }


			}else{

				let a = (i * 10);
				
				// deklarasikan array baru pada "papan[index]" (array yg sudah kita buat sebelumya)
				// agar menjadi multidmensi array
				papan[index] = [];

				// buat perulangan, yg menentukan nilai dari papan ular tangga
				for (j = a; j > a - 10; j--) {

					// logika if, ubah nilai dari parameter ekorUlar - kepalaUlar menjadi (=)
					if (ekorUlar <= j && kepalaUlar >= j) {
						papan[index][index2] = "=";
					}else{
						papan[index][index2] = j;					
					}

					// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
					index2++;
				}
			}
			// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
			index++;
		}

	//Hasil Papan Ular Tangga
	console.log(papan);

}

ularTangga(3,6);