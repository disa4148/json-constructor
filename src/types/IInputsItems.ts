export default interface IInputsItems {
   name: string
   description: string
   window: {
      width: number
      height: number
   }
   layout: {
      grid: {
         cols: number
         rows: number
         margin: Margin
      }
   }
   frames: [
      {
         id: string
         x: number
         y: number
         width: number
         height: number

         widget: {
            type: string
            options: {
               format: string
               color?: string
               text?: string
               fontSize?: string
               fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
               fontStyle?: "normal" | "italic"
               textAlign?: "justify" | "left" | "center" | "right"
               verticalAlign?: "top" | "center" | "bottom"
               horizontalAlign?: "left" | "center" | "right"
               digitsAfterDot: number
               countNumbersAfterDot: number
            }
         }
      }
   ]
}

type Margin = [number, number]

