$(function(){		

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
});