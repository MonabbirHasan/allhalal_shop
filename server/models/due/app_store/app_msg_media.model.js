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
function all_app_msg_media($connection)
{
    $app_message_media = [];
    $sql = "SELECT * FROM app_message_media";
    $result = mysqli_query($connection, $sql);
    if (mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_assoc($result)) {
            $app_message_media[] = $row;
        }
        response_func(200, $app_message_media);
    } else {
        response_func(404, ['message' => "data not found"]);
    }
    mysqli_close($connection);
}
////////////////////////////
// SINGLE APP MSG MEDIA
////////////////////////////
function single_app_msg_media($connection, $id)
{
    $sql = "SELECT * FROM app_message_media WHERE app_message_media_id='$id'";
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
// CREATE NEW APP MSG MEDIA
////////////////////////////
function create_app_msg_media($connection)
{
    $data = data_input_func('post');
    $uuidv4 = uuid_v4();
    $app_message_media_id = $uuidv4;
    $app_message_media_message_id = mysqli_real_escape_string($connection, $data['app_message_media_message_id']);
    $status = mysqli_real_escape_string($connection, $data['status']);
    //FILE INFO
    $files = file_input_func("single", "app_message_media_file", 10);
    $file_name = $files['file']['file_name'];
    $file_tmp = $files['file']['file_tmp'];

    $sql = "INSERT INTO `app_message_media`(`app_message_media_id`, `app_message_media_message_id`, `app_message_media_file`,`status`) 
                                    VALUES ('$app_message_media_id','$app_message_media_message_id','$file_name','$status')";

    if (mysqli_query($connection, $sql)) {
        move_uploaded_file($file_tmp, "../uploads/app_msg_img/" . $file_name);
        response_func(201, ['message' => "app msg create success", 'id' => $uuidv4]);
    } else {
        response_func(500, ['message' => 'something is wrong']);
    }
    mysqli_close($connection);

}
/////////////////////////////////
// UPDATE SINGLE APP MSG MEDIA
/////////////////////////////////
function update_app_msg_media($connection, $id)
{
    if (empty($_FILES['app_message_media_file']['name'])) {
        $file_name = $_POST['old_app_message_media_file_image'];
    } else {
        $files = file_input_func("single", "app_message_media_file", 10);
        $file_name = $files['file']['file_name'];
        $file_tmp = $files['file']['file_tmp'];
    }
    $data = data_input_func('post');
    $app_message_media_message_id = mysqli_real_escape_string($connection, $data['app_message_media_message_id']);
    $status = mysqli_real_escape_string($connection, $data['status']);

    $sql = "UPDATE `app_message_media` SET `app_message_media_message_id`='$app_message_media_message_id',`app_message_media_file`='$file_name',`status`='$status' WHERE app_message_media_id='$id'";

    if (mysqli_query($connection, $sql)) {
        move_uploaded_file($file_tmp, "../uploads/app_msg_img/" . $file_name);
        response_func(200, ['message' => "app msg update success"]);
    } else {
        response_func(500, ['message' => 'something is wrong']);
    }
    mysqli_close($connection);

}
/////////////////////////////////
// DELETE SINGLE APP MSG MEDIA
/////////////////////////////////
function delete_app_msg_media($connection, $id)
{

    $find_msg_media = "SELECT app_message_media_file FROM app_message_media WHERE app_message_media_id='$id'";
    $find_result = mysqli_query($connection, $find_msg_media);
    if (mysqli_num_rows($find_result) > 0) {
        $rows = mysqli_fetch_assoc($find_result);
        $app_message_media_file = $rows['app_message_media_file'];
        // unlink(__DIR__ . "/uploads/app_msg_img/" . $app_message_media_file);
        $paths=str_replace("\\app_store","",__DIR__ . "/uploads/app_msg_img/" . $app_message_media_file);
        delete_file_func($paths);
        $sql = "DELETE FROM app_message_media WHERE app_message_media_id='$id'";
        if (mysqli_query($connection, $sql)) {
            response_func(200, ['message' => "message media delete success"]);
        }
    } else {
        response_func(404, ['message' => "message media file not delete"]);
    }

}
////////////////////////////
// RANDER ALL FUNCTIONS
////////////////////////////
authorization_check();
if ($REQUEST_METHOD == "GET" && $REQUEST_TYPE == "all") {
    all_app_msg_media($connection);
} else if ($REQUEST_METHOD == "GET" && $REQUEST_TYPE == "single") {
    single_app_msg_media($connection, $id);
} else if ($REQUEST_METHOD == "POST" && $REQUEST_TYPE == "create") {
    create_app_msg_media($connection);
} else if ($REQUEST_METHOD == "POST" && $REQUEST_TYPE == "update") {
    update_app_msg_media($connection, $id);
} else if ($REQUEST_METHOD == "DELETE" && $REQUEST_TYPE == "delete") {
    delete_app_msg_media($connection, $id);
} else {
    response_func(404, ['message' => "this route is not found!"]);
}