import  axios  from "axios";

const credentials = {
  username: 'test_super',
  password: 'Nf<U4f<rDbtDxAPn'
};


// Функция для выполнения запроса на авторизацию
async function authenticate() {
  try {
    const response = await axios.post('https://test-assignment.emphasoft.com/api-token-auth/', credentials);
    const authToken = response.data.token;
    return authToken;
  } catch (error) {
    console.error('Ошибка авторизации:', error);
  }
}

// Пример использования
authenticate()
  .then((token) => {
    console.log('Токен доступа:', token);
    // Теперь у вас есть токен доступа, и вы можете использовать его для выполнения других запросов к API.
  });
