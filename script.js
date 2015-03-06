$(function()
{
	$( document ).ready(function()
	{
		$("#menuButton").click(function()
		{
			$("#menu").css("display", "block");
			$("#menu").animate(
			{
				right: "+=400",
			}, 300, function() {
			});
		});
		
		$("#menuCloseButtonBottom").click(function()
		{
			$("#menu").animate(
			{
				right: "-=400",
			}, 300, function() {
				$("#menu").css("display", "none");
			});
		});
		
		$("#menuHeaderHideMenuButton").click(function()
		{
			$("#menu").animate(
			{
				right: "-=400",
			}, 300, function() {
				$("#menu").css("display", "none");
			});
		});
	});
});