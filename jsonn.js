var jsonRec;


function ajax_get(url, callback) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			//console.log('responseText:' + xmlhttp.responseText);
			try {
				var data = JSON.parse(xmlhttp.responseText);
			} catch(err) {
				console.log(err.message + " in " + xmlhttp.responseText);
				return;
			}
			jsonRec = data;
		}
	};
 
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}

ajax_get('https://raw.githubusercontent.com/MisnikovRoman/MetroMap/master/JSON/metro_map_v2.json',console.log);
setTimeout('start();',1000);

function connectionsToArray(data){
	var res=[];
	for (var i = 0; i < data.stations.length; i++) {
		res[i]= new Array(data.stations.length)
		
		for (var j = 0; j < data.stations.length; j++) {
			res[i][j] = Infinity;
		}
	}

	connections = data.connections;
	

	for (var i = 0; i < connections.length; i++) {
		res[connections[i].startId][connections[i].endId] = connections[i].weight;
		if(connections[i].oriented){
			res[connections[i].endId][connections[i].startId] = Infinity;
		}
		else
			res[connections[i].endId][connections[i].startId] = connections[i].weight;
	}
	return res;
}

// connectionsToArray(jsonRec.connections);