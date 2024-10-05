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
// GET ALL APP FAVRORITS
////////////////////////////
function all_app_favorit($connection)
{
    $app_favorits = [];
    $sql = "SELECT * FROM app_favorits";
    $result = $connection->query($sql);
    if (mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_assoc($result)) {
            $app_favorits[] = $row;
        }
        response_func(200, $app_favorits);
    } else {
        response_func(404, ['message' => "data not found"]);
    }
    mysqli_close($connection);
}
////////////////////////////
// GET SINGLE APP FAVRORITS
////////////////////////////
function single_app_favorit($connection, $id)
{
    $sql = "SELECT * FROM app_favorits WHERE app_favorit_id='$id'";
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
// CREATE NEW APP FAVRORITS
////////////////////////////
function create_app_favorit($connection)
{
    $data = data_input_func('post');
    $uuidv4 = uuid_v4();
    $app_favorit_id = $uuidv4;
    $app_favorit_user_id = mysqli_real_escape_string($connection, $data['app_favorit_user_id']);
    $app_favorit_app_id = mysqli_real_escape_string($connection, $data['app_favorit_app_id']);
    $status = mysqli_real_escape_string($connection, $data['status']);

    $sql = "INSERT INTO `app_favorits`(`app_favorit_id`, `app_favorit_user_id`, `app_favorit_app_id`, `status`) 
                            VALUES ('$app_favorit_id','$app_favorit_user_id','$app_favorit_app_id','$status')";

    if (mysqli_query($connection, $sql)) {
        response_func(201, ['message' => "app favorit create success", 'id' => $app_favorit_id]);
    } else {
        response_func(500, ['message' => "something is wrong"]);
    }
    mysqli_close($connection);

}
///////////////////////////////
// UPDATE SINGLE APP FAVRORITS
///////////////////////////////
function update_app_favorit($connection, $id)
{
    $data = data_input_func("post");
    $app_favorit_user_id = mysqli_real_escape_string($connection, $data['app_favorit_user_id']);
    $app_favorit_app_id = mysqli_real_escape_string($connection, $data['app_favorit_app_id']);
    $status = mysqli_real_escape_string($connection, $data['status']);

    $sql = "UPDATE `app_favorits` SET `app_favorit_user_id`='$app_favorit_user_id',`app_favorit_app_id`='$app_favorit_app_id',`status`='$status' WHERE app_favorit_id='$id'";

    if (mysqli_query($connection, $sql)) {
        response_func(200, ['message' => "app favorit update success",]);
    } else {
        response_func(500, ['message' => "something is wrong"]);
    }
    mysqli_close($connection);
}
////////////////////////////////
// DELETE SINGLE APP FAVRORITS
////////////////////////////////
function delete_app_favorit($connection, $id)
{
    $sql = "DELETE FROM app_favorits WHERE app_favorit_id='$id'";
    
    if (mysqli_query($connection, $sql)) {
        response_func(200, ['message' => "app favorit delete success",]);
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
    all_app_favorit($connection);
} else if ($REQUEST_METHOD == "GET" && $REQUEST_TYPE == "single") {
    single_app_favorit($connection, $id);
} else if ($REQUEST_METHOD == "POST" && $REQUEST_TYPE == "create") {
    create_app_favorit($connection);
} else if ($REQUEST_METHOD == "POST" && $REQUEST_TYPE == "update") {
    update_app_favorit($connection, $id);
} else if ($REQUEST_METHOD == "DELETE" && $REQUEST_TYPE == "delete") {
    delete_app_favorit($connection, $id);
} else {
    response_func(404, ['message' => "this route is not found!"]);
}