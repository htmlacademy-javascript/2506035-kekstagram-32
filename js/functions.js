//* Task #1 //*


const checkString = (string, maxString) => {
  const result = string.length <= maxString;
  // console.log(result);

  return result;

};

// Строка короче 20 символов
checkString('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
checkString('проверяемая строка', 18); // true
// Строка длиннее 10 символов
checkString('проверяемая строка', 10); // false

/* Task #2 */

const isPalindrom = (string) => {
  const cleaned = string.toLowerCase().replaceAll(' ', '');
  const reversed = cleaned.split('').reverse().join('');

  // console.log(cleaned === reversed)
  return cleaned === reversed;
};


// Строка является палиндромом
isPalindrom('топот'); // true
// Несмотря на разный регистр, тоже палиндром
isPalindrom('ДовОд'); // true
// Это не палиндром
isPalindrom('Кекс'); // false


/*   Доп. задания не сделал, хоть основные сдать, не могу уже((   */
