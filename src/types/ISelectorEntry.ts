export default interface ISelectorEntry {
    displayedName: string
    onSetWidget: (widgetType: IWidgetEntry) => void
    type: IWidgetEntry
}

type IWidgetEntry = 
"DataTime"
   | "Rsdu5Logo"
   | "SimpleText"
   | "Analogs.SingleValue"
   | "Analogs.TableGtp" | null
