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
  star_wars: string;
  more_details: string;
  goddess: string;
  muses: string;
  unknown: string;
  charles_meynier: string;
  calliope: string;
  calliope_paragraph_1: string;
  calliope_paragraph_2: string;
  euterpe: string;
  artist_simon_vouet: string;
  euterpe__paragraph_1: string;
  euterpe__paragraph_2: string;
  euterpe__paragraph_3: string;
  euterpe__paragraph_4: string;
  melpomene: string;
  artist_nicolas_rene_jollin: string;
  melpomene_paragraph_1: string;
  melpomene_paragraph_2: string;
  melpomene_paragraph_3: string;
  waist: string;
  artist_jean_baptiste_nattier: string;
  waist_paragraph_1: string;
  waist_paragraph_2: string;
  erato: string;
  artist_francois_boucher: string;
  erato_paragraph_1: string;
  erato_paragraph_2: string;
  erato_paragraph_3: string;
  polyhymnia: string;
  artist_meynier_charles: string;
  polyhymnia_paragraph_1: string;
  polyhymnia_paragraph_2: string;
  terpsichore: string;
  artist_jean_marc_nattier: string;
  terpsichore_paragraph_1: string;
  terpsichore_paragraph_2: string;
  terpsichore_paragraph_3: string;
  clio: string;
  artis_charles_meinier: string;
  clio_paragraph_1: string;
  clio_paragraph_2: string;
  urania: string;
  artist_francois_andre_vincent: string;
  urania_paragraph_1: string;
  urania_paragraph_2: string;
  urania_paragraph_3: string;

}

// Таблица перевода
let strings: IStrings;
  strings = new LocalizedStrings({
    ru: {
      //#region 
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
      star_wars: 'Star Wars',
      more_details: 'Подробнее',
      goddess: 'Богиня',
      muses: 'Музы',
      unknown: 'неизвестно',
      //#endregion
      //#region 
      charles_meynier: 'Мейнье Шарль',
      calliope: 'Каллиопа',
      calliope_paragraph_1: 'В древнегреческой мифологии — муза эпической поэзии[2], науки и философии.',
      calliope_paragraph_2: 'Именем Каллиопы назван астероид (22) Каллиопа, открытый в 1852 году. Именем музы также назван музыкальный инструмент каллиопа.',
      euterpe: 'Эвтерпа',
      artist_simon_vouet: 'Симон Вуэ',
      euterpe__paragraph_1: 'Муза лирической поэзии.',
      euterpe__paragraph_2: 'Cчитается покровительницей поэтов, помогающей складывать из слов песни, а из звуков — восхитительную музыку.',
      euterpe__paragraph_3: 'В честь Эвтерпы назван астероид (27) Эвтерпа, открытый в 1853 году. Эвтерпа изображена в гербе муниципального образования «Чёрная речка» (г Санкт-Петербург).',
      euterpe__paragraph_4: 'Эвтерпа изображена в гербе муниципального образования «Чёрная речка» (г Санкт-Петербург).',
      melpomene: 'Мельпомена',
      artist_nicolas_rene_jollin: 'Николя Рене Жоллен',
      melpomene_paragraph_1: 'В древнегреческой мифологии Мельпомена — это муза трагедии, которую принято считать символом театра и театрального искусства.',
      melpomene_paragraph_2: 'В честь Мельпомены Геродот назвал IV книгу своей «Истории», в которой рассказывается о войне и победе скифов над вторгнувшимся в их пределы 600-тысячным войском персидского царя Дария I за 30 лет до Фермопильского сражения.',
      melpomene_paragraph_3: 'В честь Мельпомены назван астероид (18) Мельпомена, открытый в 1852 году.',
      waist: 'Талия',
      artist_jean_baptiste_nattier: 'Жан Батист Натье',
      waist_paragraph_1: 'Муза комедии и лёгкой поэзии',
      waist_paragraph_2: 'Талия несет с собой драгоценный дар – возможность увидеть себя со стороны и, в конечном итоге, найти веселье и радость даже в своих собственных ошибках. Она приглашает нас в учебу жизни, где комедия выступает в качестве наставницы, раздвигающей занавес, чтобы раскрыть скрытые глубины нашей собственной душевной сущности.',
      erato: 'Эрато',
      artist_francois_boucher: 'Франсуа Буше',
      erato_paragraph_1: 'Муза любовной поэзии',
      erato_paragraph_2: 'Согласно Диодору, получила имя «от умения обученных становиться желанными для страсти и любви.',
      erato_paragraph_3: 'В честь Эрато назван астероид (62) Эрато, открытый в 1860 году и лейбл звукозаписи классической и академической музыки.',
      //#endregion
      polyhymnia: 'Polyhymnia',
      artist_meynier_charles: 'Meynier Charles',
      polyhymnia_paragraph_1: 'Муза торжественных гимнов, а также сельского хозяйства и пантомимы.',
      polyhymnia_paragraph_2: 'В честь Полигимнии назван астероид (33) Полигимния, открытый в 1854 году.',
      terpsichore: 'Терпсихора',
      artist_jean_marc_nattier: 'Jean-Marc Nattier',
      terpsichore_paragraph_1:'Считается покровительницей танцев и хорового пения.',
      terpsichore_paragraph_2:'Считается матерью сирен.',
      terpsichore_paragraph_3:'В честь Терпсихоры назван астероид (81) Терпсихора, открытый в 1864 году.',
      clio: 'Clio',
      artis_charles_meinier: 'Charles Meinier',
      clio_paragraph_1: 'Муза истории',
      clio_paragraph_2: 'В честь Клио назван астероид (84) Клио, открытый в 1865 году.',
      urania: 'Urania',
      artist_francois_andre_vincent: 'Франкоис Андре Винсент',
      urania_paragraph_1: 'Муза астрономии',
      urania_paragraph_2: 'Согласно Диодору, получила имя от устремленности к небу (урано́с) тех, кто постиг ее искусство.',
      urania_paragraph_3: 'В честь Урании назван астероид (30) Урания, открытый в 1854 году.',
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