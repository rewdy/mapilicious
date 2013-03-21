/*
 * Mapilicious - jQuery plugin to add links to maps to <address> tags.
 * Version: 0.5 (03/22/2013)
 * Copyright (c) 2013 Andrew Meyer
 * Licensed under the MIT License: http://en.wikipedia.org/wiki/MIT_License
 * Requires: jQuery v1.4+
*/

(function(jQuery) {
	jQuery.fn.mapilicious = function(opt){
		
		// extend the defaults with the defined options
		var options = jQuery.extend({}, jQuery.fn.mapilicious.defaults, opt);
		var els = {};

		if (this.length > 0) {
			els = this;
		} else {
			els = jQuery(options.range);
		}
		return els.each(function(){
			el = jQuery(this);
			
			// build link and link markup
			address = el.html(); // get the address
			address = address.replace(/\<br[/]?\>/gi, ' ') 	// replace breaks with spaces
							 .replace(/<[^>]+>/ig, '') 	// replace HTML tags with nothing
							 .replace(/^\s+|\s+$/g, ''); // trim
			mapUrl 	= options.mapUrl + encodeURIComponent(address);
			link 	= '<a href="' + mapUrl + '" ' + options.linkAttr + '>' + options.linkText + '</a>';
			if (options.linkTemplate !== false || options.linkTemplate != '') {
				linkMu	= options.linkTemplate.replace('{link}', link);
			} else {
				linkMu 	= link;
			}

			// append the link
			switch (options.placement) {
				case "append":
					el.append(linkMu);
					break;
				case "prepend":
					el.prepend(linkMu);
					break;
				case "after":
					el.after(linkMu);
					break;
				case "before":
					el.before(linkMu);
					break;
				default:
					// default is to just append it...
					el.append(linkMu);
			}
		});
	};
	
	
	// set the defaults
	jQuery.fn.mapilicious.defaults = {
		range: 			'address',	// this will be used to select the elements that will be searched for addresses
		placement: 		'append', // options: append, prepend, after, before 
		mapUrl: 		'https://maps.google.com/maps?q=', // URL for the map. The query will be appended to the end of this.
		linkText: 		'Map', // text for the actual map link
		linkTemplate: 	'<div class="mapilicious_map_link">{link}</div>', // the template that the link will use. The {link} bit is where the map link is inserted
		linkAttr: 		''	// include a string in the link url. Use this to add classes, targets, etc.
	}
	
	// end and return jQuery object
})(jQuery);