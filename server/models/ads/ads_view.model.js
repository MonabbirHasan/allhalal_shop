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
// GET ALL ADS VIEWS
////////////////////////////
function all_ads_views($connection)
{
    $sql = "SELECT * FROM ads_views";
    $result = $connection->query($sql);
    $ads_views = [];
    if (mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_assoc($result)) {
            $ads_views[] = $row;
        }
        response_func(200, $ads_views);
    } else {
        response_func(404, ['message' => "data not found"]);
    }
    mysqli_close($connection);
}
////////////////////////////
// GET SINGLE ADS VIEWS
////////////////////////////
function single_ads_views($connection, $id)
{
    $sql = "SELECT * FROM ads_views WHERE ads_view_id='$id'";
    $result = $connection->query($sql);
    if (mysqli_query($connection, $sql)) {
        $rows = mysqli_fetch_assoc($result);
        response_func(200, $rows);
    } else {
        response_func(404, ['message' => "data not found"]);
    }
    mysqli_close($connection);
}
////////////////////////////
// CREATE NEW ADS VIEWS
////////////////////////////
function create_ads_views($connection)
{
    $data = data_input_func('post');
    $uuidv4 = uuid_v4();
    $ads_view_id = $uuidv4;
    $ads_view_count = mysqli_real_escape_string($connection, $data['ads_view_count']);
    $ads_view_ad_id = mysqli_real_escape_string($connection, $data['ads_view_ad_id']);
    $status = mysqli_real_escape_string($connection, $data['status']);

    $sql = "INSERT INTO `ads_views`(`ads_view_id`, `ads_view_ad_id`, `ads_view_count`, `status`) 
                          VALUES ('$ads_view_id','$ads_view_ad_id','$ads_view_count','$status')";

    if (mysqli_query($connection, $sql)) {
        response_func(201, ['message' => "ads view create success", 'id' => $uuidv4]);
    } else {
        response_func(500, ['message' => "something is wrong"]);
    }
    mysqli_close($connection);
}
////////////////////////////
// UPDATE SINGLE ADS VIEWS
////////////////////////////
function update_ads_views($connection, $id)
{
    $data = data_input_func("post");
    $ads_view_count = mysqli_real_escape_string($connection, $data['ads_view_count']);
    $ads_view_ad_id = mysqli_real_escape_string($connection, $data['ads_view_ad_id']);
    $status = mysqli_real_escape_string($connection, $data['status']);

    $sql = "UPDATE `ads_views` SET `ads_view_ad_id`='$ads_view_ad_id',`ads_view_count`='$ads_view_count',`status`='$status' WHERE ads_view_id='$id'";

    if (mysqli_query($connection, $sql)) {
        response_func(200, ['message' => "ads view update success"]);
    } else {
        response_func(500, ['message' => "something is wrong"]);
    }
    mysqli_close($connection);
}
////////////////////////////
// DELETE SINGLE ADS VIEWS
////////////////////////////
function delete_ads_views($connection, $id)
{
    $sql = "DELETE FROM ads_views WHERE ads_view_id='$id'";
    if (mysqli_query($connection, $sql)) {
        response_func(200, ['message' => "ads view delete success"]);
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
    all_ads_views($connection);
} else if ($REQUEST_METHOD == "GET" && $REQUEST_TYPE == "single") {
    single_ads_views($connection, $id);
} else if ($REQUEST_METHOD == "POST" && $REQUEST_TYPE == "create") {
    create_ads_views($connection);
} else if ($REQUEST_METHOD == "POST" && $REQUEST_TYPE == "update") {
    update_ads_views($connection, $id);
} else if ($REQUEST_METHOD == "DELETE" && $REQUEST_TYPE == "delete") {
    delete_ads_views($connection, $id);
} else {
    response_func(404, ['message' => "this route is not found!"]);
}