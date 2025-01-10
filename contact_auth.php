<?php
if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message'])) {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

   
    $response = array(
        'status' => 'success',
        'message' => 'Thank you, ' . $name . '! Your message has been received.'
    );
    echo json_encode($response);
} else {
    
    $response = array(
        'status' => 'error',
        'message' => 'Please fill out all fields.'
    );
    echo json_encode($response);
}
?>