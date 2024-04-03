<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $mobile = $_POST["mobile"];
    $message = $_POST["message"];

    // Create an email message
    $to = "your-email@example.com"; // Change this to your email address
    $subject = "New Contact Form Submission";
    $email_message = "Name: $name\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Mobile Number: $mobile\n";
    $email_message .= "Message:\n$message";

    // Send email
    $headers = "From: $email";
    if (mail($to, $subject, $email_message, $headers)) {
        // If the email is sent successfully, redirect to a thank you page
        header("Location: thank-you.html"); // Change this to your thank you page
        exit;
    } else {
        // If there is an error sending the email, display an error message
        echo "Oops! Something went wrong. Please try again later.";
    }
} else {
    // If the form is not submitted, redirect to the contact page
    header("Location: contact.html"); // Change this to your contact page
    exit;
}
?>
