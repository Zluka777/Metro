var currentFocus = -1;
function start(){
	var	inpA = document.getElementById('Start-Point'),
		inpB = document.getElementById('End-Point'),
		currentFocusFocus = -1;
		inpB.addEventListener('input',Listener);
		inpA.addEventListener('input',Listener);
		inpB.addEventListener('keydown',ListenerKeyboard);
		inpA.addEventListener('keydown',ListenerKeyboard);
		document.addEventListener("click", function (e) {
				Closelist();
			});
};

function Listener(el){
	var value = this.value;
	Closelist();
	if(!value) return;
	var d = document.createElement('div');
	d.id = 'autocomplete-div';
	for (var i = 0; i < jsonRec.stations.length; i++) {
		if( jsonRec.stations[i].name.toUpperCase().includes(value.toUpperCase())) 
			d.innerHTML += '<div class="'+jsonRec.stations[i].name+'">'+jsonRec.stations[i].name+'</div>';
	}
	this.parentNode.appendChild(d);
	inp=this;
	d.addEventListener('click', function(e){
		inp.value = e.target.classList.value;
		Closelist();
	})
}


function ListenerKeyboard(e){
	var d = document.getElementById("autocomplete-div");
	if(d) x = d.getElementsByTagName("div");
		if(e.keyCode == 40) {
			currentFocus++;
			addActive(x);
			moveScroll(d,x[0].offsetHeight);
		}else if (e.keyCode == 38){
			currentFocus--
			addActive(x);
			moveScroll(d,x[0].offsetHeight);
		}else if (e.keyCode == 13){
			e.preventDefault();
			if(currentFocus > -1){
			if(x) x[currentFocus].click();
			}
		}
}
function moveScroll(d,step){
	if (currentFocus*step>d.scrollTop+d.offsetHeight-step) d.scrollTop=currentFocus*step-244;
	if (currentFocus*step<d.scrollTop) d.scrollTop=currentFocus*step;
}

function addActive(x) {
	if (!x) return false;
	var a = document.getElementById("autocomplete-active");
	if(a) a.removeAttribute('id');
	if (currentFocus >= x.length) currentFocus = 0;
	if (currentFocus < 0) currentFocus = (x.length - 1);
	x[currentFocus].id="autocomplete-active";
}

function Closelist(){
	currentFocus=-1;
	var el = document.getElementById('autocomplete-div');
	if(el) el.parentNode.removeChild(el);
};
