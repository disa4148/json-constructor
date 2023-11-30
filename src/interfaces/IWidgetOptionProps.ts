import IOptionProps from "./IOptionsProps";
// Интерфейс для свойств, передаваемых в компонент WidgetOptions

export default interface IWidgetOptionProps {
    data: {
      displayedName: string;
      widget: {
        type: string;
        options: IOptionProps;
      };
      id: string;
      x: number;
      y: number;
      width: number;
      height: number;
    };
  }