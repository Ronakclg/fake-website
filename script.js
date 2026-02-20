// Custom CAPTCHA Logic
let isVerified = false;
let isVerifying = false;

document.addEventListener('DOMContentLoaded', function() {
    const verifyBtn = document.getElementById('verify-btn');
    if (verifyBtn) {
        verifyBtn.disabled = true;
        verifyBtn.style.cursor = 'not-allowed';
    }

    const checkbox = document.getElementById('captchaBox');
    if (checkbox) {
        checkbox.addEventListener('click', verifyCaptcha);
    }
    const label = document.querySelector('.captcha-label');
    if (label) {
        label.addEventListener('click', verifyCaptcha);
    }

    // Sign in button functionality
    const signinBtn = document.querySelector('.signin-btn');
    if (signinBtn) {
        signinBtn.addEventListener('click', function() {
            console.log('Sign in clicked');
            alert('Sign In functionality would be implemented here.');
        });
    }

    // Form submission handler
    const form = document.getElementById('verification-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Form submitted. isVerified:', isVerified);
            if (!isVerified) {
                alert('Please verify that you are not a robot.');
            } else {
                console.log('Redirecting to student portal...');
                // Redirect to student_document_portal (in same FakeWebsite folder)
                window.location.href = './student_document_portal/index.html';
            }
        });
    }
});

function verifyCaptcha() {
    if (isVerified || isVerifying) return; // Prevent multiple clicks

    isVerifying = true;
    const checkbox = document.getElementById('captchaBox');
    const spinner = document.getElementById('spinner');
    const checkmark = document.getElementById('checkmark');
    const verifyBtn = document.getElementById('verify-btn');

    // 1. Show Spinner
    if (spinner) spinner.style.display = 'block';
    
    // 2. Simulate Network Delay (1.5 seconds)
    setTimeout(() => {
        // 3. Hide Spinner, Show Checkmark
        if (spinner) spinner.style.display = 'none';
        if (checkmark) checkmark.style.display = 'block';
        
        // 4. Update Checkbox Style
        if (checkbox) checkbox.style.border = 'none'; 

        // 5. Update State
        isVerified = true;
        isVerifying = false;

        // 6. Enable Verify Button
        if (verifyBtn) {
            verifyBtn.disabled = false;
            verifyBtn.style.cursor = 'pointer';
        }
    }, 1500);
}