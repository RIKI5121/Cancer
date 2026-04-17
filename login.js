const loginForm = document.getElementById('loginForm');
const loginError = document.getElementById('loginError');

const validateLogin = () => {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!username || !password) {
    loginError.textContent = 'ユーザー名とパスワードを両方入力してください。';
    return false;
  }

  loginError.textContent = '';
  return true;
};

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (validateLogin()) {
    window.location.href = 'gacha.html';
  }
});
