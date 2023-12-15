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