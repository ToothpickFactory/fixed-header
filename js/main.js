var renderTables = function(){
	$.each($('.fx'), function(){
		var table = this;
		$.each($('tbody tr:first', this).children(), function(index){
			var tdWidth = $(this)[0].getBoundingClientRect().width;
			var thWidth = $('thead th:nth-child('+(index+1)+')', table)[0].getBoundingClientRect().width;
			if(thWidth > tdWidth){
				$(this).width(thWidth - 18);
				$('tfoot th:nth-child('+(index+1)+')', table).width(thWidth - 18);
			}else{
				console.log(tdWidth)
				$('thead th:nth-child('+(index+1)+')', table).width(tdWidth - 18);
				$('tfoot th:nth-child('+(index+1)+')', table).width(tdWidth - 18);
			}
		});
	});
}

$(window).load(renderTables)
