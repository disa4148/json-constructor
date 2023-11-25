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
}

interface WidgetOptionProps {
  data: {
    displayedName: string
    options: OptionProps
  }
}

const WidgetOptions: React.FC<WidgetOptionProps> = ({ data: { displayedName, options } }) => {
  const getInputType = (value: string | number | undefined) =>
    typeof value === "number" ? "number" : "text"

  const [inputValues, setInputValues] = useState<Record<string, string | number>>({})

  useEffect(() => {
    const initialValues: Record<string, string | number> = {};
    Object.keys(options).forEach(key => {
      initialValues[key] = options[key as keyof OptionProps] ?? "";
    });
    setInputValues(initialValues);
  }, [options]);

  const handleInputChange = (key: string, value: string | number) => {
    setInputValues(prevValues => ({ ...prevValues, [key]: value }))
  }

  const handleSubmit = () => {
    console.log(inputValues)
  }

  return (
    <div>
      <div>
        <h1>{displayedName}</h1>
        <div className='flex flex-col gap-4'>
          {Object.keys(options).map(key => (
            <div key={key}>
              <label>{key}: </label>
              <input
                type={getInputType(inputValues[key])}
                value={inputValues[key] !== undefined ? inputValues[key].toString() : ''}
                onChange={e =>
                  handleInputChange(
                    key,
                    getInputType(inputValues[key]) === "number"
                      ? Number(e.target.value)
                      : e.target.value
                  )
                }
              />
            </div>
          ))}
        </div>
        <button className='mt-[20px]' onClick={handleSubmit}>
          Добавить
        </button>
      </div>
      <JsonDisplay data={inputValues}/>
    </div>
  )
}

export default WidgetOptions
