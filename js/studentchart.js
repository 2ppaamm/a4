FusionCharts.ready(function(){
    var healthChart = new FusionCharts({
      "type": "cylinder",
      "renderAt": "health",
      "width": "70%",
      "height": "600",
      "dataFormat": "json",
      "dataSource": {
	    "chart": {
	        "caption": "Life",
	        "subcaptionFontBold": "0",
	        "lowerLimit": "0",
	        "upperLimit": "120",
	        "lowerLimitDisplay": "Dead",
	        "upperLimitDisplay": "Full",
	        "showValue": "0",
	        "showhovereffect": "1",
	        "bgCOlor": "#ffffff",
	        "borderAlpha": "0",
	        "cylFillColor": "#008ee4"
		    },
			// Initial value
			"value": "110"
		},
		"events": {
		    "rendered": function(evtObj, argObj) {
		        var life = 110;
		        setInterval(function() {
		            (life < 1) ? (life = 110) : "";
		            var consVolume = life - (Math.floor(Math.random() * 3));
		            // feed data to the cylinder gauge, fuelMeter
		            evtObj.sender.feedData("&value=" + consVolume);
		            life = consVolume;
		        }, 1000); // set the refresh interval to 1000 ms
		    }
		}
	});

    var pointChart = new FusionCharts({
      "type": "thermometer",
      "renderAt": "points",
      "width": "70%",
      "height": "600",
      "dataFormat": "json",
      "dataSource": {
	    "chart": {
	        "caption": "Points",
	        "subcaptionFontBold": "0",
	        "lowerLimit": "0",
	        "upperLimit": "120",
	        "lowerLimitDisplay": "Zilch",
	        "upperLimitDisplay": "Top",
	        "showValue": "0",
	        "showhovereffect": "1",
	        "bgCOlor": "#ffffff",
	        "borderAlpha": "0",
	        "cylFillColor": "#008ee4"
		    },
			// Initial value
			"value": "110"
		},
		"events": {
		    "rendered": function(evtObj, argObj) {
		        var life = 110;
		        setInterval(function() {
		            (life < 1) ? (life = 110) : "";
		            var consVolume = life - (Math.floor(Math.random() * 3));
		            // feed data to the cylinder gauge, fuelMeter
		            evtObj.sender.feedData("&value=" + consVolume);
		            life = consVolume;
		        }, 1000); // set the refresh interval to 1000 ms
		    }
		}
	});

    var health2Chart = new FusionCharts({
      "type": "cylinder",
      "renderAt": "health2",
      "width": "70%",
      "height": "600",
      "dataFormat": "json",
      "dataSource": {
	    "chart": {
	        "caption": "Life",
	        "subcaptionFontBold": "0",
	        "lowerLimit": "0",
	        "upperLimit": "220",
	        "upperLimitDisplay": "Full",
	        "showValue": "0",
	        "showhovereffect": "1",
	        "bgCOlor": "#ffffff",
	        "borderAlpha": "0",
	        "cylFillColor": "#960000"
		    },
			// Initial value
			"value": "210"
		},
		"events": {
		    "rendered": function(evtObj, argObj) {
		        var life = 210;
		        setInterval(function() {
		            (life < 1) ? (life = 210) : "";
		            var consVolume = life - (Math.floor(Math.random() * 3));
		            // feed data to the cylinder gauge, fuelMeter
		            evtObj.sender.feedData("&value=" + consVolume);
		            life = consVolume;
		        }, 1000); // set the refresh interval to 1000 ms
		    }
		}
	});

    var point2Chart = new FusionCharts({
      "type": "thermometer",
      "renderAt": "points2",
      "width": "70%",
      "height": "600",
      "dataFormat": "json",
      "dataSource": {
	    "chart": {
	        "caption": "Points",
	        "subcaptionFontBold": "0",
	        "lowerLimit": "0",
	        "upperLimit": "220",
	        "upperLimitDisplay": "Top",
	        "showValue": "0",
	        "showhovereffect": "1",
	        "bgCOlor": "#ffffff",
	        "borderAlpha": "0",
	        "cylFillColor": "#960000"
		    },
			// Initial value
			"value": "210"
		},
		"events": {
		    "rendered": function(evtObj, argObj) {
		        var life = 210;
		        setInterval(function() {
		            (life < 1) ? (life = 210) : "";
		            var consVolume = life - (Math.floor(Math.random() * 3));
		            // feed data to the cylinder gauge, fuelMeter
		            evtObj.sender.feedData("&value=" + consVolume);
		            life = consVolume;
		        }, 1000); // set the refresh interval to 1000 ms
		    }
		}
	});

    var health3Chart = new FusionCharts({
      "type": "cylinder",
      "renderAt": "health3",
      "width": "70%",
      "height": "600",
      "dataFormat": "json",
      "dataSource": {
	    "chart": {
	        "caption": "Life",
	        "subcaptionFontBold": "0",
	        "lowerLimit": "0",
	        "upperLimit": "320",
	        "upperLimitDisplay": "Full",
	        "showValue": "0",
	        "showhovereffect": "1",
	        "bgCOlor": "#ffffff",
	        "borderAlpha": "0",
	        "cylFillColor": "#FECA40"
		    },
			// Initial value
			"value": "310"
		},
		"events": {
		    "rendered": function(evtObj, argObj) {
		        var life = 310;
		        setInterval(function() {
		            (life < 1) ? (life = 310) : "";
		            var consVolume = life - (Math.floor(Math.random() * 3));
		            // feed data to the cylinder gauge, fuelMeter
		            evtObj.sender.feedData("&value=" + consVolume);
		            life = consVolume;
		        }, 1000); // set the refresh interval to 1000 ms
		    }
		}
	});

    var point3Chart = new FusionCharts({
      "type": "thermometer",
      "renderAt": "points3",
      "width": "70%",
      "height": "600",
      "dataFormat": "json",
      "dataSource": {
	    "chart": {
	        "caption": "Points",
	        "subcaptionFontBold": "0",
	        "lowerLimit": "0",
	        "upperLimit": "320",
	        "lowerLimitDisplay": "Zilch",
	        "upperLimitDisplay": "Top",
	        "showValue": "0",
	        "showhovereffect": "1",
	        "bgCOlor": "#ffffff",
	        "borderAlpha": "0",
	        "cylFillColor": "#008ee4"
		    },
			// Initial value
			"value": "310"
		},
		"events": {
		    "rendered": function(evtObj, argObj) {
		        var life = 310;
		        setInterval(function() {
		            (life < 1) ? (life = 310) : "";
		            var consVolume = life - (Math.floor(Math.random() * 3));
		            // feed data to the cylinder gauge, fuelMeter
		            evtObj.sender.feedData("&value=" + consVolume);
		            life = consVolume;
		        }, 1000); // set the refresh interval to 1000 ms
		    }
		}
	});

	healthChart.render();
	pointChart.render();
	health2Chart.render();
	point2Chart.render();
	health3Chart.render();
	point3Chart.render();
})
