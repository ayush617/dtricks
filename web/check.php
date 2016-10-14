<?php
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
$a=strlen($line)-3;
$b="";
for($i=5;$i<$a;$i++)
{
$b=$b.$line[$i];
}
echo $b;

$oldMessage = '"no":'.$b;
$b=$b+1;

$deletedFormat ='"no":'.$b;
//read the entire string
$str=file_get_contents('json/movie.json');

//replace something in the file string - this is a VERY simple example
$str=str_replace("$oldMessage", "$deletedFormat",$str);

//write the entire string
file_put_contents('json/movie.json', $str);
?>