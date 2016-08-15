Medication Reminder Sample App
==============================

This app reminds individuals or their caregivers of upcoming and missed medications.

The calendar control defaults to the current date. All medications for the selected day are displayed and ordered by time.

Beginning 5 minutes prior to medication time, a button will be enabled to mark the medication as completed.

At medication time there will be a chime sound and visual indication of which medication to take along with the dosage.

5 minutes after medication time there will be a louder, more annoying sound and the medication will be marked as missed.

All missed medications will be displayed in a separate area of the screen.

### Technology Stack
* MongodDB
* Node.js
* Mongoose
* Express
* AngularJS
* Bootstrap
* Moment.js

### Getting Started

1. Install NodeJS and NPM
2. Install MongoDB and start the process
3. Clone this repository
4. npm install
5. bower install
6. grunt serve

Solution
========
The medications are ordered by time (past to future). Custom filters are added to indicate the status of the medication based on the time past and will update in real time.

* Red - missed medication (cross icon)
* Green - current medication (checkmark icon)
* Blue - upcoming medication (flag icon)

The current medication is clickable to be marked as completed (this satisfy the requirement of button enabled to be marked). 