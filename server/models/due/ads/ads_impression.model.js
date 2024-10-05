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
// GET ALL ADS IMPRESSION
////////////////////////////
function all_ads_impression($connection)
{
    $ads_impression = [];
    $sql = "SELECT * FROM ads_impressions";
    $result = mysqli_query($connection, $sql);
    if (mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_assoc($result)) {
            $ads_impression[] = $row;
        }
        response_func(200, $ads_impression);
    } else {
        response_func(404, ['message' => "data not found"]);
    }
    mysqli_close($connection);
}
////////////////////////////
// GET SINGLE ADS IMPRESSION
////////////////////////////
function single_ads_impression($connection, $id)
{
    $sql = "SELECT * FROM ads_impressions WHERE ads_impression_id='$id'";
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
// CREATE NEW ADS IMPRESSION
////////////////////////////
function create_ads_impression($connection)
{
    $data = data_input_func('post');
    $uuidv4 = uuid_v4();
    $ads_impression_id = $uuidv4;
    $ads_impression_user_id = mysqli_real_escape_string($connection, $data['ads_impression_user_id']);
    $ads_impression_ad_id = mysqli_real_escape_string($connection, $data['ads_impression_ad_id']);
    $ads_impression_count = mysqli_real_escape_string($connection, $data['ads_impression_count']);
    $status = mysqli_real_escape_string($connection, $data['status']);

    $sql = "INSERT INTO `ads_impressions`(`ads_impression_id`, `ads_impression_user_id`, `ads_impression_ad_id`, `ads_impression_count`, `status`) 
                                VALUES ('$ads_impression_id','$ads_impression_user_id','$ads_impression_ad_id','$ads_impression_count','$status')";

    if (mysqli_query($connection, $sql)) {
        response_func(201, ['message' => "ads impression create success", 'id' => $uuidv4]);
    } else {
        response_func(500, ['message' => "something is wrong"]);
    }
    mysqli_close($connection);

}
////////////////////////////////
// UPDATE SINGLE ADS IMPRESSION
////////////////////////////////
function update_ads_impression($connection, $id)
{
    $data = data_input_func("post");
    $ads_impression_user_id = mysqli_real_escape_string($connection, $data['ads_impression_user_id']);
    $ads_impression_ad_id = mysqli_real_escape_string($connection, $data['ads_impression_ad_id']);
    $ads_impression_count = mysqli_real_escape_string($connection, $data['ads_impression_count']);
    $status = mysqli_real_escape_string($connection, $data['status']);

    $sql = "UPDATE `ads_impressions` SET `ads_impression_user_id`='$ads_impression_user_id',`ads_impression_ad_id`='$ads_impression_ad_id',`ads_impression_count`='$ads_impression_count',`status`='$status' WHERE ads_impression_id='$id'";

    if (mysqli_query($connection, $sql)) {
        response_func(200, ['message' => "ads impression update success"]);
    } else {
        response_func(500, ['message' => "something is wrong"]);
    }
    mysqli_close($connection);
}
//////////////////////////////////
// DELETE SINGLE ADS IMPRESSION
//////////////////////////////////
function delete_ads_impression($connection, $id)
{
    $sql = "DELETE FROM ads_impressions WHERE ads_impression_id='$id'";
    if (mysqli_query($connection, $sql)) {
        response_func(200, ['message' => "ads impression delete success"]);
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
    all_ads_impression($connection);
} else if ($REQUEST_METHOD == "GET" && $REQUEST_TYPE == "single") {
    single_ads_impression($connection, $id);
} else if ($REQUEST_METHOD == "POST" && $REQUEST_TYPE == "create") {
    create_ads_impression($connection);
} else if ($REQUEST_METHOD == "POST" && $REQUEST_TYPE == "update") {
    update_ads_impression($connection, $id);
} else if ($REQUEST_METHOD == "DELETE" && $REQUEST_TYPE == "delete") {
    delete_ads_impression($connection, $id);
} else {
    response_func(404, ['message' => "this route is not found!"]);
}