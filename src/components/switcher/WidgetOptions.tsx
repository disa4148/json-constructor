interface WidgetOptionsProps {
    data: {
      displayedName: string;
      options: {
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
      };
    };
  }

const WidgetOptions = (props: any) => {
   console.log(props.data.options)

   const options = props.data.options // Ваши опции

   const optionsAsString = Object.keys(options)
      .map((key: string) => `${key}: ${options[key]}`)
      .join(", ")

   return (
      <div>
         <div>
            <h1>{props.data.displayedName}</h1>
            <p>{optionsAsString}</p>
         </div>
      </div>
   )
}

export default WidgetOptions
