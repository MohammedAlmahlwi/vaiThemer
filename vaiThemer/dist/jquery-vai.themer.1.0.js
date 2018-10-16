/*
******************************
*************************************
** name : vaiThemer ;
** version : 1.0 ;
** auther : m.almahlwi ;
** copy right : V.A.Ink ;
*************************************
******************************
*/
(function($){
	"use strict";
    // Globale Varibles vaiThemer Info ;
	var 
	   vaiThemer = 'vaiThemer',
	   version = '1.0.0',
	   auther = 'M.Almahlwi',
	   copyRight = 'V.A.Ink',
	   date = '14-10-2018',
	   more = 'facebook.com/Almahlwi';

    // default fun
    $.vaiThemer = function (vaiMainArg) {
    	"use strict";

    	// Varibles Elements In Document ;
	    var 
	    vaiElements = $("link[vaiThemer=true]"),
	    vaiLength = vaiElements.length,
	    vaiDate = new Date();

        // vai functions ;
        var fun = {};

    	// ! vaiThemer Syntax Number One Get Data In Element ;
    	this.getOpitionsDocument = function (opitionsDocumentArg) {
    		"use strict";
    		
            for (var i = 0; i <= (vaiLength - 1); i++) {
            	// alert(i);
            	var 
            	   el = vaiElements.eq(i),
            	   vaiFrom = parseInt(el.attr('vai-from')) || false, // start time theme
            	   vaiTo = parseInt(el.attr('vai-to')) || 24, // end time theme 
            	   vaiOnly = parseInt(el.attr('vai-only')) || false, // theme on one houer only
            	   vaiHref = el.attr('vai-href'), // file css url
            	   vaiThemerName = el.attr('vaiThemerName') || "vaiThemer No Name !", // file css url
            	   vaiThemerKSet ; // interval fun key
            	   vaiThemerName != "vaiThemer No Name !" ? vaiThemerKSet = vaiThemerName : vaiThemerKSet = 'vaiKey_'+ String(parseInt(Math.random() * 1000));

            	  if(vaiFrom != false){ ////////////////////
            	  	if (vaiFrom >= vaiTo) { /////////////////////////////
            	  		console.error("vaiThemer New message error in values please check your data in element.eq("+i+") ;");
            	  	}else{ //////////////////////////////////
            	  		var houre = vaiDate.getHours();
            	  		if ( ////////////////////////////
            	  			houre == vaiFrom || 
            	  			(houre - 12) == vaiFrom || 
            	  			 houre < vaiTo && houre > vaiFrom //||
            	  			// (houre - 12 ) < vaiTo && (houre - 12 ) > vaiFrom 
            	  			) { // if con ////////////////////////
	            	  			el.attr('href',vaiHref);
	            	  			console.info('vaiThemerName : ' + vaiThemerName);
            	  		}else{ ////////////////////////////////
            	  			if (houre < vaiFrom ) {
            	  				var et = ((((houre - vaiFrom) * 60) + vaiDate.getMinutes()) * 1000) ;
                                fun[vaiThemerKSet] = setTimeout(function() {
                                	"use strict";
                                	const intKey = vaiThemerKSet ;
                                	const vaiThemerHref = vaiHref ;
                                	const vaiThemerEq = i ;
                                	const vaiThemerCName = vaiThemerName ;
                                	console.info('vaiThemerName : ' + vaiThemerCName);
            	  				    vaiElements.eq(i).attr('href',vaiThemerHref);
            	  				    clearTimeout(fun[vaiThemerKSet]);
            	  			    },et);
            	  			}//if
            	  			
            	  			
            	  		} // else
            	  	} // else (vaiFrom <= vaiTo)
            	  } // vaiFrom

            	  if (vaiOnly == vaiDate.getHours() && vaiOnly != false) {
            	  	el.attr('href',vaiHref);
	            	console.info('vaiThemerName : ' + vaiThemerName);
            	  }else{
            	  	//////////////////////////////
            	  }

            } // for loop


    	}; // getOpitionsDocument

    	// ! vaiThemer Syntax Number Two Get Data In Json ;
    	this.getOpitionsJson = function (opitionsJsonArg) {
               "use strict";
                for (var vaiThemerKey in opitionsJsonArg) {
                	var 
                	from = opitionsJsonArg[vaiThemerKey]['vai-from'] || false,
                	to = opitionsJsonArg[vaiThemerKey]['vai-to'] || 24,
                	only = opitionsJsonArg[vaiThemerKey]['vai-only'] || false,
                	href = opitionsJsonArg[vaiThemerKey]['vai-href'];
                	$('head').append(
                		'<link rel="stylesheet" vaiThemer="true" vaiThemerName="'+
                		vaiThemerKey+'" vai-href="'+href+'" vai-only="'+only+
                		'" vai-to="'+to+'" vai-from="'+from+'" />');
                	// acive fun
                		var ac = new $.vaiThemer();
                		    ac.getOpitionsDocument();
                }



    	} // getOpitionsJson


    } // vaiThemer
    

})(jQuery);