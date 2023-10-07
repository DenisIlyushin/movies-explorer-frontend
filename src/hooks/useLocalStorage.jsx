import {useEffect, useState} from 'react';

/**
 * Хук управляет хранением переменной в локальном хранилище браузера
 * @param key - ключ записи значения
 * @param initialValue - начальное значение, рекомендуется null
 *
 * Возвращает сохраненное значение, методы его изменения, сброса на начальное
 * и удаления из локальной базы
 */
const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const parsedValue = localStorage.getItem(key);
    return parsedValue ? JSON.parse(parsedValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [storedValue]);

  const setValue = (value) => {
    setStoredValue(value);
  }

  const resetValue = () => {
    setStoredValue(initialValue);
  }

  const delValue = () => {
    localStorage.removeItem(key);
  }

  return [
    storedValue,
    setValue,
    resetValue,
    delValue,
  ];
};

export default useLocalStorage;
