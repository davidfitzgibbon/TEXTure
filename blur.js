(function(){

	var v = "1.3.2";

	if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
		var done = false;
		var script = document.createElement("script");
		script.src = "http://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
		script.onload = script.onreadystatechange = function(){
			if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
				done = true;
				initMyBookmarklet();
			}
		};
		document.getElementsByTagName("head")[0].appendChild(script);
	} else {
		initMyBookmarklet();
	}

	function initMyBookmarklet() {
		(window.myBookmarklet = function() {
			
			
			var text_elements = new Array("p", "span", "h1", "h2", "h3", "h4", "h5", "h6", "a", "em", "b", "i");
		
			function img_blur(){
				$('img').each(function(){
					var img = $(this);
					
					var height = img.height();
					var width = img.width();
					
					var src = '//placehold.it/'+width+'x'+height+'&text=%7C';
					
					img.attr('src', src);
				});
			}
			
			function text_blur(e){
				$(e).each(function(){
					var el = $(this);
					var color = el.css('color');
					
					
					el.css('background', color);
				});
			}
			
			for(el in text_elements){
				text_blur(text_elements[el]);
			}
			
			img_blur();
			
			
		})();
	}

})();