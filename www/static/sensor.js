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
		$.get("last-sample", function (data) {
			$("#sample-one-ID").html(data[0].id);  
			$("#sample-one-temperature").html(data[0].temperature);
			$("#sample-one-humidity").html(data[0].humidity);
			$("#sample-one-pressure").html(data[0].pressure);
			$("#sample-one-windspeed").html(data[0].windspeed);
			console.log("last");

		});
	}

	function senseAverage() {
		$.get("average", function (data) {
			$("#average-temperature").html(data.temperature);
			$("#average-humidity").html(data.humidity);
			$("#average-pressure").html(data.pressure);
			$("#average-windspeed").html(data.windspeed);
			console.log("average");

		});
	}

	$("#get-last-sample").click(function () {
		$.ajax({
			url: "/last-sample",
			type: 'get',
			success: function (data, status, jqXHR) {
				$("#last-sample-ID").html(data[0].id);  //Data en 0 por q es JSON array
				$("#last-sample-temperature").html(data[0].temperature);
				$("#last-sample-humidity").html(data[0].humidity);
				$("#last-sample-pressure").html(data[0].pressure);
				$("#last-sample-windspeed").html(data[0].windspeed);

				console.log(data);   //TODO borrar los logs          
			},
			error: function (msg, status, jqXHR) {
				console.log(msg);
			}
		});
	});

	$("#get-average").click(function () {
		$.ajax({
			url: "/average",
			type: 'get',
			success: function (data, status, jqXHR) {
				$("#average-sample-temperature").html(data.temperature);
				$("#average-sample-humidity").html(data.humidity);
				$("#average-sample-pressure").html(data.pressure);
				$("#average-sample-windspeed").html(data.windspeed);

				console.log(data);   //TODO borrar los logs          
			},
			error: function (msg, status, jqXHR) {
				console.log(msg);
			}
		});

	});



});
