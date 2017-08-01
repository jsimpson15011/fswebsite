$(document).ready(function(){
var $slide = $(".uploadpicture");
var $logoText = $("#logo-text");
var $nav = $(".nav");
var imageName = "we did it";
	$.ajax({
        type: "get",
        data: imageName ,
        success: function (response) {                

        },
        error: function(jqXHR, textStatus, errorThrown) {
           console.log(textStatus, errorThrown);
        }
    });
$slide.click(function(){
	var filePath = this.src;
	var imageName = filePath.replace(/^.*[\\\/]/, '');
	alert(imageName);
	$.ajax({
        type: "get",
        data: imageName ,
        success: function (response) {                

        },
        error: function(jqXHR, textStatus, errorThrown) {
           console.log(textStatus, errorThrown);
        }
    });
});

});