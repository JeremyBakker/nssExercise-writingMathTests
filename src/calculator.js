"use strict";

/* 
Calculator is a single-page application that fulfills 
the requirements of an assignment at Nashville Software 
School. For full project parameters, see README.md.
*/

/*============================================*/
/*=============GLOBAL VARIABLES===============*/
/*============================================*/

let enterTextInput,
	clickTextInput,
	operation,
	solution;

/*============================================*/
/*=============EVENT LISTENERS================*/
/*============================================*/


$("#add").click((event)=>{
	gatherClickData();
});

$("#subtract").click((event)=>{
	gatherClickData();
});

$("#multiply").click((event)=>{
	gatherClickData();
});

$("#divide").click((event)=>{
	gatherClickData();
});

$("#square").click((event)=>{
	gatherClickData();
});

$("#squareRoot").click((event)=>{
	clickTextInput = parseInt($("#numberInput").val());
	compute("squareRoot", clickTextInput);
});

$("#numberInput").keypress((event) => {
	$("#solution").html("");
	if (event.which == 13) {
		enterTextInput = parseInt($("#numberInput").val());
		compute(operation, clickTextInput, enterTextInput);
	}
});

/*============================================*/
/*================FUNCTIONS===================*/
/*============================================*/

function gatherClickData() {
	$("#solution").html(""); // clear lingering solution from prior calculations
	clickTextInput = parseInt($("#numberInput").val());
	$("#numberInput").val("");
	operation = event.currentTarget.id;
}

function compute(operation, clickTextInput, enterTextInput){
	switch (operation) {
	case "add": 
		add(clickTextInput, enterTextInput);
		break;
	case "subtract":
		subtract(clickTextInput, enterTextInput); 
		break;
	case "multiply":
		multiply(clickTextInput, enterTextInput); 
		break;
	case "divide":
		divide(clickTextInput, enterTextInput); 
		break;
	case "square":
		square(clickTextInput, enterTextInput); 
		break;
	case "squareRoot":
		squareRoot(clickTextInput, enterTextInput); 
		break;
	}
}

function add(a,b){
	solution = a + b;
	$("#solution").html(solution);
	$("#numberInput").val("");
}
function subtract(a,b){
	solution = a - b;
	$("#solution").html(solution);
	$("#numberInput").val("");
}

function multiply(a,b){
	solution = a * b;
	$("#solution").html(solution);
	$("#numberInput").val("");
}

function divide(a,b){
	solution = a/b;
	$("#solution").html(solution);
	$("#numberInput").val("");
}

function square(a,b){
	solution = Math.pow(a,b);
	$("#solution").html(solution);
	$("#numberInput").val("");
}

function squareRoot(a){
	solution = Math.sqrt(a);
	$("#solution").html(solution);
	$("#numberInput").val("");
}
