/***********************************************************************************************************
 * ********************************** FOR EVERY CUSTOM-BOX CODE WITHOUT ENABLE/DISABLE OPTION  *************
 * *********************************************************************************************************/

var x, i, j, l, ll, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
	selElmnt = x[i].getElementsByTagName("select")[0];
	ll = selElmnt.length;
	a = document.createElement("DIV");
	a.setAttribute("class", "select-selected");
	a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
	x[i].appendChild(a);
	/*for each element, create a new DIV that will contain the option list:*/
	b = document.createElement("DIV");
	b.setAttribute("class", "select-items select-hide");
	for (j = 1; j < ll; j++) {
		/*for each option in the original select element,
    create a new DIV that will act as an option item:*/
		c = document.createElement("DIV");
		c.innerHTML = selElmnt.options[j].innerHTML;
		// To make some options as a header by adding option header-class
		if (selElmnt.options[j].className === "option-header") {
			c.classList.add('option-header');
		}
		c.addEventListener("click", function (e) {
			/*when an item is clicked, update the original select box,
        and the selected item:*/
			var y, i, k, s, h, sl, yl;
			s = this.parentNode.parentNode.getElementsByTagName("select")[0];
			sl = s.length;
			h = this.parentNode.previousSibling;
			for (i = 0; i < sl; i++) {
				if (s.options[i].innerHTML == this.innerHTML) {
					s.selectedIndex = i;
					h.innerHTML = this.innerHTML;
					y = this.parentNode.getElementsByClassName("same-as-selected");
					yl = y.length;
					for (k = 0; k < yl; k++) {
						y[k].removeAttribute("class");
					}
					this.setAttribute("class", "same-as-selected");
					break;
				}
			}
			h.click();
		});
		b.appendChild(c);
	}
	x[i].appendChild(b);
	a.addEventListener("click", function (e) {
		/*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
		e.stopPropagation();
		closeAllSelect(this);
		this.nextSibling.classList.toggle("select-hide");
		this.classList.toggle("select-arrow-active");
	});
}

function closeAllSelect(elmnt) {
	/*a function that will close all select boxes in the document,
  except the current select box:*/
	var x, y, i, xl, yl, arrNo = [];
	x = document.getElementsByClassName("select-items");
	y = document.getElementsByClassName("select-selected");
	xl = x.length;
	yl = y.length;
	for (i = 0; i < yl; i++) {
		if (elmnt == y[i]) {
			arrNo.push(i)
		} else {
			y[i].classList.remove("select-arrow-active");
		}
	}
	for (i = 0; i < xl; i++) {
		if (arrNo.indexOf(i)) {
			x[i].classList.add("select-hide");
		}
	}
}


/***********************************************************************************************************
 * ********************  CUSTOM-BOX NO 1 CODE with ENABLE/DISABLE property through input-text **************
 * *********************************************************************************************************/
var box1, i, j, boxLength1, optionLength1, selectbox1, customSelectbox1, customOptions1, selectedOption1;
box1 = document.getElementById('customBox1');
boxLength1 = 1;
console.log(boxLength1);
for (i = 0; i < boxLength1; i++) {
	selectbox1 = document.getElementsByClassName('select1')[0];
	optionLength1 = selectbox1.length;
	/*for each element, create a new DIV that will act as the selected item:*/
	selectedOption1 = document.createElement("DIV");
	selectedOption1.setAttribute("class", "select-selected");
	selectedOption1.innerHTML = selectbox1.options[selectbox1.selectedIndex].innerHTML;
	box1.appendChild(selectedOption1);
	/*for each element, create a new DIV that will contain the option list:*/
	customSelectbox1 = document.createElement("DIV");
	customSelectbox1.setAttribute("class", "select-items select-hide");
	for (j = 1; j < optionLength1; j++) {
		/*for each option in the original select element,
      create a new DIV that will act as an option item:*/
		customOptions1 = document.createElement("div");
		customOptions1.innerHTML = selectbox1.options[j].innerHTML;
		// To make some options as a header by adding option-header class
		if (selectbox1.options[j].className === "option-header") {
			customOptions1.classList.add('option-header');
		}
		customOptions1.addEventListener("click", function (e) {
			/*when an item is clicked, update the original select box,
            and the selected item:*/
			var y, i, k, s, h, sl, yl;
			s = this.parentNode.parentNode.getElementsByTagName("select")[0];
			sl = s.length;
			h = this.parentNode.previousSibling;
			for (i = 0; i < sl; i++) {
				if (s.options[i].innerHTML == this.innerHTML) {
					s.selectedIndex = i;
					h.innerHTML = this.innerHTML;
					y = this.parentNode.getElementsByClassName("same-as-selected");
					yl = y.length;
					for (k = 0; k < yl; k++) {
						y[k].removeAttribute("class");
					}
					this.setAttribute("class", "same-as-selected");
					break;
				}
			}
			h.click();
		});
		customSelectbox1.appendChild(customOptions1);
	}
	box1.appendChild(customSelectbox1);
	selectedOption1.addEventListener("click", function (e) {
		/*when the select box is clicked, close any other select boxes,
        and open/close the current select box:*/
		e.stopPropagation();
		closeAllSelect1(this);
		this.nextSibling.classList.toggle("select-hide");
		this.classList.toggle("select-arrow-active");
	});
}



/***********************************************************************************************************
 * ***********************  CUSTOM-BOX NO 2 CODE with ENABLE/DISABLE property through input tex ************
 * *********************************************************************************************************/
var box2, boxLength2, optionLength2, selectbox2, customSelectbox2, customOptions2, selectedOption2;
box2 = document.getElementById('customBox2');
boxLength2 = 1;
console.log("2nd box", boxLength2);
for (i = 0; i < boxLength2; i++) {
	selectbox2 = document.getElementsByClassName('select2')[0];
	optionLength2 = selectbox2.length;
	selectedOption2 = document.createElement("DIV");
	selectedOption2.setAttribute("class", "select-selected");
	selectedOption2.innerHTML = selectbox2.options[selectbox2.selectedIndex].innerHTML;
	box2.appendChild(selectedOption2);
	customSelectbox2 = document.createElement("DIV");
	customSelectbox2.setAttribute("class", "select-items select-hide");
	for (j = 1; j < optionLength2; j++) {
		customOptions2 = document.createElement("div");
		customOptions2.innerHTML = selectbox2.options[j].innerHTML;
		if (selectbox2.options[j].className === "option-header") {
			customOptions2.classList.add('option-header');
		}
		customOptions2.addEventListener("click", function (e) {
			var y, i, k, s, h, sl, yl;
			s = this.parentNode.parentNode.getElementsByTagName("select")[0];
			sl = s.length;
			h = this.parentNode.previousSibling;
			for (i = 0; i < sl; i++) {
				if (s.options[i].innerHTML == this.innerHTML) {
					s.selectedIndex = i;
					h.innerHTML = this.innerHTML;
					y = this.parentNode.getElementsByClassName("same-as-selected");
					yl = y.length;
					for (k = 0; k < yl; k++) {
						y[k].removeAttribute("class");
					}
					this.setAttribute("class", "same-as-selected");
					break;
				}
			}
			h.click();
		});
		customSelectbox2.appendChild(customOptions2);
	}
	box2.appendChild(customSelectbox2);
	selectedOption2.addEventListener("click", function (e) {
		e.stopPropagation();
		closeAllSelect1(this);
		this.nextSibling.classList.toggle("select-hide");
		this.classList.toggle("select-arrow-active");
	});
}

function closeAllSelect1(elmnt) {
	var x, y, i, xl, yl, arrNo = [];
	x = document.getElementsByClassName("select-items");
	y = document.getElementsByClassName("select-selected");
	xl = x.length;
	yl = y.length;
	for (i = 0; i < yl; i++) {
		if (elmnt == y[i]) {
			arrNo.push(i)
		} else {
			y[i].classList.remove("select-arrow-active");
		}
	}
	for (i = 0; i < xl; i++) {
		if (arrNo.indexOf(i)) {
			x[i].classList.add("select-hide");
		}
	}
}


/***********************************************************************************************************
 * **********************  CODE FOR MAKING TWO SPECIFIC CUSTOM BOX ENABLE/DISABLE THROUGH INPUT TEXT **
 * *********************************************************************************************************/
let inputText = document.querySelector('.text-box');
if (inputText.value == "") {
	selectedOption1.classList.add('disable')
	selectedOption2.classList.add('disable')
	customSelectbox1.classList.add('disappear')
	customSelectbox2.classList.add('disappear')
}
inputText.oninput = () => {
	if (inputText.value == "") {
		selectedOption1.classList.add('disable')
		selectedOption2.classList.add('disable')
		customSelectbox1.classList.add('disappear')
		customSelectbox2.classList.add('disappear')
	} else {
		selectedOption1.classList.remove('disable')
		selectedOption2.classList.remove('disable')
		customSelectbox1.classList.remove('disappear')
		customSelectbox2.classList.remove('disappear')
	}
}