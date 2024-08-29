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
// GET ALL APP MSG MEDIA
////////////////////////////
function all_app_message($connection)
{
    $app_messages = [];
    $sql = "SELECT * FROM app_messages";
    $result = $connection->query($sql);
    if (mysqli_num_rows($result)>0) {
        while ($row = mysqli_fetch_assoc($result)) {
            $app_messages[] = $row;
        }
        response_func(200, $app_messages);
    } else {
        response_func(404, ['message' => "data not found"]);
    }
    mysqli_close($connection);
}
////////////////////////////
// GET SINGLE APP MSG MEDIA
////////////////////////////
function single_app_message($connection, $id)
{
    $sql = "SELECT * FROM app_messages WHERE app_message_id='$id'";
    $result = $connection->query($sql);
    if (mysqli_num_rows($result)>0) {
        $rows = mysqli_fetch_assoc($result);
        response_func(200, $rows);
    } else {
        response_func(404, ['message' => "data not found"]);
    }
    mysqli_close($connection);
}
////////////////////////////
// CREATE NEW APP MSG MEDIA
////////////////////////////
function create_app_message($connection)
{
    $data = data_input_func('post');
    $uuidv4 = uuid_v4();
    $app_message_id = $uuidv4;
    $app_message_sender_id = mysqli_real_escape_string($connection, $data['app_message_sender_id']);
    $app_message_receiver_id = mysqli_real_escape_string($connection, $data['app_message_receiver_id']);
    $app_message_content = mysqli_real_escape_string($connection, $data['app_message_content']);
    $is_sent = mysqli_real_escape_string($connection, $data['is_sent']);
    $is_delivery = mysqli_real_escape_string($connection, $data['is_delivery']);
    $is_received = mysqli_real_escape_string($connection, $data['is_received']);
    $is_deleted = mysqli_real_escape_string($connection, $data['is_deleted']);
    $is_seen = mysqli_real_escape_string($connection, $data['is_seen']);
    $status = mysqli_real_escape_string($connection, $data['status']);

    $sql = "INSERT INTO `app_messages`(`app_message_id`, `app_message_sender_id`, `app_message_receiver_id`, `app_message_content`, `is_sent`, `is_delivery`, `is_received`, `is_deleted`, `is_seen`, `status`) 
                            VALUES ('$app_message_id','$app_message_sender_id','$app_message_receiver_id','$app_message_content','$is_sent','$is_delivery','$is_received','$is_deleted','$is_seen','$status')";

    if (mysqli_query($connection, $sql)) {
        response_func(201, ['message' => "message create success", 'id' => $uuidv4]);
    } else {
        response_func(500, ['message' => "something is wrong"]);
    }
    mysqli_close($connection);
}
////////////////////////////
// UPDATE APP MSG MEDIA
////////////////////////////
function update_app_message($connection, $id)
{
    $data = data_input_func('post');
    $app_message_sender_id = mysqli_real_escape_string($connection, $data['app_message_sender_id']);
    $app_message_receiver_id = mysqli_real_escape_string($connection, $data['app_message_receiver_id']);
    $app_message_content = mysqli_real_escape_string($connection, $data['app_message_content']);
    $app_message_send_at = mysqli_real_escape_string($connection, $data['app_message_send_at']);
    $is_sent = mysqli_real_escape_string($connection, $data['is_sent']);
    $is_delivery = mysqli_real_escape_string($connection, $data['is_delivery']);
    $is_received = mysqli_real_escape_string($connection, $data['is_received']);
    $is_deleted = mysqli_real_escape_string($connection, $data['is_deleted']);
    $is_seen = mysqli_real_escape_string($connection, $data['is_seen']);
    $status = mysqli_real_escape_string($connection, $data['status']);

    $sql = "UPDATE `app_messages` SET `app_message_sender_id`='$app_message_sender_id',`app_message_receiver_id`='$app_message_receiver_id',`app_message_content`='$app_message_content',`is_sent`='$is_sent',`is_delivery`='$is_delivery',`is_received`='$is_received',`is_deleted`='$is_deleted',`is_seen`='$is_seen',`status`='$status' WHERE app_message_id='$id'";

    if (mysqli_query($connection, $sql)) {
        response_func(200, ['message' => "message update success"]);
    } else {
        response_func(500, ['message' => "something is wrong"]);
    }
    mysqli_close($connection);
}
////////////////////////////
// DELETE APP MSG MEDIA
////////////////////////////
function delete_app_message($connection, $id)
{
    $sql="DELETE FROM app_messages WHERE app_message_id='$id'";

    if (mysqli_query($connection, $sql)) {
        response_func(200, ['message' => "message delete success"]);
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
    all_app_message($connection);
} else if ($REQUEST_METHOD == "GET" && $REQUEST_TYPE == "single") {
    single_app_message($connection, $id);
} else if ($REQUEST_METHOD == "POST" && $REQUEST_TYPE == "create") {
    create_app_message($connection);
} else if ($REQUEST_METHOD == "POST" && $REQUEST_TYPE == "update") {
    update_app_message($connection, $id);
} else if ($REQUEST_METHOD == "DELETE" && $REQUEST_TYPE == "delete") {
    delete_app_message($connection, $id);
} else {
    response_func(404, ['message' => "this route is not found!"]);
}