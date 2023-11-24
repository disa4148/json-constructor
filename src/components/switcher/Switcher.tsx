import React, {useState} from 'react'
import css from '../../styles/switcher/switcher.module.scss'
import Selector from './Selector'

type IWidget = "DataTime"|"Rsdu5Logo"|"SimpleText"|"Analogs.SingleValue"|"Analogs.TableGtp"

// type Props = {}
// props: Props
const Switcher = () => {
    const [widget, setWidget] = useState<IWidget>("DataTime")
    console.log(widget, setWidget)
  return (
    <div className={css.wrapper}>
        <h1 className='underline '>Доступные виджеты</h1>
        <div className={css.selectsWrapper}>
            <Selector/>
        </div>
    </div>
  )
}

export default Switcher