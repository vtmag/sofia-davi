<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;


 require 'path/to/PHPMailer/src/Exception.php';
require 'path/to/PHPMailer/src/PHPMailer.php';
 require 'path/to/PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $subject = htmlspecialchars($_POST['subject']);
    $service = htmlspecialchars($_POST['service']);
    $method = htmlspecialchars($_POST['method']);
    $message = htmlspecialchars($_POST['message']);

    $mail = new PHPMailer(true);

    try {
        // Ρυθμίσεις SMTP
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com'; // Ορίστε τον SMTP server που θα χρησιμοποιηθεί
        $mail->SMTPAuth   = true;
        $mail->Username   = 'your-email@gmail.com'; // Το Gmail σου
        $mail->Password   = 'your-app-password'; // Ο κωδικός εφαρμογής σου από το Gmail
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        // Ρυθμίσεις Αποστολέα και Παραλήπτη
        $mail->setFrom($email, $name); // Από ποιον στέλνεται το email
        $mail->addAddress('recipient-email@example.com'); // Προς ποιον στέλνεται το email

        // Περιεχόμενο του Email
        $mail->isHTML(true);
        $mail->Subject = "Νέα Επικοινωνία από $name - $subject";
        $mail->Body    = "<p>Όνομα: $name</p>
                          <p>Email: $email</p>
                          <p>Τηλέφωνο: $phone</p>
                          <p>Υπηρεσία: $service</p>
                          <p>Τρόπος Παροχής: $method</p>
                          <p>Μήνυμα: $message</p>";
        $mail->AltBody = "Όνομα: $name\nEmail: $email\nΤηλέφωνο: $phone\nΥπηρεσία: $service\nΤρόπος Παροχής: $method\nΜήνυμα: $message";

        $mail->send();
        echo 'Το μήνυμά σας στάλθηκε με επιτυχία!';
    } catch (Exception $e) {
        echo "Υπήρξε πρόβλημα με την αποστολή του μηνύματός σας. Error: {$mail->ErrorInfo}";
    }
} else {
    echo "Η φόρμα πρέπει να υποβληθεί.";
}
?>
