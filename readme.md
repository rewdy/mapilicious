# Mapilicious

Version 0.5

_A jQuery plugin to add links to `<address>` tags that link to a google map for the address_.

## Overview

This plugin was created out of necessity. One day I decided I was sick of going to Google Maps, entering an address, clicking the little link icon, and copying the URL for a link whenever I added an address to something. This plugin automates that process. It finds the <address> tags and appends a link to the address on Google maps. See some examples below.

## Basic instructions

Include the Javascript before the closing body tag (and update the script src's to direct to where ever you have jQuery and the mapilicious javascript saved.):

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
	<script src="jquery.mapilicious.min.js"></script>
	<script>
		$(function(){
			$().mapilicious();
		});
	</script>

That's all for a basic set up. More detailed instructions are available in the repo index.html file on at [rewdy.com](1)



## Examples, options reference, etc

Available at: [rewdy.com](2) and in the repo.

---

1: http://rewdy.com/projects/mapilicious

2: http://rewdy.com/tools-files/mapilicious
