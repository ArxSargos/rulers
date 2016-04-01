/* Rulers - bookmarklet
 * Description: adding rulers to measure pages for pixel perfection
 * Author: Martin Nechvatal
 * E-mail: martin.nech@gmail.com
 *
 * source: github.com/ArxSargos
*/

javascript:

/* build rulers workspace in body */
var bodyRef = document.querySelector("body");
var workspace = document.createElement("div");
	workspace.style.position = "absolute";
	workspace.style.left = "0";
	workspace.style.top = "0";
	workspace.style.width = "0";
	workspace.style.height = "0";
	workspace.style.overflow = "visible";

bodyRef.appendChild(workspace);
var rootSpace = /*workspace.createShadowRoot();*/ workspace;

/* globals */
var htmlRef = document.documentElement;
window._rlrs_height =  Math.max( bodyRef.scrollHeight, bodyRef.offsetHeight, htmlRef.clientHeight, htmlRef.scrollHeight, htmlRef.offsetHeight );
window._rlrs_width =  Math.max( bodyRef.scrollWidth, bodyRef.offsetWidth, htmlRef.clientWidth, htmlRef.scrollWidth, htmlRef.offsetWidth );
window._rlrs_movingRuler = null;

/* mousemove handler */
document.addEventListener("mousemove", _rlrs_mouseMove);

function _rlrs_createRulerVertical() {
	var opts = {
		"type": "v",
		"notStored": true
	};
	__rlrs_createRuler(opts);
}
function _rlrs_createRulerHorizontal() {
	var opts = {
		"type": "h",
		"notStored": true
	};
	__rlrs_createRuler(opts);
}

function __rlrs_newHash() {
	return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10);
}

function __rlrs_createRuler(opts) {
	var stH = (window._rlrs_height).toString() + "px";
	var stL = (window._rlrs_width).toString() + "px";
	var stHhalf = (Math.floor(window._rlrs_height/2)).toString() + "px";
	var stLhalf = (Math.floor(window._rlrs_width/2)).toString() + "px";
	var windVertHalf = (Math.floor((screen.height/2)) + window.pageYOffset).toString() + "px";

	var hash = opts.hash ? opts.hash : __rlrs_newHash();

	var ruler = document.createElement("div");
		ruler.classList.add("_rlrs_ruler");

	/* set gradient background first by setAttribute */
	var bckgGrad  = "background: rgba(255,255,255,0);";
	if (opts.type==='v') {
		bckgGrad += "background: -moz-linear-gradient(left, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 33%, rgba(255,30,0,1) 34%, rgba(240,46,22,1) 66%, rgba(240,47,23,0) 67%, rgba(231,56,39,0) 100%);";
		bckgGrad += "background: -webkit-gradient(left top, right top, color-stop(0%, rgba(255,255,255,0)), color-stop(33%, rgba(255,255,255,0)), color-stop(34%, rgba(255,30,0,1)), color-stop(66%, rgba(240,46,22,1)), color-stop(67%, rgba(240,47,23,0)), color-stop(100%, rgba(231,56,39,0)));";
		bckgGrad += "background: -webkit-linear-gradient(left, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 33%, rgba(255,30,0,1) 34%, rgba(240,46,22,1) 66%, rgba(240,47,23,0) 67%, rgba(231,56,39,0) 100%);";
		bckgGrad += "background: -o-linear-gradient(left, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 33%, rgba(255,30,0,1) 34%, rgba(240,46,22,1) 66%, rgba(240,47,23,0) 67%, rgba(231,56,39,0) 100%);";
		bckgGrad += "background: -ms-linear-gradient(left, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 33%, rgba(255,30,0,1) 34%, rgba(240,46,22,1) 66%, rgba(240,47,23,0) 67%, rgba(231,56,39,0) 100%);";
		bckgGrad += "background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 33%, rgba(255,30,0,1) 34%, rgba(240,46,22,1) 66%, rgba(240,47,23,0) 67%, rgba(231,56,39,0) 100%);";
		bckgGrad += "filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#e73827', GradientType=1 );";
	} else {
		bckgGrad += "background: -moz-linear-gradient(top, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 33%, rgba(255,30,0,1) 34%, rgba(240,46,22,1) 66%, rgba(240,47,23,0) 67%, rgba(231,56,39,0) 100%);";
		bckgGrad += "background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(255,255,255,0)), color-stop(33%, rgba(255,255,255,0)), color-stop(34%, rgba(255,30,0,1)), color-stop(66%, rgba(240,46,22,1)), color-stop(67%, rgba(240,47,23,0)), color-stop(100%, rgba(231,56,39,0)));";
		bckgGrad += "background: -webkit-linear-gradient(top, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 33%, rgba(255,30,0,1) 34%, rgba(240,46,22,1) 66%, rgba(240,47,23,0) 67%, rgba(231,56,39,0) 100%);";
		bckgGrad += "background: -o-linear-gradient(top, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 33%, rgba(255,30,0,1) 34%, rgba(240,46,22,1) 66%, rgba(240,47,23,0) 67%, rgba(231,56,39,0) 100%);";
		bckgGrad += "background: -ms-linear-gradient(top, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 33%, rgba(255,30,0,1) 34%, rgba(240,46,22,1) 66%, rgba(240,47,23,0) 67%, rgba(231,56,39,0) 100%);";
		bckgGrad += "background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 33%, rgba(255,30,0,1) 34%, rgba(240,46,22,1) 66%, rgba(240,47,23,0) 67%, rgba(231,56,39,0) 100%);";
		bckgGrad += "filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#e73827', GradientType=0 );";
	}
		/* set background gradient as attribute (have to be first !!!) */
		ruler.setAttribute("style", bckgGrad);

		ruler.style.position = "absolute";
		ruler.style.zIndex  = 9999;
		ruler.setAttribute('data-type', opts.type);
		ruler.setAttribute('data-hash', hash);

	if (opts.type==='v') {
		ruler.style.width = "3px";
		ruler.style.height = stH;
		ruler.style.left = opts.left ? opts.left : stLhalf;
		ruler.style.cursor = "col-resize";
		ruler.style.top = "0";
	} else {
		ruler.style.width = stL;
		ruler.style.height = "3px";
		ruler.style.left = "0";
		ruler.style.cursor = "row-resize";
		ruler.style.top = opts.top ? opts.top : windVertHalf;
	}
	rootSpace.appendChild(ruler);

	/* activate mouse listener */
	_rlrs_activateListener(ruler);

	/* add ruler to localStorage if new */
	if(opts.notStored) {
		var storage = JSON.parse(localStorage.getItem('_rlrs_')) || {"rulers": []} ;
		storage.rulers.push({"hash": hash, "type": opts.type, "left": ruler.style.left, "top": ruler.style.top});
		localStorage.setItem('_rlrs_', JSON.stringify(storage));
	}
}

function __rlrs_resetRulers() {
	if (confirm("All rulers will be deleted. Do you agree?")) {
		var rulers = document.querySelectorAll("._rlrs_ruler");
		for (var i=rulers.length-1; i>=0; i--) {
			rootSpace.removeChild(rulers[i]);
		}

		__saveToStorage("rulers",[]);
	}
}

function __saveToStorage(key, data) {
	var storage = JSON.parse(localStorage.getItem('_rlrs_')) || {} ;
	storage[key] = data;

	localStorage.setItem('_rlrs_', JSON.stringify(storage));
}

function _rlrs_activateListener(ruler) {
	ruler.addEventListener("mousedown", function() {
		_rlrs_rulerSelected(ruler);
	}.bind(ruler));
	ruler.addEventListener("mouseup", function() {
		_rlrs_rulerDeselected(ruler);
	}.bind(ruler));
}

function _rlrs_rulerSelected(ruler) {
	window._rlrs_movingRuler = ruler;
}

function _rlrs_rulerDeselected(ruler) {
	var hash = ruler.getAttribute("data-hash");
	/* save his new position */
	var storage = JSON.parse(localStorage.getItem('_rlrs_'));
	for (var i in storage.rulers) {
		if (storage.rulers[i].hash===hash) {
			storage.rulers[i].left =  ruler.style.left;
			storage.rulers[i].top =  ruler.style.top;
		}
	}
	localStorage.setItem('_rlrs_', JSON.stringify(storage));

	window._rlrs_movingRuler = null;
}

function _rlrs_mouseMove(event) {
	if(window._rlrs_movingRuler) {
		if (window._rlrs_movingRuler.getAttribute('data-type')==='v') {
			
			window._rlrs_movingRuler.style.left = event.pageX + "px";
		} else {
			window._rlrs_movingRuler.style.top = event.pageY + "px";
		}
	}
}

function __rlrs_makeButton() {
	var btn = document.createElement("span");
	btn.style.display = "inline-block";
	btn.style.margin = "2px";
	btn.style.padding = "3px 5px";
	btn.style.background = "#333";
	btn.style.color = "#efefef";
	btn.style.cursor = "pointer";
	btn.style.borderRadius = "3px";
	btn.style.boxShadow = "0 0 2px #ccc";

	return btn;
}

function __rlrs_makeSmallButton() {
	var btn = document.createElement("span");
	btn.style.display = "inline-block";
	btn.style.margin = "2px";
	btn.style.padding = "2px";
	btn.style.background = "#333";
	btn.style.color = "#efefef";
	btn.style.cursor = "pointer";
	btn.style.borderRadius = "2px";
	btn.style.boxShadow = "0 0 2px #ccc";
	btn.style.width = "8px";
	btn.style.height = "8px";

	return btn;
}

/* build control panel */
function _rlrs_buildControlPanel() {
	var bodyRef = document.querySelector("body");

	var panel = document.createElement("div");
		panel.setAttribute("id","_rlrs_panel");
		panel.style.fontFamily = "Verdana, Geneva, sans-serif";
		panel.style.fontSize = "12px";
		panel.style.position = "fixed";
		panel.style.background = "rgba(200,200,200,0.8)";
		panel.style.border = "1px dashed #999";
		panel.style.width = "100px";
		panel.style.height = "300px";
		panel.style.left = "2px";
		panel.style.top = "2px";
		panel.style.borderRadius = "4px";
		panel.style.zIndex  = 99999;
		panel.style.boxShadow  = "0 0 4px #ccc";
		panel.style.padding = "10px";
		panel.style.textAlign = "center";

	var headLine = document.createElement("div");
		headLine.textContent = "rulers.js";
		headLine.style.color = "#555";
		headLine.style.textAlign = "center";
		headLine.style.fontSize = "10px";
		headLine.style.borderBottom = "1px dotted #777";

	var addBtnVert = __rlrs_makeButton();
		addBtnVert.innerHTML = "<small>add</small><strong>  |  </strong>";
		addBtnVert.addEventListener("click", _rlrs_createRulerVertical);
	var addBtnHor = __rlrs_makeButton();
		addBtnHor.innerHTML = "<small>add</small><strong> — </strong>";
		addBtnHor.addEventListener("click", _rlrs_createRulerHorizontal);

	/* reset button */
	var resetBtn = __rlrs_makeButton();
		resetBtn.innerHTML = "<strong>reset</strong>";
		resetBtn.addEventListener("click", __rlrs_resetRulers);


	/* panel position buttons */
	var tlBtn = __rlrs_makeSmallButton();
	var trBtn = __rlrs_makeSmallButton();
	var blBtn = __rlrs_makeSmallButton();
	var brBtn = __rlrs_makeSmallButton();

		tlBtn.textContent = "˹";
		tlBtn.setAttribute('data-position', 'tl');
		tlBtn.style.position = "absolute";
		tlBtn.style.lineHeight = "10px";
		tlBtn.style.left = "2px";
		tlBtn.style.top = "2px";
		tlBtn.addEventListener("click", _rlrs_setPanelPosition);

		trBtn.textContent = "˺";
		trBtn.setAttribute('data-position', 'tr');
		trBtn.style.position = "absolute";
		trBtn.style.lineHeight = "10px";
		trBtn.style.right = "2px";
		trBtn.style.top = "2px";
		trBtn.style.textAlign = "right";
		trBtn.addEventListener("click", _rlrs_setPanelPosition);

		blBtn.textContent = "˻";
		blBtn.setAttribute('data-position', 'bl');
		blBtn.style.position = "absolute";
		blBtn.style.lineHeight = "0px";
		blBtn.style.left = "2px";
		blBtn.style.bottom = "2px";
		blBtn.addEventListener("click", _rlrs_setPanelPosition);

		brBtn.textContent = "˼";
		brBtn.setAttribute('data-position', 'br');
		brBtn.style.position = "absolute";
		brBtn.style.lineHeight = "0px";
		brBtn.style.right = "2px";
		brBtn.style.bottom = "2px";
		brBtn.style.textAlign = "right";
		brBtn.addEventListener("click", _rlrs_setPanelPosition);

	panel.appendChild(tlBtn);
	panel.appendChild(trBtn);
	panel.appendChild(blBtn);
	panel.appendChild(brBtn);

	panel.appendChild(headLine);
	panel.appendChild(addBtnVert);
	panel.appendChild(addBtnHor);
	panel.appendChild(resetBtn);
	bodyRef.appendChild(panel);
}

function _rlrs_setPanelPosition() {
	var panel = document.querySelector("#_rlrs_panel");
	var pos = this.getAttribute("data-position"); 
	/* panel position reset */
	panel.style.left = "auto";
	panel.style.right = "auto";
	panel.style.top = "auto";
	panel.style.bottom = "auto";

	switch (pos) {
		case "tl": panel.style.top = "2px";
				   panel.style.left = "2px";
			break;
		case "tr": panel.style.top = "2px";
				   panel.style.right = "2px";
			break;
		case "bl": panel.style.bottom = "2px";
				   panel.style.left = "2px";
			break;
		case "br": panel.style.bottom = "2px";
				   panel.style.right = "2px";
			break;
		default:   panel.style.top = "2px";
				   panel.style.left = "2px";
	}

}

/* build controls */
setTimeout(function(){
	_rlrs_buildControlPanel();

	/* try to load from localStorage */
	var storage = JSON.parse(localStorage.getItem('_rlrs_')) || {} ;
	if (storage.rulers) {
		for (var i in storage.rulers) {
			var opts = {
				"hash": storage.rulers[i].hash,
				"type": storage.rulers[i].type,
				"left": storage.rulers[i].left,
				"top": storage.rulers[i].top
			};

			__rlrs_createRuler(opts);
		}
	}

},500);


void(0);

