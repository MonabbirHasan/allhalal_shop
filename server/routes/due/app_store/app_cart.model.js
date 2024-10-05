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
// GET ALL APP CARTS
////////////////////////////
function all_app_carts($connection)
{
    $app_carts = [];
    $sql = "SELECT * FROM app_carts";
    $result = mysqli_query($connection, $sql);
    if (mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_assoc($result)) {
            $app_carts[] = $row;
        }
        response_func(200, $app_carts);
    } else {
        response_func(404, ['message' => "data not found"]);
    }
    mysqli_close($connection);
}
////////////////////////////
// GET SINGLE APP CARTS
////////////////////////////
function single_app_carts($connection, $id)
{
    $sql = "SELECT * FROM app_carts WHERE app_cart_id='$id'";
    $result = mysqli_query($connection, $sql);
    if (mysqli_num_rows($result) > 0) {
        $rows = mysqli_fetch_assoc($result);
        response_func(200, $rows);
    } else {
        response_func(404, ['message' => "data not found"]);
    }
    mysqli_close($connection);
}
////////////////////////////
// CREATE NEW APP CARTS
////////////////////////////
function create_app_carts($connection)
{
    $data = data_input_func('post');
    $uuidv4 = uuid_v4();
    $app_cart_id = $uuidv4;
    $app_cart_product_id = mysqli_real_escape_string($connection, $data['app_cart_product_id']);
    $app_cart_user_id = mysqli_real_escape_string($connection, $data['app_cart_user_id']);
    $status = mysqli_real_escape_string($connection, $data['status']);

    $sql = "INSERT INTO `app_carts`(`app_cart_id`, `app_cart_product_id`, `app_cart_user_id`, `status`) 
                        VALUES ('$app_cart_id','$app_cart_product_id','$app_cart_user_id','$status')";

    if (mysqli_query($connection, $sql)) {
        response_func(201, ['message' => "app cart create success",'id'=>$uuidv4]);
    } else {
        response_func(500, ["message" => "something is wrong"]);
    }
    mysqli_close($connection);
}
////////////////////////////
// UPDATE SINGLE APP CARTS
////////////////////////////
function update_app_carts($connection, $id)
{
    $data = data_input_func("post");
    $app_cart_product_id = mysqli_real_escape_string($connection, $data['app_cart_product_id']);
    $app_cart_user_id = mysqli_real_escape_string($connection, $data['app_cart_user_id']);
    $status = mysqli_real_escape_string($connection, $data['status']);

    $sql = "UPDATE `app_carts` SET `app_cart_product_id`='$app_cart_product_id',`app_cart_user_id`='$app_cart_user_id',`status`='$status' WHERE app_cart_id='$id'";

    if (mysqli_query($connection, $sql)) {
        response_func(200, ['message' => "app cart update success"]);
    } else {
        response_func(500, ["message" => "something is wrong"]);
    }
    mysqli_close($connection);

}
////////////////////////////
// DELETE SINGLE APP CARTS
////////////////////////////
function delete_app_carts($connection, $id)
{
    $sql = "DELETE FROM app_carts WHERE app_cart_id='$id'";
    if (mysqli_query($connection, $sql)) {
        response_func(200, ['message' => "app cart delete success"]);
    } else {
        response_func(500, ["message" => "something is wrong"]);
    }
    mysqli_close($connection);
}
////////////////////////////
// RANDER ALL FUNCTIONS
////////////////////////////
authorization_check();
if ($REQUEST_METHOD == "GET" && $REQUEST_TYPE == "all") {
    all_app_carts($connection);
} else if ($REQUEST_METHOD == "GET" && $REQUEST_TYPE == "single") {
    single_app_carts($connection, $id);
} else if ($REQUEST_METHOD == "POST" && $REQUEST_TYPE == "create") {
    create_app_carts($connection);
} else if ($REQUEST_METHOD == "POST" && $REQUEST_TYPE == "update") {
    update_app_carts($connection, $id);
} else if ($REQUEST_METHOD == "DELETE" && $REQUEST_TYPE == "delete") {
    delete_app_carts($connection, $id);
} else {
    response_func(404, ['message' => "this route is not found!"]);
}