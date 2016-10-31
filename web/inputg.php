<?php
{
	$file=fopen("json/movieb.json","r");
$line=fgets($file);
	  while (!feof($file))
{
	$line=fgets($file);
	if( strchr($line,'"no":'))
	{
		break;
	}

}
$aa=strlen($line)-3;
$bb="";
for($i=5;$i<$aa;$i++)
{
$bb=$bb.$line[$i];
}


$oldMessage = '"no":'.$bb;
$cc=$bb+1;

$deletedFormat ='"no":'.$cc;
//read the entire string
$str=file_get_contents('json/movieb.json');

//replace something in the file string - this is a VERY simple example
$str=str_replace("$oldMessage", "$deletedFormat",$str);

//write the entire string
file_put_contents('json/movieb.json', $str);
fclose($file);
}



$a="";
$b="";
$c="";
$d="";
$e="";
$f="";
$g="";
$h="";
$i="";
$j="";

if(isset($_POST['submit'])){


$a=$_POST['name'];
$b=$bb;
$c=$_POST['title'];
$d=$_POST['dec'];
$e=$_POST['rdate'];
$f=$_POST['IMDB'];
$g=$_POST['BookMyShow'];
$h=$_POST['genre'];
$i=$_POST['duration'];
$j=$_POST['link'];


$oldMessage = '}}';


$deletedFormat =',"'.$a.'":{'.PHP_EOL.'"id":'.$b.",".PHP_EOL.'"title": "'.$c.'",'.PHP_EOL.'"des": "'.$d.'",'.PHP_EOL.'"rdate": "'.$e.'",'.PHP_EOL.'"IMDB": "'.$f.'",'.PHP_EOL.'"BookMyShow":"'.$g.'",'.PHP_EOL.'"genre":"'.$h.'",'.PHP_EOL.'"duration":"'.$i.'",'.PHP_EOL.'"link":"'.$j.'"}'.PHP_EOL.'}}';
//read the entire string
$str=file_get_contents('json/movieb.json');

//replace something in the file string - this is a VERY simple example
$str=str_replace("$oldMessage", "$deletedFormat",$str);

//write the entire string
file_put_contents('json/game.json', $str);

//image ->
{$f_name="";
$f_size="";
$f_type="";
$f_status="";





      $errors= array();
      $file_name = $_FILES['image']['name'];
      $file_size = $_FILES['image']['size'];
      $file_tmp = $_FILES['image']['tmp_name'];
      $file_type = $_FILES['image']['type'];
      //$file_ext=strtolower(end(explode('.',$_FILES['image']['name'])));

      $file_ext=(strtolower(end((explode('.',$file_name)))));

      $expensions= array("jpeg","jpg","png");

      if(in_array($file_ext,$expensions)=== false){
         $errors[]="extension not allowed, please choose a JPEG or PNG file.";
      }

      if($file_size > 2097152) {
         $errors[]='File size must be excately 2 MB';
      }

      if(empty($errors)==true) {
         move_uploaded_file($file_tmp,"images/game/".$bb.'.jpg');
         $f_name="Sent file: ".$_FILES['image']['name'];
         $f_size="File size: ".$_FILES['image']['size'];
         $f_type="File type: ".$_FILES['image']['type'];
         $f_status="File Successfully Uploaded";
      }
      else{
         print_r($errors);
      }

   echo $f_status;




}
// <- image

}



?>
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
<form method="post"  action="input.php"  enctype = "multipart/form-data">
<table>
<tr>
<td>Name:</td>
<td><input type="text" name="name"></td>
</tr>


<tr>
<td>Title:</td>
<td><input type="text" name="title"></td>
</tr>


<tr>
<td>Discription:</td>
<td><input type="text" name="dec"></tr>
</tr>

<tr>
<td>Rdate:</td>
<td><input type="text" name="rdate"></td>
</tr>

<tr>
<td>IMDB:</td>
<td><input type="text" name="IMDB"></td>
</tr>


<tr>
<td>BMS:</td>
<td><input type="text" name="BookMyShow"></td>
</tr>

<tr>
<td>Genre:</td>
<td><input type="text" name="genre"></td>
</tr>


<tr>
<td>Duration:</td>
<td><input type="text" name="duration"></td>
</tr>


<tr>
<td>Link:</td>
<td><input type="text" name="link"></td>
</tr>

<tr>
<td>Image:</td>
<td> <input type = "file" name = "image" /></td>
</tr>


<tr>
<td></td>
<td><input type="Submit" name="submit" value="Submit"></td>
</tr>


</table>
</form>
</body>
</html>
