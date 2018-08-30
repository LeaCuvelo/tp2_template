$(document).ready(function () {

	var control_sense_last_variable;
	var control_sense_average;
	document.getElementById("start-sense").onclick = startSensor;
	document.getElementById("stop-sense").onclick = stopSensor;
	var sensePicker = document.getElementById('period');

	function startSensor() {
		var intervalValue = sensePicker.options[sensePicker.selectedIndex].value;
		startGetSense(intervalValue);
	}

	function startGetSense(senseValue) {
		control_sense_last_variable = setInterval(senseLastVariable, senseValue * 1000);
		control_sense_average = setInterval(senseAverage, senseValue * 1000);
	}

	function stopSensor() {
		clearInterval(control_sense_last_variable);
		clearInterval(control_sense_average);
	}

	function senseLastVariable() {
		$.ajax({
			url: "/last-sample",
			type: 'get',
			success: function (data, status, jqXHR) {
				$("#last-sample-temperature").html(data[0].temperature + ' °C');
				$("#last-sample-humidity").html(data[0].humidity + ' %');
				$("#last-sample-pressure").html(data[0].pressure + ' hPa');
				$("#last-sample-windspeed").html(data[0].windspeed + ' km/h');
			},
			error: function (msg, status, jqXHR) {
				console.log("GET LAST VARIABLE ERROR--> " + msg.data);
			}
		});
	}

	function senseAverage() {
		$.ajax({
			url: "/average",
			type: 'get',
			success: function(data, status, jqXHR){
				$("#average-temperature").html(data.temperature + ' °C');
				$("#average-humidity").html(data.humidity + ' %');
				$("#average-pressure").html(data.pressure + ' hPa');
				$("#average-windspeed").html(data.windspeed + ' km/h');
			},
			error: function(msg, status, jqXHR){
				console.log("GET AVERAGE ERROR--> " + msg.data);
			}
		});
	}

});
