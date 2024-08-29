<?php
include "../functions/authorization_check.php";
include "../functions/delete_file_func.php";
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
// GET ALL ADS CATEGORY
////////////////////////////
function all_ads_category($connection)
{
    $sql = "SELECT * FROM ads_category";
    $result = $connection->query($sql);
    $ads_category = [];
    if (mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_assoc($result)) {
            $ads_category[] = $row;
        }
        response_func(200, $ads_category);
    } else {
        response_func(404, ['message' => "data not found!"]);
    }
    mysqli_close($connection);
}
////////////////////////////
// GET SINGLE ADS CATEGORY
////////////////////////////
function single_ads_category($connection, $id)
{
    $sql = "SELECT * FROM ads_category WHERE ads_category_id='$id'";
    $result = $connection->query($sql);
    if (mysqli_num_rows($result) > 0) {
        $rows = mysqli_fetch_assoc($result);
        response_func(200, $rows);
    } else {
        response_func(404, ['message' => "data not found!"]);
    }
    mysqli_close($connection);
}
////////////////////////////
// CREATE NEW ADS CATEGORY
////////////////////////////
function create_ads_category($connection)
{
    $data = data_input_func('post');
    $uuidv4 = uuid_v4();
    $ads_category_id = $uuidv4;
    $ads_category_name = mysqli_real_escape_string($connection, $data['ads_category_name']);
    $status = mysqli_real_escape_string($connection, $data['status']);

    $sql = "INSERT INTO `ads_category`(`ads_category_id`, `ads_category_name`, `status`) 
                            VALUES ('$ads_category_id','$ads_category_name','$status')";

    if (mysqli_query($connection, $sql)) {
        response_func(201, ['message' => "ads category create success", 'id' => $uuidv4]);
    } else {
        response_func(500, ['message' => "something is wrong!"]);
    }
    mysqli_close($connection);

}
////////////////////////////////
// UPDATE SINGLE ADS CATEGORY
////////////////////////////////
function update_ads_category($connection, $id)
{
    $data = data_input_func("post");
    $ads_category_name = mysqli_real_escape_string($connection, $data['ads_category_name']);
    $status = mysqli_real_escape_string($connection, $data['status']);

    $sql = "UPDATE `ads_category` SET `ads_category_name`='$ads_category_name',`status`='$status' WHERE ads_category_id='$id'";

    if (mysqli_query($connection, $sql)) {
        response_func(200, ['message' => "ads category update success"]);
    } else {
        response_func(500, ['message' => "something is wrong!"]);
    }
    mysqli_close($connection);

}
////////////////////////////////
// DELETE SINGLE ADS CATEGORY
////////////////////////////////
function delete_ads_category($connection, $id)
{
    $sql = "DELETE FROM ads_category WHERE ads_category_id='$id'";
    if (mysqli_query($connection, $sql)) {
        response_func(200, ['message' => "ads category delete success"]);
    } else {
        response_func(500, ['message' => "something is wrong!"]);
    }
    mysqli_close($connection);
}
////////////////////////////
// RANDER ALL FUNCTIONS
////////////////////////////
authorization_check();
if ($REQUEST_METHOD == "GET" && $REQUEST_TYPE == "all") {
    all_ads_category($connection);
} else if ($REQUEST_METHOD == "GET" && $REQUEST_TYPE == "single") {
    single_ads_category($connection, $id);
} else if ($REQUEST_METHOD == "POST" && $REQUEST_TYPE == "create") {
    create_ads_category($connection);
} else if ($REQUEST_METHOD == "POST" && $REQUEST_TYPE == "update") {
    update_ads_category($connection, $id);
} else if ($REQUEST_METHOD == "DELETE" && $REQUEST_TYPE == "delete") {
    delete_ads_category($connection, $id);
} else {
    response_func(404, ['message' => "this route is not found!"]);
}