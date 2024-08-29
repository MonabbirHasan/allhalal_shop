<?php
include "./functions/authorization_check.php";
include "./functions/file_input_func.php";
include "./functions/data_input_func.php";
include "./functions/response_func.php";
include "./functions/encode_data.php";
include "./functions/uuid_v4.php";
include "./config/config.php";
global $connection;
$REQUEST_METHOD = $_SERVER["REQUEST_METHOD"];
$REQUEST_TYPE = $_GET['type'] ?? null;
$id = $_GET['id'] ?? null;
////////////////////////////
// GET ALL ADS BALANCE
////////////////////////////
function all_ads_balance($id){}
////////////////////////////
// GET SINGLE ADS BALANCE
////////////////////////////
////////////////////////////
// CREATE NEW ADS BALANCE
////////////////////////////
////////////////////////////
// UPDATE SINGLE ADS BALANCE
////////////////////////////
////////////////////////////
// DELETE SINGLE ADS BALANCE
////////////////////////////
////////////////////////////
// DELETE SINGLE ADS BALANCE
////////////////////////////
////////////////////////////
// RANDER ALL FUNCTIONS
////////////////////////////
