$(document).ready(function() {

$("#start-sense").click(function(){
	$.ajax({   //TODO detallar por que el uso de ajax
		url: "/sensor",
	    type: 'get',	            
		success: function(data, status, jqXHR) {
				//data es el 4, lo ve el HTML!!!  ver function score() //--  el #score es un id html
			$("#sample-one-ID").html(data[0].id);  //Data en 0 por q es JSON array
			$("#sample-one-temperature").html(data[0].temperature);
			$("#sample-one-humidity").html(data[0].humidity);
			$("#sample-one-pressure").html(data[0].pressure);
			$("#sample-one-windspeed").html(data[0].windspeed);

        	console.log(data);   //TODO borrar los logs          
        },
        error: function(msg, status, jqXHR) {
            console.log(msg);	            
        }
    });

});

$("#get-last-sample").click(function(){
	$.ajax({   
		url: "last-sample",
	    type: 'get',	            
		success: function(data, status, jqXHR) {
			$("#last-sample-ID").html(data[0].id);  //Data en 0 por q es JSON array
			$("#last-sample-temperature").html(data[0].temperature);
			$("#last-sample-humidity").html(data[0].humidity);
			$("#last-sample-pressure").html(data[0].pressure);
			$("#last-sample-windspeed").html(data[0].windspeed);

        	console.log(data);   //TODO borrar los logs          
        },
        error: function(msg, status, jqXHR) {
            console.log(msg);	            
        }
    });

});

});
