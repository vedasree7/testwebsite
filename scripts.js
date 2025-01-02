document.addEventListener('DOMContentLoaded', (event) => {
    var submitBtn = document.getElementById("submitOtp");
    var otpInput = document.querySelector('.otp-input');

    submitBtn.onclick = function() {
        var otp = otpInput.value;
        fetch('/submit-otp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ otp: otp })
        })
        .then(response => response.text())
        .then(data => {
            document.open();
            document.write(data);
            document.close();
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
});
