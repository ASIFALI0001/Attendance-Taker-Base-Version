 // Tab switching functionality
 const loginTab = document.getElementById('login-tab');
 const registerTab = document.getElementById('register-tab');
 const loginForm = document.getElementById('login-form');
 const registerForm = document.getElementById('register-form');
 const forgotPasswordForm = document.getElementById('forgot-password-form');
 const forgotPasswordLink = document.getElementById('forgot-password-link');
 const backToLoginLink = document.getElementById('back-to-login');

 loginTab.addEventListener('click', () => {
   loginTab.classList.add('active');
   registerTab.classList.remove('active');
   loginForm.style.display = 'block';
   registerForm.style.display = 'none';
   forgotPasswordForm.style.display = 'none';
 });

 registerTab.addEventListener('click', () => {
   registerTab.classList.add('active');
   loginTab.classList.remove('active');
   registerForm.style.display = 'block';
   loginForm.style.display = 'none';
   forgotPasswordForm.style.display = 'none';
 });

 forgotPasswordLink.addEventListener('click', (e) => {
   e.preventDefault();
   loginForm.style.display = 'none';
   forgotPasswordForm.style.display = 'block';
 });

 backToLoginLink.addEventListener('click', (e) => {
   e.preventDefault();
   forgotPasswordForm.style.display = 'none';
   loginForm.style.display = 'block';
 });

 // Form submission handling for Login
 const loginBtn = document.getElementById('login-btn');
 const registerBtn = document.getElementById('register-btn');
 const resetBtn = document.getElementById('reset-btn');

loginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (email && password) {
    document.getElementById('login-success').style.display = 'block';
    document.getElementById('login-error').style.display = 'none';

    // Display the link for dashboard
    setTimeout(() => {
      document.getElementById('login-success-link').click(); // Auto-click the anchor
    }, 1500);
  } else {
    document.getElementById('login-error').style.display = 'block';
    document.getElementById('login-success').style.display = 'none';
  }
});


 // Form submission handling for Register
 registerBtn.addEventListener('click', (e) => {
   e.preventDefault();
   const name = document.getElementById('register-name').value;
   const email = document.getElementById('register-email').value;
   const studentId = document.getElementById('register-student-id').value;
   const password = document.getElementById('register-password').value;
   const confirmPassword = document.getElementById('confirm-password').value;

   // Simple validation
   if (name && email && studentId && password && password === confirmPassword) {
     document.getElementById('register-success').style.display = 'block';
     document.getElementById('register-error').style.display = 'none';

     // Simulate loading and redirect to login
     setTimeout(() => {
       document.getElementById('register-success').style.display = 'none';
       loginTab.click();
     }, 2000);
   } else {
     document.getElementById('register-error').style.display = 'block';
     document.getElementById('register-success').style.display = 'none';
   }
 });

 // Form submission handling for Forgot Password
 resetBtn.addEventListener('click', (e) => {
   e.preventDefault();
   const email = document.getElementById('forgot-email').value;

   // Simple validation
   if (email) {
     document.getElementById('reset-success').style.display = 'block';
     document.getElementById('reset-error').style.display = 'none';

     // Simulate loading
     setTimeout(() => {
       document.getElementById('reset-success').style.display = 'none';
       backToLoginLink.click();
     }, 2000);
   } else {
     document.getElementById('reset-error').style.display = 'block';
     document.getElementById('reset-success').style.display = 'none';
   }
 });