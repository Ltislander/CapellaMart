function login() {
    // Your login logic here (e.g., validation, server request)
    localStorage.setItem('isLoggedIn', 'true');
  }
  
  function logout() {
    localStorage.setItem('isLoggedIn', 'false');
  }