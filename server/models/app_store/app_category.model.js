<?php
include "../functions/authorization_check.php";
include "../functions/file_input_func.php";
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
// GET ALL APP CATEGORY
////////////////////////////
function all_app_category($connection)
{
    $app_category = [];
    $sql = "SELECT * FROM app_category";
    $result = $connection->query($sql);
    if (mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_assoc($result)) {
            $app_category[] = $row;
        }
        response_func(200, $app_category);
    } else {
        response_func(404, ['message' => "data not found"]);
    }
    mysqli_close($connection);
}
////////////////////////////
// GET SINGLE APP CATEGORY
////////////////////////////
function single_app_category($connection, $id)
{
    $sql = "SELECT * FROM app_category WHERE app_category_id='$id'";
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
// CREATE NEW APP CATEGORY
////////////////////////////
function create_app_category($connection)
{
    $data = data_input_func('post');
    $app_category_name = mysqli_real_escape_string($connection, $data['app_category_name']);
    $app_category_sub = mysqli_real_escape_string($connection, $data['app_category_sub']);
    $status = mysqli_real_escape_string($connection, $data['status']);

    $sql = "INSERT INTO `app_category`( `app_category_name`, `app_category_sub`, `status`) 
                            VALUES ('$app_category_name','$app_category_sub','$status')";

    if (mysqli_query($connection, $sql)) {
        response_func(201, ['message' => "app category create success"]);
    } else {
        response_func(500, ['message' => "something is wrong"]);
    }
    mysqli_close($connection);
}
///////////////////////////////
// UPDATE SINGLE APP CATEGORY
///////////////////////////////
function update_app_category($connection, $id)
{
    $data = data_input_func("post");
    $app_category_name = mysqli_real_escape_string($connection, $data['app_category_name']);
    $app_category_sub = mysqli_real_escape_string($connection, $data['app_category_sub']);
    $status = mysqli_real_escape_string($connection, $data['status']);

    $sql = "UPDATE `app_category` SET `app_category_name`='$app_category_name',`app_category_sub`='$app_category_sub',`status`='$status' WHERE app_category_id='$id'";

    if (mysqli_query($connection, $sql)) {
        response_func(200, ['message' => "app category update success"]);
    } else {
        response_func(500, ['message' => "something is wrong"]);
    }
    mysqli_close($connection);

}
///////////////////////////////
// DELETE SINGLE APP CATEGORY
///////////////////////////////
function delete_app_category($connection, $id)
{
    $sql = "DELETE FROM app_category WHERE app_category_id='$id'";

    if (mysqli_query($connection, $sql)) {
        response_func(200, ['message' => "app category delete success"]);
    } else {
        response_func(500, ['message' => "something is wrong"]);
    }
    mysqli_close($connection);
}
////////////////////////////
// RANDER ALL FUNCTIONS
////////////////////////////
authorization_check();
if ($REQUEST_METHOD == "GET" && $REQUEST_TYPE == "all") {
    all_app_category($connection);
} else if ($REQUEST_METHOD == "GET" && $REQUEST_TYPE == "single") {
    single_app_category($connection, $id);
} else if ($REQUEST_METHOD == "POST" && $REQUEST_TYPE == "create") {
    create_app_category($connection);
} else if ($REQUEST_METHOD == "POST" && $REQUEST_TYPE == "update") {
    update_app_category($connection, $id);
} else if ($REQUEST_METHOD == "DELETE" && $REQUEST_TYPE == "delete") {
    delete_app_category($connection, $id);
} else {
    response_func(404, ['message' => "this route is not found!"]);
}