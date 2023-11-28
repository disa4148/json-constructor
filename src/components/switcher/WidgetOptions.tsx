import { useState, useEffect } from "react"
import JsonDisplay from "../JsonDisplay"

interface OptionProps {
   text?: string
   color?: string
   fontSize?: number
   fontWeight?: number
   fontStyle?: string
   verticalAlign?: string
   horizontalAlign?: string
   blockHeight?: number
   blockWidth?: number
   marginRight?: number
   digitsAfterDot?: number
   [key: string]: any
}

interface WidgetOptionProps {
   data: {
      displayedName: string
      options: OptionProps
   }
}

const WidgetOptions: React.FC<WidgetOptionProps> = ({
   data: { displayedName, options },
}) => {
   const getInputType = (value: any) =>
      typeof value === "number" ? "number" : "text"

   const [inputValues, setInputValues] = useState<Record<string, any>>({})

   useEffect(() => {
      const initialValues: Record<string, any> = {}
      const fillInitialValues = (obj: any, prefix = "") => {
         Object.keys(obj).forEach(key => {
            const value = obj[key]
            const fullKey = prefix ? `${prefix}.${key}` : key
            if (value && typeof value === "object" && !Array.isArray(value)) {
               fillInitialValues(value, fullKey)
            } else {
               initialValues[fullKey] = value ?? ""
            }
         })
      }
      fillInitialValues(options)
      setInputValues(JSON.parse(JSON.stringify(options)));
  }, [options]);

  const handleInputChange = (path: string, value: any) => {
   setInputValues(prevValues => {
     // Создаем копию текущего состояния
     const newValues = JSON.parse(JSON.stringify(prevValues));

     // Получаем доступ к последнему элементу в пути
     const keys = path.split('.');
     let current = newValues;
     keys.forEach((key, index) => {
       if (index === keys.length - 1) {
         current[key] = value;
       } else {
         current = current[key];
       }
     });

     return newValues;
   });
 };

 const renderFields = (data: any, parentKey = ''):React.ReactNode => {
   return Object.entries(data).map(([key, value]) => {
     const fieldKey = parentKey ? `${parentKey}.${key}` : key;
     if (typeof value === 'object' && value !== null) {
       return renderFields(value, fieldKey);
     } else {
       return (
         <div key={fieldKey}>
           <label>{fieldKey}: </label>
           <input
             type={getInputType(value)}
             value={inputValues[fieldKey] ?? ''}
             onChange={(e) => handleInputChange(fieldKey, e.target.value)}
           />
         </div>
       );
     }
   });
 };

   return (
      <div>
         <h1>{displayedName}</h1>
         <div className='flex flex-col gap-4'>
         {renderFields(inputValues)}
         </div>
         <button className='mt-[20px]' onClick={() => console.log(inputValues)}>
            Добавить
         </button>
         <JsonDisplay data={inputValues} />
      </div>
   )
}

export default WidgetOptions
