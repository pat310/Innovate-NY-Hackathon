#SnapDose - Built for the InnovateNYP Appathon. 
SnapDose is a device agnostic application designed for pediatric providers. SnapDose makes weight estimation and weight based dosing a snap. 

Approximately one-in-five pediatric patients are misdosed each year.  The goal of SnapDose is to reduce medication errors and under/overdosing pediatric patients, particularly in outpatient areas where accurate weights may not be readily available and emergencies are uncommon.

## Installation
1. `npm install`
2. `npm start`
3. In a seperate terminal: `gulp`

## Usage
* First, upload or snap a picture of an object to be calibrated (we have preloaded the size of a driver's license, credit card, debit card, etc. but you may select any object you wish and input the dimensions)
	* This calibration object must be in each photo that you upload of the patient in order to scale the patient's height
* Upload or snap a picture of the patient laying supine centered.  **Note:** Your calibration object must be present in the picture!
* *SnapDose* uses image recognition to automatically determine the patient's height
* From the patient's height, the weight is determined using an algorithm developed based on the CDC growth chart
* After the approximate weight is calculated, choose whether to accept or take a new picture
* Once a weight is accepted, a variety of emergency care areas are provided (alternatively, the user can choose to search from a larger list of care areas)
* A list of medications will be provided within each care area providing the medication name, concentration, dose/kg, and dose for the particular patient
* Selecting a medication will provide more detailed information as well as time stamping and storing the medication in a flow sheet for later documentation

## <a name="Team">Team</a>

| <a href="https://github.com/3mzel" target="_blank">**Michael**</a> | <a href="https://github.com/cez213" target="_blank">**Carolyn**</a> | <a href="https://github.com/pat310" target="_blank">**Patrick**</a> | <a href="https://github.com/mbthiery" target="_blank">**Matthew**</a> |
|:---:|:---:|:---:|:---:|
| <img src="https://avatars1.githubusercontent.com/u/13051229?v=3&s=400?s=200"> | <img src="https://avatars1.githubusercontent.com/u/12144611?v=3&s=400?s=200"> | <img src="https://avatars3.githubusercontent.com/u/12212504?v=3&s=460?s=200"> | <img src="https://avatars1.githubusercontent.com/u/13353346?v=3&s=400?s=200"> 
| <a href="http://github.com/3mzel" target="_blank">`3mzel`</a> | <a href="http://github.com/cez213" target="_blank">`cez213`</a> | <a href="http://github.com/pat310" target="_blank">`pat310`</a> | <a href="https://github.com/mbthiery">`mbthiery`</a> |
