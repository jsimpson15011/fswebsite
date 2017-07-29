<?php //upload.php
	echo <<<_END
	<html><head><link href="CSS/styles.css" type="text/css"
		rel="stylesheet" /><title>PHP Form Upload</title></head><body>
	<div id='whitewords'><form method='post' action='upload.php' enctype='multipart/form-data'>
	Select File:<input type='file' name='filename' size='10'>
	<input type='submit' value='Upload'>
	</form></div>
_END;

if ($_FILES)
{
	$directory = "/var/www/html/images/slideshow/";
	$filecount = 0;
	$files = glob($directory . "*.jpg");
	if ($files){
 	$filecount = count($files);
	}
	$filecount += 1;
	$folder="images/slideshow";
	$name = $_FILES['filename']['name'];
	move_uploaded_file($_FILES['filename']['tmp_name'],"images/slideshow/".$filecount.".jpg");
	echo "<div id='whitewords'> Uploaded image '$name'</div><br><img class= 'uploadpicture' src='images/slideshow/"
	.$filecount.".jpg'>";
}
$directory = "/var/www/html/images/slideshow/";
$filecount = 0;
$files = glob($directory . "*.jpg");
if ($files){
 $filecount = count($files);
}
echo "<div id= 'whitewords'> There are $filecount slides </div>";
for ($i=1; $i <= $filecount; $i++) { 
	echo "<img class= 'uploadpicture' src='images/slideshow/"
	.$i.".jpg'>";
}
echo "</body></html>";