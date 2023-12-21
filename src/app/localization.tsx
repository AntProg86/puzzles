import LocalizedStrings, { LocalizedStringsMethods } from 'react-localization';

export interface IStrings extends LocalizedStringsMethods{
  _home: string;
  _about: string;
  language_switches: string;
  title: string;
  generate_error: string;
  number_puzzle: string;
  restart: string;
  rules: string;
  exactly: string;
  near: string;
  number: string;
  number_puzzle_rules: string;
  enter: string;
  win: string;
  lose: string;
}

// Таблица перевода
let strings: IStrings;
  strings = new LocalizedStrings({
    ru: {
      _home: "Главная",
      _about: "Контакты",
      language_switches: "язык",
      title: "Заголовок",
      generate_error: 'Сгенерировать ошибку',
      number_puzzle: 'число-загадка',
      restart: 'Начать заново',
      rules: 'Правила',
      exactly: 'Точно',
      near: 'Рядом',
      number: 'Число',
      enter: 'Ввод',
      number_puzzle_rules: `<p><strong>Правила игры.</strong></p>
      <p>Компьютер загадывает случайное четырехзначное число, которое подчиняется двум правилам:</p>
      <p><strong>1.Все цифры разные;</strong></p>
      <p><strong>2.Первая цифра - не ноль.</strong></p>
      <p>Вы должны отгадать это число, набирая свои варианты ответа (дается 7 попыток). Если введенное Вами число не противоречит вышеперечисленным правилам, выводится результат попытки в виде:</p>
      <p><strong>Точно</strong> - количество цифр (соответствует количеству "Звёздочек"), которые есть и в загаданном числе и в Вашем варианте ответа, причем стоят они точно на своих позициях.</p>
      <p><strong>Рядом</strong> - количество цифр (соответствует количеству "Чёрточек"), которые есть и в загаданном числе и в Вашем варианте ответа, но стоят они на разных позициях.</p>
      <p><strong>Пример:</strong> Компьютер загадал число 5649, Вы ввели 5940. Результат этого хода: 2 точно, 1 рядом : точно угадана цифры 4 и 5, рядом угадана цифра 9.</p>
      <p><strong>Внимание!</strong> Если после очередного хода остался единственный возможный (а значит, и правильный) вариант ответа - текущая попытка становится решающей и последней - Вы либо выигрываете либо проигрываете!</p>`,
      
      win:`<p><strong>Победа!</strong></p>`,
      lose:`<p><strong>Проигрыш</strong></p>Загаданное число:<p></P>`,
    },
    // en: {
    //   _home: "Home",
    //   _about: "Contacts",
    //   language_switches: "language",
    //   title: "Title",
    //   generate_error: 'Generate error',
    // },
  });
 
export default strings;