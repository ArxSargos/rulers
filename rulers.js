/* Rulers - bookmarklet
 * Description: adding rulers to measure pages for pixel perfection
 * Author: Martin Nechvatal
 * E-mail: martin.nech@gmail.com
 *
 * source: github.com/ArxSargos
*/

javascript:
"use strict";

/* rulers class */
var _rlrsRulers = function () {
	this.bodyRef = document.querySelector("body");

	this.workspace = document.createElement("div");
	this.workspace.style.position = "absolute";
	this.workspace.style.left = "0";
	this.workspace.style.top = "0";
	this.workspace.style.width = "0";
	this.workspace.style.height = "0";
	this.workspace.style.overflow = "visible";

	this.bodyRef.appendChild(this.workspace);
	/* modify to shadowRoot when nativelly supported */
	this.rootSpace = /*workspace.createShadowRoot();*/ this.workspace;

	/* screen parameters */
	this.htmlRef = document.documentElement;
	this.rlrs_height =  Math.max( this.bodyRef.scrollHeight, this.bodyRef.offsetHeight, this.htmlRef.clientHeight, this.htmlRef.scrollHeight, this.htmlRef.offsetHeight );
	this.rlrs_width =  Math.max( this.bodyRef.scrollWidth, this.bodyRef.offsetWidth, this.htmlRef.clientWidth, this.htmlRef.scrollWidth, this.htmlRef.offsetWidth );
	this.rlrs_movingRuler = null;

	/* mousemove handler */
	document.addEventListener("mousemove", this._mouseMove.bind(this));

	/* inject base64 images and styles */
	this.scaleVertical  = "._rlrs_scaleVert {";
	this.scaleVertical += "background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAyCAMAAAC58gFMAAAACVBMVEX/AAD/////AACEEbvXAAAAAnRSTlMAAHaTzTgAAAAmSURBVHgBY2CEARwsBiYmJjyyIIDGYgIBZHW0t4Metg15O5hgAACsSAG4OZBTvgAAAABJRU5ErkJggg==);";
	this.scaleVertical += "background-position: 0px 1px; background-repeat: repeat-y; height: 100%; margin-left: -3px; width: 9px;";
	this.scaleVertical += "}";

	this.scaleHorizontal  = "._rlrs_scaleHor {";
	this.scaleHorizontal += "background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAJCAMAAABHXI/tAAAACVBMVEX/AAD/////AACEEbvXAAAAAnRSTlMAAHaTzTgAAAAwSURBVHgBY2AkFTCRr4WBgYkRwUIwsbEYQPqgYggWDkEmOmthgIkhWAgmJos+gQwAjSkBuKKlVusAAAAASUVORK5CYII=);";
	this.scaleHorizontal += "background-position: 1px 0px; background-repeat: repeat-x; width: 100%; margin-top: -3px; height: 9px;";
	this.scaleHorizontal += "}";

	this.headRef = document.head || document.getElementsByTagName('head')[0];

	this.rulersStyles = "<style>";
	this.rulersStyles += this.scaleVertical + this.scaleHorizontal;
	this.rulersStyles += "</style>";
	this.headRef.innerHTML += this.rulersStyles;

	this.rulerColor = "rgba(255,30,0,1)";

	/* init */
	this._buildControlPanel();

	/* try to load from localStorage */
	var storage = JSON.parse(localStorage.getItem('_rlrs_')) || {} ;
	if (storage.rulers) {
		for (var i in storage.rulers) {
			var opts = {
				"hash": storage.rulers[i].hash,
				"type": storage.rulers[i].type,
				"left": storage.rulers[i].left,
				"top": storage.rulers[i].top,
				"scope": storage.rulers[i].scope
			};

			this.__createRuler(opts);
		}
	}
}

_rlrsRulers.prototype.__newHash = function() {
	return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10);
}

_rlrsRulers.prototype._rulerSelected = function(ruler) {
	this._rlrs_movingRuler = ruler;
}

_rlrsRulers.prototype._rulerDeselected = function(ruler) {
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

	this._rlrs_movingRuler = null;
}

_rlrsRulers.prototype._activateListener = function(ruler) {
	var self = this;
	ruler.addEventListener("mousedown", function() {
		self._rulerSelected(ruler);
	}.bind(ruler));
	ruler.addEventListener("mouseup", function() {
		self._rulerDeselected(ruler);
	}.bind(ruler));
}

_rlrsRulers.prototype.__createRuler = function(opts) {
	var stH = (this.rlrs_height).toString() + "px";
	var stL = (this.rlrs_width).toString() + "px";
	var stHhalf = (Math.floor(this.rlrs_height/2)).toString() + "px";
	var stLhalf = (Math.floor(this.rlrs_width/2)).toString() + "px";
	var windVertHalf = (Math.floor((screen.height/2)) + window.pageYOffset).toString() + "px";

	var hash = opts.hash ? opts.hash : this.__newHash();

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
		ruler.style.overflow = "visible"
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

	if(opts.scope===true) {
		ruler.innerHTML = (opts.type==='v') ? '<div class="_rlrs_scaleVert"></div>' : '<div class="_rlrs_scaleHor"></div>';
	}

	this.rootSpace.appendChild(ruler);

	/* activate mouse listener */
	this._activateListener(ruler);

	/* add ruler to localStorage if new */
	if(opts.notStored) {
		var storage = JSON.parse(localStorage.getItem('_rlrs_')) || {"rulers": []} ;
		storage.rulers.push({"hash": hash, "type": opts.type, "left": ruler.style.left, "top": ruler.style.top, "scope": opts.scope});
		localStorage.setItem('_rlrs_', JSON.stringify(storage));
	}
}

_rlrsRulers.prototype._createRulerVertical = function() {
	var opts = {
		"type": "v",
		"notStored": true
	};
	this.__createRuler(opts);
}

_rlrsRulers.prototype._createRulerHorizontal = function() {
	var opts = {
		"type": "h",
		"notStored": true
	};
	this.__createRuler(opts);
}

_rlrsRulers.prototype._createScopedRulerVertical = function() {
	var opts = {
		"type": "v",
		"notStored": true,
		"scope": true 
	};
	this.__createRuler(opts);
}

_rlrsRulers.prototype._createScopedRulerHorizontal = function() {
	var opts = {
		"type": "h",
		"notStored": true,
		"scope": true 
	};
	this.__createRuler(opts);
}

_rlrsRulers.prototype.__resetRulers = function() {
	if (confirm("All rulers will be deleted. Do you agree?")) {
		var rulers = document.querySelectorAll("._rlrs_ruler");
		for (var i=rulers.length-1; i>=0; i--) {
			this.rootSpace.removeChild(rulers[i]);
		}

		this.__saveToStorage("rulers",[]);
	}
}

_rlrsRulers.prototype.__saveToStorage = function(key, data) {
	var storage = JSON.parse(localStorage.getItem('_rlrs_')) || {} ;
	storage[key] = data;

	localStorage.setItem('_rlrs_', JSON.stringify(storage));
}

_rlrsRulers.prototype._mouseMove = function(event) {
	if(this._rlrs_movingRuler) {
		if (this._rlrs_movingRuler.getAttribute('data-type')==='v') {
			this._rlrs_movingRuler.style.left = event.pageX + "px";
		} else {
			this._rlrs_movingRuler.style.top = event.pageY + "px";
		}
	}
}

_rlrsRulers.prototype.__makeButton = function() {
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

_rlrsRulers.prototype.__makeSmallButton = function() {
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
_rlrsRulers.prototype._buildControlPanel = function() {
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

	var addBtnVert = this.__makeButton();
		addBtnVert.innerHTML = "<small>add</small><strong>  |  </strong>";
		addBtnVert.addEventListener("click", this._createRulerVertical.bind(this));
	var addBtnHor = this.__makeButton();
		addBtnHor.innerHTML = "<small>add</small><strong> — </strong>";
		addBtnHor.addEventListener("click", this._createRulerHorizontal.bind(this));
	var addBtnScopedVert = this.__makeButton();
		addBtnScopedVert.innerHTML = "<small>add</small><strong> ǂ |  </strong>";
		addBtnScopedVert.addEventListener("click", this._createScopedRulerVertical.bind(this));
	var addBtnScopedHor = this.__makeButton();
		addBtnScopedHor.innerHTML = "<small>add</small><strong> ǂ — </strong>";
		addBtnScopedHor.addEventListener("click", this._createScopedRulerHorizontal.bind(this));

	/* reset button */
	var resetBtn = this.__makeButton();
		resetBtn.innerHTML = "<strong>reset</strong>";
		resetBtn.addEventListener("click", this.__resetRulers.bind(this));


	/* panel position buttons */
	var tlBtn = this.__makeSmallButton();
	var trBtn = this.__makeSmallButton();
	var blBtn = this.__makeSmallButton();
	var brBtn = this.__makeSmallButton();

		tlBtn.textContent = "˹";
		tlBtn.setAttribute('data-position', 'tl');
		tlBtn.style.position = "absolute";
		tlBtn.style.lineHeight = "10px";
		tlBtn.style.left = "2px";
		tlBtn.style.top = "2px";
		tlBtn.addEventListener("click", this._setPanelPosition);

		trBtn.textContent = "˺";
		trBtn.setAttribute('data-position', 'tr');
		trBtn.style.position = "absolute";
		trBtn.style.lineHeight = "10px";
		trBtn.style.right = "2px";
		trBtn.style.top = "2px";
		trBtn.style.textAlign = "right";
		trBtn.addEventListener("click", this._setPanelPosition);

		blBtn.textContent = "˻";
		blBtn.setAttribute('data-position', 'bl');
		blBtn.style.position = "absolute";
		blBtn.style.lineHeight = "0px";
		blBtn.style.left = "2px";
		blBtn.style.bottom = "2px";
		blBtn.addEventListener("click", this._setPanelPosition);

		brBtn.textContent = "˼";
		brBtn.setAttribute('data-position', 'br');
		brBtn.style.position = "absolute";
		brBtn.style.lineHeight = "0px";
		brBtn.style.right = "2px";
		brBtn.style.bottom = "2px";
		brBtn.style.textAlign = "right";
		brBtn.addEventListener("click", this._setPanelPosition);

	panel.appendChild(tlBtn);
	panel.appendChild(trBtn);
	panel.appendChild(blBtn);
	panel.appendChild(brBtn);

	panel.appendChild(headLine);
	panel.appendChild(addBtnVert);
	panel.appendChild(addBtnHor);
	panel.appendChild(addBtnScopedVert);
	panel.appendChild(addBtnScopedHor);
	panel.appendChild(resetBtn);
	this.bodyRef.appendChild(panel);
}

_rlrsRulers.prototype._setPanelPosition = function() {
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
	/* construct rulers class */
	window.rlrs = new _rlrsRulers();

},500);


void(0);
