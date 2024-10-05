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
// GET ALL ADS CAMPAIGNS
////////////////////////////
function all_ads($connection)
{
    $ads = [];
    $sql = "SELECT * FROM ads";
    $result = mysqli_query($connection, $sql);
    if (mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_assoc($result)) {
            $ads[] = $row;
        }
        response_func(200, $ads);
    } else {
        response_func(404, ['message' => "data not found"]);
    }
    mysqli_close($connection);
}
////////////////////////////
// GET SINGLE ADS CAMPAIGNS
////////////////////////////
function single_ads($connection, $id)
{
    $sql = "SELECT * FROM ads WHERE ads_id='$id'";
    $result = mysqli_query($connection, $sql);
    if (mysqli_num_rows($result) > 0) {
        $rows = mysqli_fetch_assoc($result);
        response_func(200, $rows);
    } else {
        response_func(404, ['message' => "data not found",]);
    }
    mysqli_close($connection);
}
////////////////////////////
// CREATE NEW ADS CAMPAIGNS
////////////////////////////
function create_ads($connection)
{
    $data = data_input_func('post');
    $uuidv4 = uuid_v4();
    $ads_id = $uuidv4;
    $ads_title = mysqli_real_escape_string($connection, $data['ads_title']);
    $ads_start_at = mysqli_real_escape_string($connection, $data['ads_start_at']);
    $ads_end_at = mysqli_real_escape_string($connection, $data['ads_end_at']);
    $ads_description = mysqli_real_escape_string($connection, $data['ads_description']);
    $ads_redirect_url = mysqli_real_escape_string($connection, $data['ads_redirect_url']);
    $ads_btn_title = mysqli_real_escape_string($connection, $data['ads_btn_title']);
    $ads_type = mysqli_real_escape_string($connection, $data['ads_type']);
    $ads_category = mysqli_real_escape_string($connection, $data['ads_category']);
    $ads_budgets = mysqli_real_escape_string($connection, $data['ads_budgets']);
    $ads_advertisor_id = mysqli_real_escape_string($connection, $data['ads_advertisor_id']);
    $status = mysqli_real_escape_string($connection, $data['status']);
    //FILE INFO
    $files = file_input_func("single", "ads_thumbnail", 10);
    $file_name = $files['file']['file_name'];
    $file_tmp = $files['file']['file_tmp'];

    $sql = "INSERT INTO `ads`(`ads_id`, `ads_title`, `ads_start_at`, `ads_end_at`, `ads_thumbnail`, `ads_description`, `ads_redirect_url`, `ads_btn_title`, `ads_type`, `ads_category`, `ads_budgets`, `ads_advertisor_id`, `status`) 
                    VALUES ('$ads_id','$ads_title','$ads_start_at','$ads_end_at','$file_name','$ads_description','$ads_redirect_url','$ads_btn_title','$ads_type','$ads_category','$ads_budgets','$ads_advertisor_id','$status')";

    if (mysqli_query($connection, $sql)) {
        move_uploaded_file($file_tmp, '../uploads/ads_img/' . $file_name);
        response_func(201, ['message' => "ads create success", 'id' => $uuidv4]);
    } else {
        response_func(500, ['message' => 'something is wrong']);
    }
    mysqli_close($connection);

}
/////////////////////////////////
// UPDATE SINGLE ADS CAMPAIGNS
/////////////////////////////////
function update_ads($connection, $id)
{
    if (empty($_FILES['ads_thumbnail']['name'])) {
        $file_name = $_POST['old_ads_image'];
    } else {
        $files = file_input_func("single", "ads_thumbnail", 10);
        $file_name = $files['file']['file_name'];
        $file_tmp = $files['file']['file_tmp'];
    }

    $data = data_input_func('post');
    $ads_title = mysqli_real_escape_string($connection, $data['ads_title']);
    $ads_start_at = mysqli_real_escape_string($connection, $data['ads_start_at']);
    $ads_end_at = mysqli_real_escape_string($connection, $data['ads_end_at']);
    $ads_description = mysqli_real_escape_string($connection, $data['ads_description']);
    $ads_redirect_url = mysqli_real_escape_string($connection, $data['ads_redirect_url']);
    $ads_btn_title = mysqli_real_escape_string($connection, $data['ads_btn_title']);
    $ads_type = mysqli_real_escape_string($connection, $data['ads_type']);
    $ads_category = mysqli_real_escape_string($connection, $data['ads_category']);
    $ads_budgets = mysqli_real_escape_string($connection, $data['ads_budgets']);
    $ads_advertisor_id = mysqli_real_escape_string($connection, $data['ads_advertisor_id']);
    $status = mysqli_real_escape_string($connection, $data['status']);

    $sql = "UPDATE `ads` SET `ads_title`='$ads_title',`ads_start_at`='$ads_start_at',`ads_end_at`='$ads_end_at',`ads_thumbnail`='$file_name',`ads_description`='$ads_description',`ads_redirect_url`='$ads_redirect_url',`ads_btn_title`='$ads_btn_title',`ads_type`='$ads_type',`ads_category`='$ads_category',`ads_budgets`='$ads_budgets',`ads_advertisor_id`='$ads_advertisor_id',`status`='$status' WHERE ads_id='$id'";

    if (mysqli_query($connection, $sql)) {
        move_uploaded_file($file_tmp, '../uploads/ads_img/' . $file_name);
        response_func(200, ['message' => "ads update success",]);
    } else {
        response_func(500, ['message' => 'something is wrong']);
    }
    mysqli_close($connection);
}
/////////////////////////////////
// DELETE SINGLE ADS CAMPAIGNS
/////////////////////////////////
function delete_ads($connection, $id)
{
    $find_ads = "SELECT ads_thumbnail FROM ads WHERE ads_id='$id'";
    $find_result = mysqli_query($connection, $find_ads);
    if (mysqli_num_rows($find_result) > 0) {
        $rows = mysqli_fetch_assoc($find_result);
        $ads_thumbnail = $rows['ads_thumbnail'];
        $paths=str_replace("\\ads","",__DIR__ . "/uploads/ads_img/" . $ads_thumbnail);
        delete_file_func($paths);
        $sql = "DELETE FROM ads WHERE ads_id='$id'";
        if (mysqli_query($connection, $sql)) {
            response_func(200, ['message' => "ads delete success"]);
        } else {
            response_func(500, ['message' => "server error"]);
        }
        
    } else {
        response_func(404, ['message' => "ads file not delete",]);
    }
    mysqli_close($connection);
}
////////////////////////////
// RANDER ALL FUNCTIONS
////////////////////////////
authorization_check();
if ($REQUEST_METHOD == "GET" && $REQUEST_TYPE == "all") {
    all_ads($connection);
} else if ($REQUEST_METHOD == "GET" && $REQUEST_TYPE == "single") {
    single_ads($connection, $id);
} else if ($REQUEST_METHOD == "POST" && $REQUEST_TYPE == "create") {
    create_ads($connection);
} else if ($REQUEST_METHOD == "POST" && $REQUEST_TYPE == "update") {
    update_ads($connection, $id);
} else if ($REQUEST_METHOD == "DELETE" && $REQUEST_TYPE == "delete") {
    delete_ads($connection, $id);
} else {
    response_func(404, ['message' => "this route is not found!"]);
}