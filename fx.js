$.each($('.fx'), function(){
	var table = this;
	$.each($('tbody tr:first', this).children(), function(index){
		var tdWidth = $(this)[0].getBoundingClientRect().width;
		var thWidth = $('thead th:nth-child('+(index+1)+')', table)[0].getBoundingClientRect().width;
		if(thWidth > tdWidth){
			$(this).width(thWidth);
			$('tfoot th:nth-child('+(index+1)+')', table).width(thWidth);
		}else{
			$('thead th:nth-child('+(index+1)+')', table).width(tdWidth);
			$('tfoot th:nth-child('+(index+1)+')', table).width(tdWidth);
		}
	});
});