type EnteredNumber = {
  id: number;
  number: number;
  exactly: string;
  near: string;
};

type State = {
  firstDigit: number;
  secondDigit: number;
  thirdDigit: number;
  fourthDigit: number;

  //Некорректный номер для ввода
  isNumberIncorrect: boolean;

  //Числа, введенные пользователем
  EnteredNumbers: Array<EnteredNumber>;

  //Загаданное число 
  RandomNumber: number;

  isGameOver: boolean;

  gameResult?: 'win' | 'lose';

  isShowRules: boolean;
  
};

type DigitBoxProps = {
  value: number;
  increment: any;
  decrement: any;
};