
liClick = function(){
	alert($(this).html());
	var menu =$('#Header').html();
	alert(menu);
	$('#Content').html(menu);
	$('#Content').show();
	$('#Content').slideUp(2000, function(){
		alert('Content is slide up.')
	})
}
$('li').click(liClick);
