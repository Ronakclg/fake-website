<?php
// verify.php - Example backend verification script
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // 1. Get the reCAPTCHA response token from the POST request
    $recaptcha_response = $_POST['g-recaptcha-response'];

    // 2. Your Google Secret Key (Get this from Google reCAPTCHA Admin Console)
    $secret_key = "6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe";

    // 3. Make a request to Google's verify API
    $verify_url = "https://www.google.com/recaptcha/api/siteverify";
    $data = [
        'secret' => $secret_key,
        'response' => $recaptcha_response,
        'remoteip' => $_SERVER['REMOTE_ADDR']
    ];

    $options = [
        'http' => [
            'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
            'method'  => 'POST',
            'content' => http_build_query($data)
        ]
    ];
    $context  = stream_context_create($options);
    $result = file_get_contents($verify_url, false, $context);
    
    // 4. Decode the JSON response
    $response_keys = json_decode($result, true);

    // 5. Check if success is true
    if($response_keys["success"]) {
        echo "<h2>Verification Successful!</h2>";
        // Process download or login here...
    } else {
        echo "<h2>Verification Failed. Please try again.</h2>";
        // Log errors or handle failure
    }
} else {
    // If not a POST request, redirect back
    header('Location: index.html');
    exit;
}
?>