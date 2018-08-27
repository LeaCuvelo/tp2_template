$(document).ready(function () {

	var control_sense_last_variable;
	var control_sense_average;
	var sensePicker = document.getElementById('period');
	document.getElementById("start-sense").onclick = startSensor;

	function startSensor() {
		var intervalValue = sensePicker.options[sensePicker.selectedIndex].value;
		start_get_sense(intervalValue);
	}

	function start_get_sense(senseValue) {
		control_sense_last_variable = setInterval(senseLastVariable, senseValue * 1000);
		control_sense_average = setInterval(senseAverage, senseValue * 1000);
	}

	function stop_get_sense() {
		clearInterval(control_sense_last_variable);
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
				console.log("LAST VARIABLE");
			},
			error: function (msg, status, jqXHR) {
				console.log(msg);
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
				console.log("average");
			},
			error: function(msg, status, jqXHR){
				console.log(msg)
			}
		});
	}



});
