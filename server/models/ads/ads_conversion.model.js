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
// GET ALL ADS CONVERSION
////////////////////////////
function all_ads_conversion($connection)
{
    $ads_conversion = [];
    $sql = "SELECT * FROM ads_conversions";
    $result = mysqli_query($connection, $sql);
    if (mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_assoc($result)) {
            $ads_conversion[] = $row;
        }
        response_func(200, $ads_conversion);
    } else {
        response_func(404, ['message' => "data not found"]);
    }
    mysqli_close($connection);
}
////////////////////////////
// GET SINGLE ADS CONVERSION
////////////////////////////
function single_ads_conversion($connection, $id)
{
    $sql = "SELECT * FROM ads_conversions WHERE ads_conversion_id='$id'";
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
// CREATE NEW ADS CONVERSION
////////////////////////////
function create_ads_conversion($connection)
{
    $data = data_input_func('post');
    $uuidv4 = uuid_v4();
    $ads_conversion_id = $uuidv4;
    $ads_conversion_user_id = mysqli_real_escape_string($connection, $data['ads_conversion_user_id']);
    $ads_conversion_ad_id = mysqli_real_escape_string($connection, $data['ads_conversion_ad_id']);
    $ads_conversion_count = mysqli_real_escape_string($connection, $data['ads_conversion_count']);
    $status = mysqli_real_escape_string($connection, $data['status']);

    $sql = "INSERT INTO `ads_conversions`(`ads_conversion_id`, `ads_conversion_user_id`, `ads_conversion_ad_id`, `ads_conversion_count`, `status`) 
                                VALUES ('$ads_conversion_id','$ads_conversion_user_id','$ads_conversion_ad_id','$ads_conversion_count','$status')";

    if (mysqli_query($connection, $sql)) {
        response_func(201, ['message' => "ads conversion create success", 'id' => $uuidv4]);
    } else {
        response_func(500, ['message' => "something is wrong"]);
    }
    mysqli_close($connection);

}
////////////////////////////////
// UPDATE SINGLE ADS CONVERSION
////////////////////////////////
function update_ads_conversion($connection, $id)
{
    $data = data_input_func("post");
    $ads_conversion_user_id = mysqli_real_escape_string($connection, $data['ads_conversion_user_id']);
    $ads_conversion_ad_id = mysqli_real_escape_string($connection, $data['ads_conversion_ad_id']);
    $ads_conversion_count = mysqli_real_escape_string($connection, $data['ads_conversion_count']);
    $status = mysqli_real_escape_string($connection, $data['status']);

    $sql = "UPDATE `ads_conversions` SET `ads_conversion_user_id`='$ads_conversion_user_id',`ads_conversion_ad_id`='$ads_conversion_ad_id',`ads_conversion_count`='$ads_conversion_count',`status`='$status' WHERE ads_conversion_id='$id'";

    if (mysqli_query($connection, $sql)) {
        response_func(200, ['message' => "ads conversion update success"]);
    } else {
        response_func(500, ['message' => "something is wrong"]);
    }
    mysqli_close($connection);
}
//////////////////////////////////
// DELETE SINGLE ADS CONVERSION
//////////////////////////////////
function delete_ads_conversion($connection, $id)
{
    $sql = "DELETE FROM ads_conversions WHERE ads_conversion_id='$id'";
    if (mysqli_query($connection, $sql)) {
        response_func(200, ['message' => "ads conversion delete success"]);
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
    all_ads_conversion($connection);
} else if ($REQUEST_METHOD == "GET" && $REQUEST_TYPE == "single") {
    single_ads_conversion($connection, $id);
} else if ($REQUEST_METHOD == "POST" && $REQUEST_TYPE == "create") {
    create_ads_conversion($connection);
} else if ($REQUEST_METHOD == "POST" && $REQUEST_TYPE == "update") {
    update_ads_conversion($connection, $id);
} else if ($REQUEST_METHOD == "DELETE" && $REQUEST_TYPE == "delete") {
    delete_ads_conversion($connection, $id);
} else {
    response_func(404, ['message' => "this route is not found!"]);
}