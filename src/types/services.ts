//WinCompProps
export type WinCompProps = {
  moves: number;
  onClose: () => void; // callback برای بستن alert
};

//Button
export type ButtonVariant = 
  | 'primary' 
  | 'secondary' 
  | 'success' 
  | 'danger' 
  | 'warning' 
  | 'info' 
  | 'light' 
  | 'dark'
  | 'outline-primary'
  | 'outline-secondary'
  | 'outline-success'
  | 'outline-danger';

export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  outline?: boolean; // می‌تونی مستقیم variant رو outline-... بدی، این هم برای راحتیه
  className?: string;
};

//Gamelogic
export type CardType = {
  id: number;
  value: string;
  isFlipped: boolean;
  isMatched: boolean;
};

//GameHeader
export type GameHeaderProps = {
  score: number
  moves: number
  ResetFunc: React.MouseEventHandler<HTMLButtonElement>
}

//GameCard
export type GameCardProps = {
  card: CardType;
  onClick: (card: CardType) => void;
};