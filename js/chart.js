FusionCharts.ready(function(){
    var studentChart = new FusionCharts({
      "type": "stackedbar2d",
      "renderAt": "classresult",
      "width": "100%",
      "height": "650",
      "dataFormat": "json",
      "dataSource": {
	    "chart": {
		        "caption": "",
		        "showvalues": "0",
		        "plotgradientcolor": "",
		        "formatnumberscale": "0",
		        "showplotborder": "0",
		        "palettecolors": "#EED17F,#97CBE7,#074868,#B0D67A,#2C560A,#DD9D82",
		        "canvaspadding": "0",
		        "bgcolor": "FFFFFF",
		        "showalternatehgridcolor": "0",
		        "divlinecolor": "CCCCCC",
		        "showcanvasborder": "0",
		        "legendborderalpha": "0",
		        "legendshadow": "0",
		        "interactivelegend": "0",
		        "showsum": "1",
		        "canvasborderalpha": "0",
		        "showborder": "0"
		},
	    "categories": [
        {
            "category": [
            {
                "label": "Josh"
            },
            {
                "label": "Felicia"
            },
            {
                "label": "Marco"
            },
            {
                "label": "Alexander"
            },
            {
                "label": "Maurice"
            },
            {
                "label": "Joseph"
            },
            {
                "label": "Jacklyn"
            },
            {
                "label": "Augustine"
            },
            {
                "label": "Sean"
            },
            {
                "label": "Oscar"
            },
            {
                "label": "Nancy"
            },
            {
                "label": "Dominique"
            }]
    	}],
		"dataset": [
		{
	    	"seriesname": "Year 9 results",
	    	"renderas": "Area",
			"data": [
				{ 
			    	"value": "540"
		        },
	            {
	                "value": "479"
	            },
	            {
	                "value": "502"
	            },
	            {
	                "value": "534"
	            },
	            {
	                "value": "480"
	            },
	            {
	                "value": "450"
	            },
	            {
	                "value": "570"
	            },
	            {
	                "value": "467"
	            },
	            {
	                "value": "498"
	            },
	            {
	                "value": "404"
	            },
	            {
	                "value": "381"
	            },
	            {
	                "value": "369"
	            }
	        ]
	    },
    	{
	        "seriesname": "Year 10 Incremental",
	        "renderas": "Area",
	        "data": [
	           {
	              "value": "120"
	           },
	           {
	              "value": "124"
	           },
	           {
	              "value": "106"
	           },
	           {
	               "value": "92"
	           },
	           {
	               "value": "50"
	           },
	           {
	               "value": "100"
	           },
	           {
	               "value": "92"
	           },
	           {
	               "value": "97"
	           },
	           {
	               "value": "180"
	           },
	           {
	               "value": "141"
	           },
	           {
		           "value": "113"
		       },
		       {
		           "value": "91"
		       }
		    ]
		},
		{
		    "seriesname": "Year 11 To date",
		    "renderas": "Area",
		    "data": [
		        {
		            "value": "40"
		        },
		        {
		            "value": "52"
		        },
		        {
		            "value": "60"
		        },
		        {
		            "value": "42"
		        },
		        {
		            "value": "50"
		        },
		        {
		            "value": "70"
		        },
		        {
		            "value": "62"
		        },
		        {
		            "value": "47"
		        },
		        {
		            "value": "68"
		        },
		        {
		            "value": "44"
		        },
		        {
		            "value": "71"
		        },
		        {
		            "value": "49"
		        }
		    ]
		},
		]
	  }
	});

    var overallChart = new FusionCharts({
        "type": "stackedbar2d",
        "renderAt": "detail-overall-port",
        "width": "100%",
        "height": "650",
        "dataFormat": "json",
        "dataSource": {
	        "chart": {
		        "caption": "",
		        "showvalues": "0",
		        "plotgradientcolor": "",
		        "formatnumberscale": "0",
		        "showplotborder": "0",
		        "palettecolors": "#EED17F,#97CBE7,#074868,#B0D67A,#2C560A,#DD9D82",
		        "canvaspadding": "0",
		        "bgcolor": "FFFFFF",
		        "showalternatehgridcolor": "0",
		        "divlinecolor": "CCCCCC",
		        "showcanvasborder": "0",
		        "legendborderalpha": "0",
		        "legendshadow": "0",
		        "interactivelegend": "0",
		        "showsum": "1",
		        "canvasborderalpha": "0",
		        "showborder": "0"
		    },
		    "categories": [
	        {
	            "category": [
	            {
	                "label": "Josh"
	            },
	            {
	                "label": "Felicia"
	            },
	            {
	                "label": "Marco"
	            },
	            {
	                "label": "Alexander"
	            },
	            {
	                "label": "Maurice"
	            },
	            {
	                "label": "Joseph"
	            },
	            {
	                "label": "Jacklyn"
	            },
	            {
	                "label": "Augustine"
	            },
	            {
	                "label": "Sean"
	            },
	            {
	                "label": "Oscar"
	            },
	            {
	                "label": "Nancy"
	            },
	            {
	                "label": "Dominique"
	            }]
    		}],
			"dataset": [
			{
		    	"seriesname": "Year 9 results",
		    	"renderas": "Area",
				"data": [
					{ 
				    	"value": "540"
			        },
		            {
		                "value": "479"
		            },
		            {
		                "value": "502"
		            },
		            {
		                "value": "534"
		            },
		            {
		                "value": "480"
		            },
		            {
		                "value": "450"
		            },
		            {
		                "value": "570"
		            },
		            {
		                "value": "467"
		            },
		            {
		                "value": "498"
		            },
		            {
		                "value": "404"
		            },
		            {
		                "value": "381"
		            },
		            {
		                "value": "369"
		            }
		        ]
		    },
    		{
		        "seriesname": "Year 10 Incremental",
		        "renderas": "Area",
		        "data": [
		           {
		              "value": "120"
		           },
		           {
		              "value": "124"
		           },
		           {
		              "value": "106"
		           },
		           {
		               "value": "92"
		           },
		           {
		               "value": "50"
		           },
		           {
		               "value": "100"
		           },
		           {
		               "value": "92"
		           },
		           {
		               "value": "97"
		           },
		           {
		               "value": "180"
		           },
		           {
		               "value": "141"
		           },
		           {
			           "value": "113"
			       },
			       {
			           "value": "91"
			       }
			    ]
			},
			{
			    "seriesname": "Year 11 To date",
			    "renderas": "Area",
			    "data": [
			        {
			            "value": "40"
			        },
			        {
			            "value": "52"
			        },
			        {
			            "value": "60"
			        },
			        {
			            "value": "42"
			        },
			        {
			            "value": "50"
			        },
			        {
			            "value": "70"
			        },
			        {
			            "value": "62"
			        },
			        {
			            "value": "47"
			        },
			        {
			            "value": "68"
			        },
			        {
			            "value": "44"
			        },
			        {
			            "value": "71"
			        },
			        {
			            "value": "49"
			        }
	    		]
			},
		]} //datasource
	}); //fusion charts

    var overallpChart = new FusionCharts({
        "type": "stackedcolumn2d",
        "renderAt": "detail-overall-land",
        "width": "100%",
        "height": "650",
        "dataFormat": "json",
        "dataSource": {
	        "chart": {
		        "caption": "",
		        "showvalues": "0",
		        "plotgradientcolor": "",
		        "formatnumberscale": "0",
		        "showplotborder": "0",
		        "palettecolors": "#EED17F,#97CBE7,#074868,#B0D67A,#2C560A,#DD9D82",
		        "canvaspadding": "0",
		        "bgcolor": "FFFFFF",
		        "showalternatehgridcolor": "0",
		        "divlinecolor": "CCCCCC",
		        "showcanvasborder": "0",
		        "legendborderalpha": "0",
		        "legendshadow": "0",
		        "interactivelegend": "0",
		        "showsum": "1",
		        "canvasborderalpha": "0",
		        "showborder": "0"
		    },
		    "categories": [
	        {
	            "category": [
	            {
	                "label": "Josh"
	            },
	            {
	                "label": "Felicia"
	            },
	            {
	                "label": "Marco"
	            },
	            {
	                "label": "Alexander"
	            },
	            {
	                "label": "Maurice"
	            },
	            {
	                "label": "Joseph"
	            },
	            {
	                "label": "Jacklyn"
	            },
	            {
	                "label": "Augustine"
	            },
	            {
	                "label": "Sean"
	            },
	            {
	                "label": "Oscar"
	            },
	            {
	                "label": "Nancy"
	            },
	            {
	                "label": "Dominique"
	            }]
    		}],
			"dataset": [
			{
		    	"seriesname": "Year 9 results",
		    	"renderas": "Area",
				"data": [
					{ 
				    	"value": "540"
			        },
		            {
		                "value": "479"
		            },
		            {
		                "value": "502"
		            },
		            {
		                "value": "534"
		            },
		            {
		                "value": "480"
		            },
		            {
		                "value": "450"
		            },
		            {
		                "value": "570"
		            },
		            {
		                "value": "467"
		            },
		            {
		                "value": "498"
		            },
		            {
		                "value": "404"
		            },
		            {
		                "value": "381"
		            },
		            {
		                "value": "369"
		            }
		        ]
		    },
    		{
		        "seriesname": "Year 10 Incremental",
		        "renderas": "Area",
		        "data": [
		           {
		              "value": "120"
		           },
		           {
		              "value": "124"
		           },
		           {
		              "value": "106"
		           },
		           {
		               "value": "92"
		           },
		           {
		               "value": "50"
		           },
		           {
		               "value": "100"
		           },
		           {
		               "value": "92"
		           },
		           {
		               "value": "97"
		           },
		           {
		               "value": "180"
		           },
		           {
		               "value": "141"
		           },
		           {
			           "value": "113"
			       },
			       {
			           "value": "91"
			       }
			    ]
			},
			{
			    "seriesname": "Year 11 To date",
			    "renderas": "Area",
			    "data": [
			        {
			            "value": "40"
			        },
			        {
			            "value": "52"
			        },
			        {
			            "value": "60"
			        },
			        {
			            "value": "42"
			        },
			        {
			            "value": "50"
			        },
			        {
			            "value": "70"
			        },
			        {
			            "value": "62"
			        },
			        {
			            "value": "47"
			        },
			        {
			            "value": "68"
			        },
			        {
			            "value": "44"
			        },
			        {
			            "value": "71"
			        },
			        {
			            "value": "49"
			        }
	    		]
			},
		]} //datasource
	}); //fusion charts

    var underChart = new FusionCharts({
        "type": "stackedbar2d",
        "renderAt": "detail-under-land",
        "width": "100%",
        "height": "650",
        "dataFormat": "json",
        "dataSource": {
	        "chart": {
		        "caption": "",
		        "showvalues": "0",
		        "plotgradientcolor": "",
		        "formatnumberscale": "0",
		        "showplotborder": "0",
		        "palettecolors": "#EED17F,#97CBE7,#074868,#B0D67A,#2C560A,#DD9D82",
		        "canvaspadding": "0",
		        "bgcolor": "FFFFFF",
		        "showalternatehgridcolor": "0",
		        "divlinecolor": "CCCCCC",
		        "showcanvasborder": "0",
		        "legendborderalpha": "0",
		        "legendshadow": "0",
		        "interactivelegend": "0",
		        "showsum": "1",
		        "canvasborderalpha": "0",
		        "showborder": "0"
		    },
		    "categories": [
	        {
	            "category": [
	            {
	                "label": "Josh"
	            },
	            {
	                "label": "Ferguson"
	            },
	            {
	                "label": "Marco"
	            },
	            {
	                "label": "Alexander"
	            },
	            {
	                "label": "Maurice"
	            },
	            {
	                "label": "Joseph"
	            },
	            {
	                "label": "Jacklyn"
	            },
	            {
	                "label": "Augustine"
	            },
	            {
	                "label": "Sean"
	            },
	            {
	                "label": "Oscar"
	            },
	            {
	                "label": "Nancy"
	            },
	            {
	                "label": "Dominique"
	            }]
    		}],
			"dataset": [
			{
		    	"seriesname": "Year 9 results",
		    	"renderas": "Area",
				"data": [
					{ 
				    	"value": "540"
			        },
		            {
		                "value": "479"
		            },
		            {
		                "value": "502"
		            },
		            {
		                "value": "534"
		            },
		            {
		                "value": "480"
		            },
		            {
		                "value": "450"
		            },
		            {
		                "value": "570"
		            },
		            {
		                "value": "467"
		            },
		            {
		                "value": "498"
		            },
		            {
		                "value": "404"
		            },
		            {
		                "value": "381"
		            },
		            {
		                "value": "369"
		            }
		        ]
		    },
    		{
		        "seriesname": "Year 10 Incremental",
		        "renderas": "Area",
		        "data": [
		           {
		              "value": "120"
		           },
		           {
		              "value": "124"
		           },
		           {
		              "value": "106"
		           },
		           {
		               "value": "92"
		           },
		           {
		               "value": "50"
		           },
		           {
		               "value": "100"
		           },
		           {
		               "value": "92"
		           },
		           {
		               "value": "97"
		           },
		           {
		               "value": "180"
		           },
		           {
		               "value": "141"
		           },
		           {
			           "value": "113"
			       },
			       {
			           "value": "91"
			       }
			    ]
			},
			{
			    "seriesname": "Year 11 To date",
			    "renderas": "Area",
			    "data": [
			        {
			            "value": "40"
			        },
			        {
			            "value": "52"
			        },
			        {
			            "value": "60"
			        },
			        {
			            "value": "42"
			        },
			        {
			            "value": "50"
			        },
			        {
			            "value": "70"
			        },
			        {
			            "value": "62"
			        },
			        {
			            "value": "47"
			        },
			        {
			            "value": "68"
			        },
			        {
			            "value": "44"
			        },
			        {
			            "value": "71"
			        },
			        {
			            "value": "49"
			        }
	    		]
			},
		]} //datasource
	}); //fusion charts

    var onChart = new FusionCharts({
        "type": "stackedbar2d",
        "renderAt": "detail-on-land",
        "width": "100%",
        "height": "650",
        "dataFormat": "json",
        "dataSource": {
	        "chart": {
		        "caption": "",
		        "showvalues": "0",
		        "plotgradientcolor": "",
		        "formatnumberscale": "0",
		        "showplotborder": "0",
		        "palettecolors": "#EED17F,#97CBE7,#074868,#B0D67A,#2C560A,#DD9D82",
		        "canvaspadding": "0",
		        "bgcolor": "FFFFFF",
		        "showalternatehgridcolor": "0",
		        "divlinecolor": "CCCCCC",
		        "showcanvasborder": "0",
		        "legendborderalpha": "0",
		        "legendshadow": "0",
		        "interactivelegend": "0",
		        "showsum": "1",
		        "canvasborderalpha": "0",
		        "showborder": "0"
		    },
		    "categories": [
	        {
	            "category": [
	            {
	                "label": "Josh"
	            },
	            {
	                "label": "Ferguson"
	            },
	            {
	                "label": "Marco"
	            },
	            {
	                "label": "Alexander"
	            },
	            {
	                "label": "Maurice"
	            },
	            {
	                "label": "Joseph"
	            },
	            {
	                "label": "Jacklyn"
	            },
	            {
	                "label": "Augustine"
	            },
	            {
	                "label": "Sean"
	            },
	            {
	                "label": "Oscar"
	            },
	            {
	                "label": "Nancy"
	            },
	            {
	                "label": "Dominique"
	            }]
    		}],
			"dataset": [
			{
		    	"seriesname": "Year 9 results",
		    	"renderas": "Area",
				"data": [
					{ 
				    	"value": "540"
			        },
		            {
		                "value": "479"
		            },
		            {
		                "value": "502"
		            },
		            {
		                "value": "534"
		            },
		            {
		                "value": "480"
		            },
		            {
		                "value": "450"
		            },
		            {
		                "value": "570"
		            },
		            {
		                "value": "467"
		            },
		            {
		                "value": "498"
		            },
		            {
		                "value": "404"
		            },
		            {
		                "value": "381"
		            },
		            {
		                "value": "369"
		            }
		        ]
		    },
    		{
		        "seriesname": "Year 10 Incremental",
		        "renderas": "Area",
		        "data": [
		           {
		              "value": "120"
		           },
		           {
		              "value": "124"
		           },
		           {
		              "value": "106"
		           },
		           {
		               "value": "92"
		           },
		           {
		               "value": "50"
		           },
		           {
		               "value": "100"
		           },
		           {
		               "value": "92"
		           },
		           {
		               "value": "97"
		           },
		           {
		               "value": "180"
		           },
		           {
		               "value": "141"
		           },
		           {
			           "value": "113"
			       },
			       {
			           "value": "91"
			       }
			    ]
			},
			{
			    "seriesname": "Year 11 To date",
			    "renderas": "Area",
			    "data": [
			        {
			            "value": "40"
			        },
			        {
			            "value": "52"
			        },
			        {
			            "value": "60"
			        },
			        {
			            "value": "42"
			        },
			        {
			            "value": "50"
			        },
			        {
			            "value": "70"
			        },
			        {
			            "value": "62"
			        },
			        {
			            "value": "47"
			        },
			        {
			            "value": "68"
			        },
			        {
			            "value": "44"
			        },
			        {
			            "value": "71"
			        },
			        {
			            "value": "49"
			        }
	    		]
			},
		]} //datasource
	}); //fusion charts

    var overChart = new FusionCharts({
        "type": "stackedbar2d",
        "renderAt": "detail-over-land",
        "width": "100%",
        "height": "650",
        "dataFormat": "json",
        "dataSource": {
	        "chart": {
		        "caption": "",
		        "showvalues": "0",
		        "plotgradientcolor": "",
		        "formatnumberscale": "0",
		        "showplotborder": "0",
		        "palettecolors": "#EED17F,#97CBE7,#074868,#B0D67A,#2C560A,#DD9D82",
		        "canvaspadding": "0",
		        "bgcolor": "FFFFFF",
		        "showalternatehgridcolor": "0",
		        "divlinecolor": "CCCCCC",
		        "showcanvasborder": "0",
		        "legendborderalpha": "0",
		        "legendshadow": "0",
		        "interactivelegend": "0",
		        "showsum": "1",
		        "canvasborderalpha": "0",
		        "showborder": "0"
		    },
		    "categories": [
	        {
	            "category": [
	            {
	                "label": "Josh"
	            },
	            {
	                "label": "Ferguson"
	            },
	            {
	                "label": "Marco"
	            },
	            {
	                "label": "Alexander"
	            },
	            {
	                "label": "Maurice"
	            },
	            {
	                "label": "Joseph"
	            },
	            {
	                "label": "Jacklyn"
	            },
	            {
	                "label": "Augustine"
	            },
	            {
	                "label": "Sean"
	            },
	            {
	                "label": "Oscar"
	            },
	            {
	                "label": "Nancy"
	            },
	            {
	                "label": "Dominique"
	            }]
    		}],
			"dataset": [
			{
		    	"seriesname": "Year 9 results",
		    	"renderas": "Area",
				"data": [
					{ 
				    	"value": "540"
			        },
		            {
		                "value": "479"
		            },
		            {
		                "value": "502"
		            },
		            {
		                "value": "534"
		            },
		            {
		                "value": "480"
		            },
		            {
		                "value": "450"
		            },
		            {
		                "value": "570"
		            },
		            {
		                "value": "467"
		            },
		            {
		                "value": "498"
		            },
		            {
		                "value": "404"
		            },
		            {
		                "value": "381"
		            },
		            {
		                "value": "369"
		            }
		        ]
		    },
    		{
		        "seriesname": "Year 10 Incremental",
		        "renderas": "Area",
		        "data": [
		           {
		              "value": "120"
		           },
		           {
		              "value": "124"
		           },
		           {
		              "value": "106"
		           },
		           {
		               "value": "92"
		           },
		           {
		               "value": "50"
		           },
		           {
		               "value": "100"
		           },
		           {
		               "value": "92"
		           },
		           {
		               "value": "97"
		           },
		           {
		               "value": "180"
		           },
		           {
		               "value": "141"
		           },
		           {
			           "value": "113"
			       },
			       {
			           "value": "91"
			       }
			    ]
			},
			{
			    "seriesname": "Year 11 To date",
			    "renderas": "Area",
			    "data": [
			        {
			            "value": "40"
			        },
			        {
			            "value": "52"
			        },
			        {
			            "value": "60"
			        },
			        {
			            "value": "42"
			        },
			        {
			            "value": "50"
			        },
			        {
			            "value": "70"
			        },
			        {
			            "value": "62"
			        },
			        {
			            "value": "47"
			        },
			        {
			            "value": "68"
			        },
			        {
			            "value": "44"
			        },
			        {
			            "value": "71"
			        },
			        {
			            "value": "49"
			        }
	    		]
			},
		]} //datasource
	}); //fusion charts

    var trackChart = new FusionCharts({
       "type": "boxandwhisker2d",
       "renderAt": "track-range",
       "width": "100%",
       "height": "650",
       "dataFormat": "json",
       "dataSource": {
	   "chart": {
	       "caption": "Cohort T-score Range for Each Track",
	       "showmean": "1",
	       "upperboxcolor":"74bc1f",
	       "lowerboxcolor":"cb231a",
	       "showborder": "0"
	    },
		    "categories": [
		    {
		        "category": [
		        {
		            "label": "Arithmetic"
		        },
		        {
		            "label": "Algebra"
		        },
		        {
		           "label": "∑-notation"
		        },
		        {
		           "label": "Straight Lines"
		        },
		        {
		           "label": "Simultaneous equations"
		        },
		        {
		            "label": "Functions"
		        },
		        {
		            "label": "Quadratic/Polynomials"
		        },
		        {
                    "label": "Log and expo"
                },
                {
                    "label": "Non-linear"
                },
                {
                    "label": "Trigonometry"
                },
                {
                    "label": "Derivatives"
                },
                {
                    "label": "Derivative applications"
                },
                {
                    "label": "Integration"
                }
            ]
        }
    ],
		    "dataset": [
		        {
		            "seriesname": "Scores",
		            "data": [
		                {
		                    "value": "35, 78, 91, 42, 56, 66, 71, 46"
		                },
		                {
		                    "value": "85, 68, 70, 30, 78, 83, 45, 54"
		                },
		                {
		                    "value": "70, 33, 56, 67, 60, 41, 60, 70"
		                },
		                {
		                    "value": "72, 31, 61, 65, 67, 45, 53, 51"
		                },
		                {
		                    "value": "35, 78, 91, 42, 56, 66, 71, 46"
		                },
		                {
		                    "value": "25, 74, 97, 42, 56, 66, 71, 42"
		                },
		                {
		                    "value": "30, 68, 92, 42, 56, 66, 71, 46"
		                },
		                {
		                    "value": "32, 76, 93, 42, 56, 66, 71, 46"
		                },
		                {
		                    "value": "21, 37, 84, 42, 56, 66, 71, 46"
		                },
		                {
		                    "value": "39, 70, 90, 42, 56, 66, 71, 46"
		                },
		                {
		                    "value": "30, 67, 100, 42, 56, 66, 71, 46"
		                },
		                {
		                    "value": "25, 82, 88, 42, 56, 66, 71, 46"
		                },
		                {
		                    "value": "31, 41, 34, 45, 67, 69, 78, 71"
		                }
		            ]
		        }
		    ]
		}
    });
    var studentOverallChart = new FusionCharts({
       "type": "vled",
       "renderAt": "studentOverall",
       "width": "40%",
       "height":"500",
       "dataFormat": "json",
       "dataSource": {
		    "chart": {
		        "manageresize": "1",
		        "upperlimit": "100",
		        "lowerlimit": "0",
		        "majortmnumber": "11",
		        "majortmcolor": "646F8F",
		        "majortmheight": "9",
		        "minortmnumber": "2",
		        "minortmcolor": "646F8F",
		        "minortmheight": "3",
		        "majortmthickness": "1",
		        "decimals": "0",
		        "ledgap": "0",
		        "ledsize": "1",
		        "ledborderthickness": "4",
		        "showborder": "0"
		    },
		    "colorrange": {
		        "color": [
		            {
		                "minvalue": "0",
		                "maxvalue": "900",
		                "code": "cb231a"
		            },
		            {
		                "minvalue": "900",
		                "maxvalue": "1100",
		                "code": "74bc1f"
		            },
		            {
		                "minvalue": "1100",
		                "maxvalue": "1300",
		                "code": "e0b32a"
		            }
		        ]
		    },
		    "value": "1254"
		}
    });
	
	var trackradarChart = new FusionCharts({
	    "type": "radar",
	    "renderAt": "trackradar",
	    "width": "100%",
	    "height": "500",
	    "dataFormat": "json",
	    "dataSource": {
		    "chart": {
		        "caption": "Stephanie's Radar Chart",
		        "anchoralpha": "0",
		        "showborder": "0"
		    },
		    "categories": [
		        {
		            "category": [
	  		        {
			            "label": "Arithmetic"
			        },
			        {
			            "label": "Algebra"
			        },
			        {
			           "label": "∑-notation"
			        },
			        {
			           "label": "Straight Lines"
			        },
			        {
			           "label": "Simultaneous equations"
			        },
			        {
			            "label": "Functions"
			        },
			        {
			            "label": "Quadratic/Polynomials"
			        },
			        {
	                    "label": "Log and expo"
	                },
	                {
	                    "label": "Non-linear"
	                },
	                {
	                    "label": "Trigonometry"
	                },
	                {
	                    "label": "Derivatives"
	                },
	                {
	                    "label": "Derivative applications"
	                },
	                {
	                    "label": "Integration"
	                }
	          ]
	        }
	    ],
	    "dataset": [
	        {
	            "seriesname": "2015 YTD",
	            "data": [
	                {
	                    "value": "1200"
	                },
	                {
	                    "value": "1243"
	                },
	                {
	                    "value": "1123"
	                },
	                {
	                    "value": "1132"
	                },
	                {
	                    "value": "921"
	                },
	                {
	                    "value": "1278"
	                },
	                {
	                    "value": "900"
	                },
	                {
	                    "value": "1245"
	                },
	                {
	                    "value": "1112"
	                },
	                {
	                    "value": "1034"
	                },
	                {
	                    "value": "923"
	                },
	                {
	                    "value": "1026"
	                },
	                {
	                    "value": "933"
	                }
	            ]
	        },
	        {
	            "seriesname": "2014 Year End",
	            "data": [
	                {
	                    "value": "543"
	                },
	                {
	                    "value": "376"
	                },
	                {
	                    "value": "212"
	                },
	                {
	                    "value": "434"
	                },
	                {
	                    "value": "545"
	                },
	                {
	                    "value": "912"
	                },
	                {
	                    "value": "523"
	                },
	                {
	                    "value": "398"
	                },
	                {
	                    "value": "289"
	                },
	                {
	                    "value": "547"
	                },
	                {
	                    "value": "476"
	                },
	                {
	                    "value": "760"
	                },
	                {
	                    "value": "346"
	                },
	                {
	                    "value": "556"
	                }
	            ]
	        }
	    ]
	}
    });
	overallChart.render();
	overallpChart.render();
	underChart.render();
	onChart.render();
	overChart.render();
    studentChart.render();
    trackChart.render();
    trackradarChart.render();
    studentOverallChart.render();
})
