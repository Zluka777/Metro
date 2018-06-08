
var gr = new Array();
gr = [[0,4,0,3,0,0],[0,0,0,2,0,3],[0,0,0,0,0,0],[0,0,0,0,6,0],[2,0,1,0,0,0],[1,0,0,0,0,0]];
var R=[]; 

function copyArray(arr){
	var res = []
	for (var i = 0; i < arr.length; i++) {
	res[i]=arr[i].slice();
	}
	return res;
}
function testInputArray(graf,startPoint,endPoint){
	var sum = 0;
	if(endPoint>=graf[0].length) return true;
	if( graf[startPoint].every(item=>item===0) ) {
		return true;
	}
	for (var i = 0; i < graf.length; i++) { 
		sum += graf[i][endPoint];
	}
	if (sum===0) return true;
	return false;
}
function fun(graf,startPoint){
	var R = [];
	var P = [];
	var min = 0;

	for(i=0;i<graf.length;i++){
		for(j=0;j<graf[i].length;j++)
			if(graf[i][j]===0) graf[i][j]= Infinity;
	}

	for(i=0;i<graf.length;i++){
	R[i] = graf[startPoint][i];
	}

	P = new Array(R.length).fill(0);
	P[startPoint]=1;

	while(min>=0){

		for (i = 0; i < R.length; i++)
			if ((R[i] < R[min])&&P[i]!==1) 
				min = i;
			P[min]=1;

		for(i=0;i<R.length;i++){
			if((P[i]!==1)&&(graf[min][i]!==Infinity)){
				R[i] = (R[min]+graf[min][i])<R[i] ? R[min]+graf[min][i] : R[i];
			}
		}

		min = P.indexOf(0);
	}
	return R;
}
function fun2(graf2,startPoint,endPoint){
	var str = String(endPoint);
	var graf = copyArray(graf2);
	if(testInputArray(graf,startPoint,endPoint)) {
		console.log("Error: startPoint or endPoint is not correct");
		return 1;
	}

	var R = fun(graf,startPoint);
	if(R[endPoint]===Infinity){ 
		console.log("Error: result is Infinity ");
		return 1;
	}

	var cnt = endPoint;
	R[startPoint] = 0;
	while(cnt !== startPoint){
		for(i=0;i<R.length;i++){
			if((R[cnt]-graf[i][cnt])===R[i]){
				str = str+' '+i;
				cnt = i;
				break;
			}
			
		}
	}
	return [str.split(' '),R[end]];
}
function showPath(str){
	str.forEach(function(value,index,array) {
		array[index] = jsonRec.stations[Number(value)].name;
	});
	console.log(str);
}
