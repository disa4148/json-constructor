export const selectorList = [
   {
      displayedName: "Логотип РСДУ",
      type: "Labels.Rsdu5Logo",
      options: {},
   },
   {
      displayedName: "Дата и время",
      type: "Labels.DataTime",
      options: {
         format: "DD.MM.YYYY HH:mm:ss",
         color: "#0000ff",
         fontSize: 18,
         fontWeight: 600,
         fontStyle: "normal",
         textAlign: "right",
      },
   },
   {
      displayedName: "Текст",
      type: "Labels.SimpleText",
      options: {
         text: "ПС КВАРЦ 110 кВ",
         color: "#0000ff",
         fontSize: 30,
         fontWeight: 600,
         fontStyle: "normal",
         textAlign: "justify",
      },
   },
   {
      displayedName: "Телеизмерение",
      type: "Analogs.SingleValue",
      options: {
         title: {
            text: "P факт",
            color: "#ff0000",
            fontSize: 25,
            fontWeigh: 400,
            fontStyle: "normal",
            verticalAlign: "center",
            horizontalAlign: "left",
         },
         value: {
            digitsAfterDot: 3,
            color: "#00ff00",
            fontSize: 30,
            fontWeight: 800,
            fontStyle: "italic",
            verticalAlign: "center",
            horizontalAlign: "center",
            blockHeight: 70,
            blockWidht: 70,
            marginRight: 10,
         },
         unit: {
            text: "МВт",
            color: "#0000ff",
            fontSize: 30,
            fontWeight: 800,
            fontStyle: "normal",
            verticalAlign: "center",
            horizontalAlign: "right",
         },
         rtdata: [
            {
               tag: "",
               tableId: 29,
               paramId: 5010404,
               gtopt: "",
            },
         ],
      },
   },
   { displayedName: "Таблица", type: "Analogs.TableGtp", options: {
    
   } },
   {
      displayedName: "Действующая команда",
      type: "Labels.LastCommand",
      options: {},
   },
   {
      displayedName: "График активной мощности ГОУ",
      type: "Charts.ChartGtp",
      options: {},
   },
   { displayedName: "График", type: "Charts.SimpleChart", options: {} },
]
export default selectorList
