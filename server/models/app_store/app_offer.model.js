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
// GET ALL APP OFFERS
////////////////////////////
function all_app_offer($connection)
{
    $app_offers = [];
    $sql = "SELECT * FROM app_offers";
    $result = $connection->query($sql);
    if (mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_assoc($result)) {
            $app_offers[] = $row;
        }
        response_func(200, $app_offers);
    } else {
        response_func(404, ['message' => "data not found"]);
    }
    mysqli_close($connection);
}
////////////////////////////
// GET SINGLE APP OFFERS
////////////////////////////
function single_app_offer($connection, $id)
{
    $sql = "SELECT * FROM app_offers WHERE app_offer_id='$id'";
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
// CREATE APP OFFERS
////////////////////////////
function create_app_offer($connection)
{
    $data = data_input_func('post');
    $uuidv4 = uuid_v4();
    $app_offer_id = $uuidv4;
    $app_offer_amount = mysqli_real_escape_string($connection, $data['app_offer_amount']);
    $app_offer_user_id = mysqli_real_escape_string($connection, $data['app_offer_user_id']);
    $app_offer_product_id = mysqli_real_escape_string($connection, $data['app_offer_product_id']);
    $app_offer_start_at = mysqli_real_escape_string($connection, $data['app_offer_start_at']);
    $app_offer_end_at = mysqli_real_escape_string($connection, $data['app_offer_end_at']);
    $status = mysqli_real_escape_string($connection, $data['status']);

    $sql = "INSERT INTO `app_offers`(`app_offer_id`, `app_offer_amount`, `app_offer_user_id`, `app_offer_product_id`, `app_offer_start_at`, `app_offer_end_at`, `status`) 
                        VALUES ('$app_offer_id','$app_offer_amount','$app_offer_user_id','$app_offer_product_id','$app_offer_start_at','$app_offer_end_at','$status')";

    if (mysqli_query($connection, $sql)) {
        response_func(201, ['message' => "app offer create success", 'id' => $uuidv4]);
    } else {
        response_func(500, ['message' => "something is wrong"]);
    }
    mysqli_close($connection);
}
////////////////////////////
// UPDATE APP OFFERS
////////////////////////////
function update_app_offer($connection, $id)
{
    $data = data_input_func('post');
    $app_offer_amount = mysqli_real_escape_string($connection, $data['app_offer_amount']);
    $app_offer_user_id = mysqli_real_escape_string($connection, $data['app_offer_user_id']);
    $app_offer_product_id = mysqli_real_escape_string($connection, $data['app_offer_product_id']);
    $app_offer_start_at = mysqli_real_escape_string($connection, $data['app_offer_start_at']);
    $app_offer_end_at = mysqli_real_escape_string($connection, $data['app_offer_end_at']);
    $status = mysqli_real_escape_string($connection, $data['status']);

    $sql = "UPDATE `app_offers` SET `app_offer_amount`='$app_offer_amount',`app_offer_user_id`='$app_offer_user_id',`app_offer_product_id`='$app_offer_product_id',`app_offer_start_at`='$app_offer_start_at',`app_offer_end_at`='$app_offer_end_at',`status`='$status' WHERE app_offer_id='$id'";

    if (mysqli_query($connection, $sql)) {
        response_func(200, ['message' => "app offer update success"]);
    } else {
        response_func(500, ['message' => "something is wrong"]);
    }
    mysqli_close($connection);

}
////////////////////////////
// DELETE APP OFFERS
////////////////////////////
function delete_app_offer($connection, $id)
{
    $sql="DELETE FROM app_offers WHERE app_offer_id='$id'";

    if (mysqli_query($connection, $sql)) {
        response_func(200, ['message' => "app offer delete success"]);
    } else {
        response_func(500, ['message' => "something is wrong"]);
    }
    mysqli_close($connection);
}
////////////////////////////
// RENDER ALL FUNCTIONS
////////////////////////////
authorization_check();
if ($REQUEST_METHOD == "GET" && $REQUEST_TYPE == "all") {
    all_app_offer($connection);
} else if ($REQUEST_METHOD == "GET" && $REQUEST_TYPE == "single") {
    single_app_offer($connection, $id);
} else if ($REQUEST_METHOD == "POST" && $REQUEST_TYPE == "create") {
    create_app_offer($connection);
} else if ($REQUEST_METHOD == "POST" && $REQUEST_TYPE == "update") {
    update_app_offer($connection, $id);
} else if ($REQUEST_METHOD == "DELETE" && $REQUEST_TYPE == "delete") {
    delete_app_offer($connection, $id);
} else {
    response_func(404, ['message' => "this route is not found!"]);
}