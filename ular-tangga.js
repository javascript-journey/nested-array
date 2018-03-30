let displayBoard = (ekorUlar, kepalaUlar) => {
	// membuat variable bertipe array
	var board = [];
	// untuk menentukan key dari array board 1-10
	var num = 0;

	// membuat baris board 1-10
	for (let i = 10; i > 0; i--) {

		// untuk menentukan key dari setiap key di baris board 1-10
		let num2 = 0;

		// jika variable i ganjil
		if (i % 2 != 0) {

			// membuat perkalian agar nilai a bernilai 100
			let a = (i * 10);
			// membuat array baru disetiap perulangan dengan menentukan key dari nilai
			// variable num
			board[num] = [];

			// membuat perulangan menanjak
			for (let n = a - 9; n <= a; n++) {

				// logika untuk replace nilai dengan tanda '='
				if (ekorUlar <= n && kepalaUlar >= n)
					board[num][num2] = '=';
				else
					board[num][num2] = n;

				num2++;
			}
		}
		// jika variable i genap
		else {			
			let a = (i * 10);
			board[num] = [];

			// membuat perulangan menurun
			for (let n = a; n > a - 10; n--) {
				if (ekorUlar <= n && kepalaUlar >= n)
					board[num][num2] = '=';
				else
					board[num][num2] = n;
				num2++;
			}
		}

		// print setiap baris board
		console.log(board[num])
		num++;
	}
}

displayBoard(3, 6);