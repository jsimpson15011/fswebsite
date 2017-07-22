<div class="weddingwordbox">
<?php  
include_once "library.php";

minus_one(2);

$object1= new Membership ();
$object2= clone $object1;

$object1-> date='7/12';
$object1-> name='Johnt';
$object1-> time='2';
$object2-> name='ronk';
print_r($object1);
echo "</br>" .$object1-> name .'</br> ';
echo $object2-> name;

echo $object1->save_teetimes();
echo $object1->save_teetimes_original();

class Teetime
{
	public $date, $time, $name;
	function save_teetimes(){
		return $this->date;
	}
}

class Membership extends Teetime
{
	function save_teetimes(){
		echo "no";
	}
	function save_teetimes_original(){
		parent::save_teetimes();
	}
}
?>
</div>
<link rel="stylesheet" type="text/css" href="CSS/styles.css">