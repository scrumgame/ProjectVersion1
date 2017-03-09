<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Content-Type: application/json');

$db = mysqli_connect("localhost","root","","JACKELOL");
mysqli_query($db, "SET NAMES utf8");

require_once "api.class.php";
require_once "resource.class.php";

$API = new API();

$class = "_".$API->resource;

require_once $API->resource.".resource.php";

$resource = new $class($API->resource_id, $API->request);

$method = $API->method;
$resource->$method($API->input, $db);

$resource->output();
