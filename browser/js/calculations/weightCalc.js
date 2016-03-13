#!/bin/sh

//this is the draft of the function for converting height to weight

//accept height in inches as input and output weight in kg

function heightToWeight (heightIN){
	var heightCM = heightIN * 2.54;
	var weight;
	if (heightCM < 90){
		return weight = -8.577 * 0.241*heightCM;
	} else {
		return weight = 2.322*2.718^(0.019*heightCM);
	}
}

function monthToWeight (months){
	if (months >= 0){
		return 0.2898*months + 1.7735;
	}
	return -1; //error: negative age
}

function yearToWeight (years){
	if (year >=1 && year <=20){
		return 3.5105*years + 2.9545;
	}
	return -1; //error age less than 1 year
}
