$(document).ready(function(){
	$("tr:even").css("background-color", "#cccccc");
	$("tr:first").css("background-color", "white");
   	$('#datepicker').datepicker();
	$("#getContent").click(function(){
		var text = $("#gettingText").text();
		var html = $("#getThisDiv").html();
		var val  = $("#getMyValue").val();
		var attr = $("#w3s").attr("href");

		var getContent =
		{
			text : text,
			html : html,
			val  : val,
			attr : attr
		}
		console.log(getContent);
	});

	$(".getThisDiv").click(function(){
		$("#panel-toggle").slideToggle("slow");
	});

	$("#send").click(function(){
		var profile = {
			name       : $("input[name='firstname']").val(),
			middlename : $("input[name='middlename']").val(),
			lastname   : $("input[name='lastname']").val()
		}
		console.log(profile);
	});

	$("#focused").on({
		focus: function(){
			$(this).css("background-color","#cccccc");
		},
		blur: function(){
			$(this).css("background-color","white");
		}
	});

	$("#gettingText").click(function(){
		$(this).hide("slow");
	});

	$("#anId").click(function(){
		$(this).hide();
	});

	$(".aClass").click(function(){
		$(this).hide("slow");
	});

	$("#set-text").click(function(){
		$("#setText").text("The quick brown fox jumps over the lazy dog near the bank of the river.");
	});

	$("#set-html").click(function(){
		$("#setHtml").html("<b> New set value in this html.</b>");
	});

	$("#set-value").click(function(){
		$("#setValue").val("New set value");
	});

});
