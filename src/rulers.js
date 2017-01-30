/* Rulers - bookmarklet
 * Description: adding rulers to measure pages for pixel perfection
 * Author: Martin Nechvatal
 * E-mail: martin.nech@gmail.com
 *
 * source: github.com/ArxSargos
*/

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

	// css reset
	this.workspace.style.all = "initial";

	this.bodyRef.appendChild(this.workspace);

	// ShadowDOM feature detection
	var shadowDomSupported = false;
	if (document.body.attachShadow) { shadowDomSupported = true; }

	// Attaching ShadowDOM or fallback for just an element
	if (shadowDomSupported) {
		this.rootSpace = this.workspace.attachShadow({mode: 'closed'});
	} else { // fallback to older browsers
		this.rootSpace = this.workspace;
	}

	/* screen parameters */
	this.htmlRef = document.documentElement;
	this.rlrs_height =  Math.max( this.bodyRef.scrollHeight, this.bodyRef.offsetHeight, this.htmlRef.clientHeight, this.htmlRef.scrollHeight, this.htmlRef.offsetHeight );
	this.rlrs_width =  Math.max( this.bodyRef.scrollWidth, this.bodyRef.offsetWidth, this.htmlRef.clientWidth, this.htmlRef.scrollWidth, this.htmlRef.offsetWidth );
	this.rlrs_movingRuler = null;

	/* mousemove handler */
	document.addEventListener("mousemove", this._mouseMove.bind(this));

	/* inject base64 images and styles */
	this.scaleVertical  = "._rlrs_scaleVert {";
	this.scaleVertical += "background-image: url('data:image/png;base64,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');";
	this.scaleVertical += "background-position: 0px 0px; background-repeat: repeat-y; height: 100%; margin-left: -25px; width: 50px;";
	this.scaleVertical += "}";

	this.scaleHorizontal  = "._rlrs_scaleHor {";
	this.scaleHorizontal += "background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAyCAYAAACqNX6+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAAPVJREFUeNrs27FthEAQRuHZa4ECIEWiCvItgSac0BdugTKul3FgyZF1tnSytex9T0J/MsnwNMMklMwMNEEtpRw376EtCCEEhBDy7x/DJASEEAJCCAEheE5InaYpG6779Xl8hT5MiJUFQggBIYSAkBcRUtd1zQf5dU+r+/s6E2Jl4aGQfd+PiIir53meXaQJsbJAyJWEbNv2FhFx9ZznuYu8Lctyj4i4eg7D0EVaWa2RmT89dRzHbLnus40++jAhriwQQggIIQSEvAClg79waynlyMzSQx8mxMoCIYSAEEJAyPe8d3DymhBCQAgheJoPAAAA//8DAPIWiH9lgUKoAAAAAElFTkSuQmCC');";
	this.scaleHorizontal += "background-position: 0px 0px; background-repeat: repeat-x; width: 100%; margin-top: -25px; height: 50px;";
	this.scaleHorizontal += "}";

	this.headRef = document.head || document.getElementsByTagName('head')[0];

	this.rulersStyles = "<style>";
	this.rulersStyles += this.scaleVertical + this.scaleHorizontal;
	this.rulersStyles += "</style>";
	this.headRef.innerHTML += this.rulersStyles;

	this.rulerColor = "rgba(255,30,0,1)";

	this.panelRef = null;

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
};

_rlrsRulers.prototype.__newHash = function() {
	return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10);
};

_rlrsRulers.prototype._rulerSelected = function(ruler) {
	this._rlrs_movingRuler = ruler;
};

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
};

_rlrsRulers.prototype._activateListener = function(ruler) {
	var self = this;
	ruler.addEventListener("mousedown", function() {
		self._rulerSelected(ruler);
	}.bind(ruler));
	ruler.addEventListener("mouseup", function() {
		self._rulerDeselected(ruler);
	}.bind(ruler));
};

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
		ruler.style.overflow = "visible";
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
};

_rlrsRulers.prototype._createRulerVertical = function() {
	var opts = {
		"type": "v",
		"notStored": true
	};
	this.__createRuler(opts);
};

_rlrsRulers.prototype._createRulerHorizontal = function() {
	var opts = {
		"type": "h",
		"notStored": true
	};
	this.__createRuler(opts);
};

_rlrsRulers.prototype._createScopedRulerVertical = function() {
	var opts = {
		"type": "v",
		"notStored": true,
		"scope": true 
	};
	this.__createRuler(opts);
};

_rlrsRulers.prototype._createScopedRulerHorizontal = function() {
	var opts = {
		"type": "h",
		"notStored": true,
		"scope": true 
	};
	this.__createRuler(opts);
};

_rlrsRulers.prototype.__resetRulers = function() {
	if (confirm("All rulers will be deleted. Do you agree?")) {
		var rulers = document.querySelectorAll("._rlrs_ruler");
		for (var i=rulers.length-1; i>=0; i--) {
			this.rootSpace.removeChild(rulers[i]);
		}

		this.__saveToStorage("rulers",[]);
		return true;
	}
	return false;
};

_rlrsRulers.prototype._importRulers = function() {
	var input = document.querySelector("#_rlrs_ioInput");
	if (input.value.length) {
		if (this.__resetRulers()) {
			var storage = JSON.parse(localStorage.getItem('_rlrs_')) || {"rulers": []} ;
			storage.rulers = JSON.parse(input.value);
			localStorage.setItem('_rlrs_', JSON.stringify(storage));
		}
	}
};

_rlrsRulers.prototype._exportRulers = function() {
	var input = document.querySelector("#_rlrs_ioInput");

	var storage = JSON.parse(localStorage.getItem('_rlrs_')) || {"rulers": []} ;
	input.value = JSON.stringify(storage.rulers);
	input.focus();
	/* select text */
	setTimeout(function () { input.select(); }, 0);
};

_rlrsRulers.prototype.__saveToStorage = function(key, data) {
	var storage = JSON.parse(localStorage.getItem('_rlrs_')) || {} ;
	storage[key] = data;

	localStorage.setItem('_rlrs_', JSON.stringify(storage));
};

_rlrsRulers.prototype._mouseMove = function(event) {
	if(this._rlrs_movingRuler) {
		if (this._rlrs_movingRuler.getAttribute('data-type')==='v') {
			this._rlrs_movingRuler.style.left = event.pageX + "px";
			if (this._rlrs_movingRuler.children.length>0 && this._rlrs_movingRuler.children[0].classList.contains("_rlrs_scaleVert")) {
				this._rlrs_movingRuler.children[0].style.backgroundPosition = 0 + "px " + event.pageY + "px";
            }
		} else {
			this._rlrs_movingRuler.style.top = event.pageY + "px";
            if (this._rlrs_movingRuler.children.length>0 && this._rlrs_movingRuler.children[0].classList.contains("_rlrs_scaleHor")) {
                this._rlrs_movingRuler.children[0].style.backgroundPosition = event.pageX + "px " + 0 + "px" ;
            }
		}
	}
};

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
};

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
};

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

	/* import/export */
	var importBtn = this.__makeButton();
		importBtn.innerHTML = "<small>import</small>";
		importBtn.addEventListener("click", this._importRulers.bind(this));
	var exportBtn = this.__makeButton();
		exportBtn.innerHTML = "<small>export</small>";
		exportBtn.addEventListener("click", this._exportRulers.bind(this));
	var ioInput =  document.createElement("input");
		ioInput.setAttribute("id","_rlrs_ioInput");
		ioInput.style.display = "block";
		ioInput.style.width = "100%";
		ioInput.style.padding = "0";

	var delimiter =  document.createElement("hr");

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
		tlBtn.style.position = "absolute";
		tlBtn.style.lineHeight = "10px";
		tlBtn.style.left = "2px";
		tlBtn.style.top = "2px";
		tlBtn.addEventListener("click", this._setPanelPosition.bind(this,  "tl"));

		trBtn.textContent = "˺";
		trBtn.style.position = "absolute";
		trBtn.style.lineHeight = "10px";
		trBtn.style.right = "2px";
		trBtn.style.top = "2px";
		trBtn.style.textAlign = "right";
		trBtn.addEventListener("click", this._setPanelPosition.bind(this,  "tr"));

		blBtn.textContent = "˻";
		blBtn.style.position = "absolute";
		blBtn.style.lineHeight = "0px";
		blBtn.style.left = "2px";
		blBtn.style.bottom = "2px";
		blBtn.addEventListener("click", this._setPanelPosition.bind(this,  "bl"));

		brBtn.textContent = "˼";
		brBtn.style.position = "absolute";
		brBtn.style.lineHeight = "0px";
		brBtn.style.right = "2px";
		brBtn.style.bottom = "2px";
		brBtn.style.textAlign = "right";
		brBtn.addEventListener("click", this._setPanelPosition.bind(this, "br"));

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

	panel.appendChild(delimiter);
	panel.appendChild(importBtn);
	panel.appendChild(exportBtn);
	panel.appendChild(ioInput);

	this.panelRef = panel;

	this.rootSpace.appendChild(panel);
};

_rlrsRulers.prototype._setPanelPosition = function(pos) {
	var panel = this.panelRef;

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

};

/* build controls */
setTimeout(function(){
	/* construct rulers class */
	window.rlrs = new _rlrsRulers();

},500);


void(0);