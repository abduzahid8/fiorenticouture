// frontend/src/components/Products/formatters.js

export const formatPrice = (priceValue) => {
  const number = parseFloat(priceValue);
  if (isNaN(number)) {
    return String(priceValue); // или '0', или как вы решите обрабатывать нечисловые значения
  }
  return number.toLocaleString('ru-RU'); // Формат "1 000 000"
};

// Сюда можно добавлять и другие функции форматирования, если они понадобятся для продуктов
