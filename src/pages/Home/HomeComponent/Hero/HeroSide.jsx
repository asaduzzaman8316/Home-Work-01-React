
import { useContext } from 'react'
import Button from '../../../../components/share/Button'
import { ThemControlData } from '../../../../Context/ThemContext'

function HeroSide(props) {
    const [them] = useContext(ThemControlData)
    return (
        <div className='w-[45%] flex 2xl:text-2xl   flex-col gap-5 items-start text-justify'>
            <p className={`text-gray-${them === "Ligth" ? '800' : '200'}`}>{props.dis}</p>
            <ol className={`list-decimal text-gray-${them === "Ligth" ? '800' : '300'}`}>
                {props.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                ))}
            </ol>
            <Button text={props.btnText} />
        </div>
    )
}

export default HeroSide
