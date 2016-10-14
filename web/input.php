<?php
{
	$file=fopen("json/movie.json","r");
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
$str=file_get_contents('json/movie.json');

//replace something in the file string - this is a VERY simple example
$str=str_replace("$oldMessage", "$deletedFormat",$str);

//write the entire string
file_put_contents('json/movie.json', $str);
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
$str=file_get_contents('json/movie.json');

//replace something in the file string - this is a VERY simple example
$str=str_replace("$oldMessage", "$deletedFormat",$str);

//write the entire string
file_put_contents('json/movie.json', $str);


}



?>
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
<form method="post"  action="input.php" >
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
<td></td>
<td><input type="Submit" name="submit" value="Submit"></td>
</tr>


</table>
</form>
</body>
</html>