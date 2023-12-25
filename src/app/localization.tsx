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
  mnemosyne: string;
  mnemosyne_short: string;
  gabriel_dante_rosetti: string;
  artist: string;
  mnemosyne_paragraph_1: string;
  mnemosyne_paragraph_2: string;
  mnemosyne_paragraph_3: string;
  mnemosyne_paragraph_4: string;
  mnemosyne_paragraph_5: string;
  mnemosyne_paragraph_6: string;
  mnemosyne_paragraph_7: string;
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
      mnemosyne: 'Мнемосина -',
      mnemosyne_short: 'богиня, олицетворявшая память',
      gabriel_dante_rosetti: 'Данте Габриэль Россетти',
      artist: 'Художник:',
      mnemosyne_paragraph_1: 'В греческой мифологии богиня памяти, дочь Урана (небо) и Геи (земли), титанида.',
      mnemosyne_paragraph_2: 'Согласно поэту Гесиоду, Мнемосина знает «обо всем, что было, есть и будет». Во время молитв Мнемосине, по словам древнегреческого писателя Павсания, люди просили улучшить их способность запоминать услышанное и увиденное.',
      mnemosyne_paragraph_3: 'JavaScript, TypeSript, npm, Node JS, Webpack, React, HTML, CSS, SCSS, SASS, C#, SQL …',
      mnemosyne_paragraph_4: 'О, Мнемосина, супруга могучего Зевса! Матерь священных умов и ликующих Муз!',
      mnemosyne_paragraph_5: 'Дай памяти…',
      mnemosyne_paragraph_6: 'Не сотвори себе кумира и всякого изображения того, что на небе вверху, и на земле внизу, и в воде ниже земли; не поклоняйся и не служи им.',
      mnemosyne_paragraph_7: 'Вторая заповедь Закона Божия',

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