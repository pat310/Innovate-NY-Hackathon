'use strict';

angular.module('InnovateNYP')
.factory('Calculation', function(){
  let Calculation = {};

  Calculation.height = null;
  Calculation.patientWeight = null;

  Calculation.drugCalc = function (concentration, dosage, doseUnit, maxDose){
		var drugDose, drugVolume;
		if (doseUnit === "units/min" || doseUnit === "mcg/min"){ //Need to adjust if we add unit/kg/HOUR
			drugDose = dosage*Calculation.patientWeight;
			if (drugDose > maxDose){
				drugDose = maxDose;
			}
			drugVolume = (drugDose / concentration) * 60;
			return [drugDose, drugVolume, doseUnit + '/hr']; //returns an array with drugDose and hourly dripRate
		}
		if (doseUnit === 'ml'){
			drugDose= dosage * Calculation.patientWeight;
			drugVolume = drugDose;
			return [drugDose, drugVolume, 'mL/hr'];
		}
		else {
			drugDose = dosage * Calculation.patientWeight;
			drugVolume = drugDose / concentration;
			return [drugDose, drugVolume, 'mL']; //returns an array with drugDose and drugVolume
		}
	};

	Calculation.heightToWeight = function (){
		var heightCM = Calculation.height * 2.54; //Calculation.height is in inches
		if(heightCM < 90) Calculation.patientWeight = -8.577 * 0.241 * heightCM;
		Calculation.patientWeight = 2.322 * Math.pow(2.718, (0.019 * heightCM));
		return Calculation.patientWeight;
	};

	Calculation.monthToWeight = function (months){
		if (months >= 0) Calculation.patientWeight = 0.2898*months + 1.7735;
		return Calculation.patientWeight;
	};

	Calculation.yearToWeight = function (year){
		if (year >= 1 && year <= 20) Calculation.patientWeight = 3.5105*year + 2.9545;
		return Calculation.patientWeight;
	};

  return Calculation;
});
