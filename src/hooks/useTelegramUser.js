// src/hooks/useTelegramUser.js
import { useState, useEffect } from 'react';

const useTelegramUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const tg = window.Telegram.WebApp;

    tg.ready(); // убедитесь, что web app готов

    const userData = {
      firstName: tg.initDataUnsafe?.user?.first_name || '',
      lastName: tg.initDataUnsafe?.user?.last_name || '',
      username: tg.initDataUnsafe?.user?.username || '',
      languageCode: tg.initDataUnsafe?.user?.language_code || '',
      userId: tg.initDataUnsafe?.user?.id || '',
    };

    setUser(userData);
  }, []);

  return user;
};

export default useTelegramUser;
