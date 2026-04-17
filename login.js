const loginButton = document.getElementById('loginButton');
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

loginButton.addEventListener('click', () => {
  if (validateLogin()) {
    window.location.href = 'gacha.html';
  }
});
