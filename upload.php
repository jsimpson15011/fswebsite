<?php //upload.php
	echo <<<_END
	<html><head><link href="CSS/styles.css" type="text/css"
		rel="stylesheet" />
		<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js">
		</script>
		<title>PHP Form Upload</title></head><body>
	<div id='whitewords'><form method='post' action='upload.php' enctype='multipart/form-data'>
	Select File:<input type='file' name='filename' size='10'>
	<input type='submit' value='Upload'>
	</form></div>
_END;
require ("classupload.php");
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
	$picture = $_FILES['filename']['tmp_name'];
	$handle = new upload($_FILES['image_field']);
	$handle->image_resize=true;
	$handle->image_convert=gif;
	$handle->image_y=100;
	$handle->image_x=10;
	$handle->process('/home/');
	move_uploaded_file($picture,"images/slideshow/".$filecount.".jpg");
	echo "<div id='whitewords'> Uploaded image '$name'</div><br><img class= 'uploadpicture' src='images/slideshow/"
	.$filecount.".jpg'>";
}
extract($_GET, EXTR_PREFIX_ALL, 'fromget');
if ($fromget_imagename){
	echo "Image name found";
}
else{
	echo $imagename ."nooooo";
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
if ($fromget_imagename){
unlink('images/slideshow/4.jpg');
}
echo "<script src='js/deleteslide.js'></script></body></html>";