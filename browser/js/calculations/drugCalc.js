#!/bin/sh
//this takes as inputs: concentration, dosage, doseUnit, maxDose
//outputs: dose and volume for either push dose or drip

function drugCalc (kg, concentration, dosage, doseUnit, maxDose){
	var drugDose;
	if (doseUnit=="units/kg/min" || "mcg/kg/min"){ //Need to adjust if we add unit/kg/HOUR
		drugDose= dosage*kg;
		if (drugDose > maxDose){
			drugDose=maxDose;
		}
		var dripRate= (drugDose/concentration)*60;
		return [drugDose, dripRate]; //returns an array with drugDose and hourly dripRate
	}
	if (doseUnit=='ml'){
		drugDose= dosage * kg;
		drugVolume= drugDose;
		return [drugDose, drugVolume];
	}
	else {
	drugDose=dosage*kg;
		drugVolume=drugDose/concentration;
		return [drugDose, drugVolume]; //returns an array with drugDose and drugVolume
	}
}
