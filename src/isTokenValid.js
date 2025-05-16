function isTokenValid(token) {
    try {
      const decoded = jwtDecode(token); // Декодируем токен
      const currentTime = Math.floor(Date.now() / 1000); // Текущее время в секундах
      return decoded.exp > currentTime; // Проверяем, не истек ли токен
    } catch (error) {
      console.error("Ошибка проверки токена:", error);
      return false; // Если токен невалиден или не может быть декодирован
    }
  }

  export default isTokenValid;