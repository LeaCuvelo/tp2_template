$(document).ready(function () {

	var control_sense_last_variable;
	var control_sense_average;
	document.getElementById("start-sense").onclick = startSensor;
	document.getElementById("stop-sense").onclick = stopSensor;
	var sensePicker = document.getElementById('period');

	function startSensor() {
		var intervalValue = sensePicker.options[sensePicker.selectedIndex].value;
		start_get_sense(intervalValue);
	}

	function start_get_sense(senseValue) {
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
				$("#last-sample-temperature").html(data[0].temperature);
				$("#last-sample-humidity").html(data[0].humidity);
				$("#last-sample-pressure").html(data[0].pressure);
				$("#last-sample-windspeed").html(data[0].windspeed);
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
				$("#average-temperature").html(data.temperature);
				$("#average-humidity").html(data.humidity);
				$("#average-pressure").html(data.pressure);
				$("#average-windspeed").html(data.windspeed);
			},
			error: function(msg, status, jqXHR){
				console.log("GET AVERAGE ERROR--> " + msg.data);
			}
		});
	}

});
