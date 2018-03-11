module.exports = function solveSudoku(matrix) {
let count = 0;

	for (let i = 0, length = matrix[i].length; i < length; i++){
		for (let j = 0; j < matrix.length; j++ ){
			if (matrix[i][j] == 0){
				let findeNum = findeNumber(matrix, i, j);
				if (findeNum.length == 1){
					matrix[i][j] = findeNum[0];
					count++;
				} else {
					let findeElseNum = findeNumber2(matrix, i, j, findeNum);
					if (findeElseNum.length == 1){
						matrix[i][j] = findeElseNum[0];
						count++;
					}
				}
			
				
			}
		}
	}
	
	if(count != 0) solveSudoku(matrix);	

	for (let i = 0, length = matrix[i].length; i < length; i++){
		for (let j = 0; j < matrix.length; j++ ){
			if (matrix[i][j] == 0){
				matrix[i][j] = findeNumber(matrix, i, j)[0];
				/*count++;*/
				solveSudoku(matrix);
			}
		}
	}

	/*if(count != 0) solveSudoku(matrix);*/

	return matrix;
}

function findeNumber(matrix, a, b) {
	let arr = [];

	for (let i = 0, length = matrix[a].length; i < length; i++){
		if (matrix[a][i] != 0){
			arr.push(matrix[a][i]);
		}
	}

	for (let j = 0, length = matrix.length; j < length; j++){
		if (matrix[j][b] != 0){
			arr.push(matrix[j][b]);
		}
	}
	
	
	
	let startA = null, startB = null, endA = null, endB = null;
	

	if(a <= 2){
		startA = 0;  endA = startA + 3;
	} else if (a > 2 && a < 6){
		startA = 3;  endA = startA + 3;
	} else {
		startA = 6;  endA = startA + 3;
	}

	if(b <= 2){
		startB = 0; endB= startB + 3;
	} else if (b > 2 && b < 6){
		startB = 3;  endB= startB + 3;
	} else {
		startB = 6;  endB= startB + 3;
	}

	for (let i = startA; i < endA; i++){
		for (let j = startB; j < endB; j++){
			if(matrix[i][j] !== 0){
				arr.push(matrix[i][j]);
			}
		}
	}

	let res = [];
	
	let count = 1;
	
	while (count < 10){
		let bool= arr.includes(count)? count++ : res.push(count) && count++;
		}
	
	
	return res;
}

function findeNumber2(matrix, k, l, findeNum){
	
	let arrRow = [];
	let strRow = '', strCol = '', strSquare = '';
	
	for(let i = 0, length = matrix[k].length; i < length; i++){
		if(matrix[k][i] == 0 && i != l){
			arrRow.push(findeNumber(matrix, k, i));
			strRow = arrRow.join(',');
		}
	}
	
	
		
	let resRow = [];

	
	for (let i = 0, length1 = findeNum.length; i < length1;){
		let ind = findeNum[i];
		let bool = strRow.includes(ind) ? i++ : resRow.push(ind) && i++; 
	}
	
	
	if (resRow.length == 1) return resRow;
	
	let arrCol = [];
	
	for(let i = 0, length = matrix.length; i < length; i++){
		if(matrix[i][l] == 0 && i != k){
			arrCol.push(findeNumber(matrix, i, l));
			strCol = arrCol.join(',');
		}
	}

		
		let resCol = [];
		
	for (let i = 0, length1 = findeNum.length; i < length1;){
		let ind = findeNum[i];
		let bool = strCol.includes(ind) ? i++ : resCol.push(ind) && i++; 
	}
		
	
	if (resCol.length == 1) return resCol;
	

	/*let strDemiAll = strRow + strCol;
	let resDemiAll = [];
	
	for (let i = 0, length1 = findeNum.length; i < length1;){
		let ind = findeNum[i];
		let bool = strDemiAll.includes(ind)? i++ : resDemiAll.push(ind) && i++; 
	}
	
	if (resDemiAll.length == 1) return resCol;*/
	
	let startK = null, startL = null, endK = null, endL = null;
	
	if(k <= 2){
		startK = 0;  endK = startK + 3;
	} else if (k > 2 && k < 6){
		startK = 3;  endK = startK + 3;
	} else {
		startK = 6;  endK = startK + 3;
	}

	if(l <= 2){
		startL = 0; endL = startL + 3;
	} else if (l > 2 && l < 6){
		startL = 3;  endL= startL + 3;
	} else {
		startL = 6;  endL= startL + 3;
	}
	
	let arrSquare = [];
	
	for (let i = startK; i < endK; i++){
		for (let j = startL; j < endL; j++){
			if(matrix[i][j] == 0){
				if (i == k && j == l) continue;
				else {
					arrSquare.push(findeNumber(matrix, i, j));
					strSquare = arrSquare.join(',');
				}
			}
		}
	}
	

		
		let resSquare = [];
	
	for (let i = 0, length1 = findeNum.length; i < length1;){
		let ind = findeNum[i];
		let bool = strSquare.includes(ind) ? i++ : resSquare.push(ind) && i++; 
	}
	
	if (resSquare.length == 1) return resSquare;
	
	let strAll = strRow + strCol + strSquare;
	let resAll = [];
	
	for (let i = 0, length1 = findeNum.length; i < length1;){
		let ind = findeNum[i];
		let bool = strAll.includes(ind) ? i++ : resAll.push(ind) && i++; 
	}
	
	return resAll;
	
	}

	function findeNumSq(matrix, k, l, findeNum) {

	let startK = null, startL = null, endK = null, endL = null;
	
	if(k <= 2){
		startK = 0;  endK = startK + 3;
	} else if (k > 2 && k < 6){
		startK = 3;  endK = startK + 3;
	} else {
		startK = 6;  endK = startK + 3;
	}

	if(l <= 2){
		startL = 0; endL = startL + 3;
	} else if (l > 2 && l < 6){
		startL = 3;  endL= startL + 3;
	} else {
		startL = 6;  endL= startL + 3;
	}
	
	let arrSquare = [], strSquare = '';
	
	for (let i = startK; i < endK; i++){
		for (let j = startL; j < endL; j++){
			if(matrix[i][j] == 0){
				if (i == k && j == l) continue;
				else {
					arrSquare.push(findeNumber(matrix, i, j));
					strSquare = arrSquare.join(',');
				}
			}
		}
	}

	let res = [];
	if (strSquare.length == 4){
		let str1 = strSquare.slice(0,2);
		let str2 = strSquare.slice(2);
		if (str1 == str2){
			for(let m = 0; m < findeNum.length; m++){
				for (let n = 0; n < str1.length; n++){
					if(findeNum[m] !== str[n]) res.push(findeNum[n]);
				}
			}
		}
	}
	


	return res;
}

