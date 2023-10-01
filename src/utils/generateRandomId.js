/**
 * Генерирует короткое строковое значение, предназначена для тестирования
 * или принудительного назначения параметра key в вёрстке.
 */
export default function generateRandomId() {
  return (Math.random() + 1).toString(36).substring(6)
}
