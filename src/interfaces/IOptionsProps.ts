// Определение интерфейса для свойств виджета

export default interface IOptionProps {
    text?: string;
    color?: string;
    fontSize?: number;
    fontWeight?: number;
    fontStyle?: string;
    verticalAlign?: string;
    horizontalAlign?: string;
    blockHeight?: number;
    blockWidth?: number;
    marginRight?: number;
    digitsAfterDot?: number;
    [key: string]: any;
  }
  