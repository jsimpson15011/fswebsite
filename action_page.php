<?php 
extract($_POST, EXTR_PREFIX_ALL, 'frompost');
extract($_POST, EXTR_PREFIX_ALL, 'frompost');
$user = array('firstname' => $frompost_fname,
				'lastname' => $frompost_lname);
echo 'welcome' . ' ' .  htmlspecialchars($user['firstname'] .' '.htmlspecialchars($user['lastname'])); 
printf("%'/20.3f",1.22222222);
$fh = fopen("testfile.txt",'w') or die("Failed to create file");

$text = <<<_END
Line 1 
Line 2
Line 3
_END;

	fwrite($fh, $text) or die("Could not write to file");
	fclose($fh);
	echo "File 'testfile.txt' written";
	echo "<pre>";
	echo file_get_contents("testfile.txt");
	echo "</pre>";
?>
