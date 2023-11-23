import {useState} from 'react'
import JsonDisplay from './components/jsonDisplay'
import { useForm, SubmitHandler } from "react-hook-form"
import IInputsItems from "./types/IInputsItems"

import styles from "./styles/main.module.scss"

function App() {  
  const { register, handleSubmit, reset } = useForm<IInputsItems>()
  const [formData, setFormData] = useState<IInputsItems|null>(null)

  const onSubmit: SubmitHandler<IInputsItems> = (data) => {
    console.log(data)
    setFormData(data)
    reset()
    
  }

  return (
      <div className={styles.wrapper}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <input placeholder="Название таблицы" type="text" {...register("name")} required/>
          <input placeholder="Описание таблицы" type="text" {...register("description")} required/>
          <input placeholder="Ширина" type="number" {...register("window.width")} required/>
          <input placeholder="Высота" type="number" {...register("window.height")} required/>
          <p>Layout</p>
          <input placeholder="Кол-во столбцов" type="number" {...register("layout.grid.cols")} required/>
          <input placeholder="Кол-во строк" type="number" {...register("layout.grid.rows")} required/>
          <p>Margin</p>
          <input placeholder="Горизонтальный отступ" type="number" {...register("layout.grid.margin.0")} required/>
          <input placeholder="Вертикальный отступ" type="number" {...register("layout.grid.margin.1")} required/>
          <p>Frames</p>
          <input placeholder="Идентификатор виджета" type="text" {...register("frames.0.id")} required/>
          <input placeholder="Местоположение по горизонтали" type="number" {...register("frames.0.x")} required/>
          <input placeholder="Местоположение по вертикали" type="number" {...register("frames.0.y")} required/>

          <input placeholder="Ширина виджета" type="number" {...register("frames.0.width")} required/>
          <input placeholder="Высота виджета" type="number" {...register("frames.0.height")} required/>

          <p>Widget</p>
          <input placeholder="Тип виджета" type="text" {...register("frames.0.widget.type")} required/>
          <input placeholder="Текст виджета" type="text" {...register("frames.0.widget.options.text")} required/>

          <p>Widget Options</p>
          <input placeholder="Формат" type="datetime-local" step={1} {...register("frames.0.widget.options.format")} required/>

          <input placeholder="Размер текста" defaultValue={"16px"} type="text" {...register("frames.0.widget.options.fontSize")}/>
          <input placeholder="Толщина шрифта" defaultValue={400} type="number" {...register("frames.0.widget.options.fontWeight")}/>
          {/* 
          @erorr
            Сообщение с ошибкой не выводиться пользователю 
          */}
          <input
            placeholder="Стиль шрифта (normal или italic)"
            type="text"
            defaultValue={'normal'}
            {...register("frames.0.widget.options.fontStyle", {
              pattern: {
                value: /^(normal|italic)$/,
                message: "Допустимые значения: normal или italic", 
              },
            })}
          />
           {/* 
          @erorr
            Сообщение с ошибкой не выводиться пользователю 
          */}
          <input placeholder="Выравнивание текста" defaultValue={"center"} type="text" {...register("frames.0.widget.options.textAlign", {
            pattern: {
              value: /^(justify|left|center|right)$/,
              message:"Допустимые значения: justify, left, center, right"
            }
          })}/>
           {/* 
          @erorr
            Сообщение с ошибкой не выводиться пользователю 
          */}
          <input placeholder="Выравнивание по вертикали" defaultValue={"center"} type="text"  {...register("frames.0.widget.options.verticalAlign", {
            pattern: {
              value: /^(top|center|bottom)$/,
              message:"Допустимые значения: top, center, bottom"
            }
          })}/>
           {/* 
          @erorr
            Сообщение с ошибкой не выводиться пользователю 
          */}
          <input placeholder="Выравнивание по горизонтали" defaultValue={"center"} type="text" {...register("frames.0.widget.options.horizontalAlign", {
            pattern: {
              value: /^(left|right|center)$/,
              message: "Допустимые значения: left right center"
            }
          })}/>
          
          <input placeholder="Кол-во знаков после запятой" defaultValue={2} type="text" {...register("frames.0.widget.options.digitsAfterDot")}/>
          <input placeholder="Кол-во чисел после запятой" defaultValue={2} type="text" {...register("frames.0.widget.options.countNumbersAfterDot")}/>
          
          <button type="submit">Отправить</button>
        </form>
        {formData && <JsonDisplay data={formData}/>}
      </div>
  )
}

export default App
