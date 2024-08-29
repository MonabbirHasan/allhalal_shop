<?php
include "../functions/authorization_check.php";
include "../functions/file_input_func.php";
include "../functions/delete_file_func.php";
include "../functions/data_input_func.php";
include "../functions/response_func.php";
include "../functions/encode_data.php";
include "../functions/uuid_v4.php";
include "../config/config.php";
global $connection;
$REQUEST_METHOD = $_SERVER["REQUEST_METHOD"];
$REQUEST_TYPE = $_GET['type'] ?? null;
$id = $_GET['id'] ?? null;
////////////////////////////
// GET ALL APP PRODUCTS
////////////////////////////
function all_app_product($connection)
{
    $sql = "SELECT * FROM apps";
    $result = $connection->query($sql);
    $apps = [];
    if (mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_assoc($result)) {
            $apps[] = $row;
        }
        response_func(200, $apps);
    } else {
        response_func(404, ['message' => "data not found"]);
    }
    mysqli_close($connection);
}
////////////////////////////
// GET SINGLE APP PRODUCTS
////////////////////////////
function single_app_product($connection, $id)
{
    $sql = "SELECT * FROM apps WHERE app_id='$id'";
    $result = $connection->query($sql);
    if (mysqli_num_rows($result) > 0) {
        $rows = mysqli_fetch_assoc($result);
        response_func(200, $rows);
    } else {
        response_func(404, ['message' => "data not found"]);
    }
    mysqli_close($connection);
}
////////////////////////////
// CREATE APP PRODUCTS
////////////////////////////
function create_app_product($connection)
{
    $data=data_input_func('post');
    $uuidv4=uuid_v4();
    $app_id=$uuidv4;

}
////////////////////////////
// UPDATE APP PRODUCTS
////////////////////////////
function update_app_product($connection, $id)
{
}
////////////////////////////
// DELETE APP PRODUCTS
////////////////////////////
function delete_app_product($connection, $id)
{
}
////////////////////////////
// RANDER ALL FUNCTIONS
////////////////////////////
authorization_check();
if ($REQUEST_METHOD == "GET" && $REQUEST_TYPE == "all") {
    all_app_product($connection);
} else if ($REQUEST_METHOD == "GET" && $REQUEST_TYPE == "single") {
    single_app_product($connection, $id);
} else if ($REQUEST_METHOD == "POST" && $REQUEST_TYPE == "create") {
    create_app_product($connection);
} else if ($REQUEST_METHOD == "POST" && $REQUEST_TYPE == "update") {
    update_app_product($connection, $id);
} else if ($REQUEST_METHOD == "DELETE" && $REQUEST_TYPE == "delete") {
    delete_app_product($connection, $id);
} else {
    response_func(404, ['message' => "this route is not found!"]);
}