
import Button from '../../../../components/share/Button'

function HeroSide(props) {
    return (
        <div className='w-[45%] flex 2xl:text-2xl   flex-col gap-5 items-start text-justify'>
            <p className='text-gray-100'>{props.dis}</p>
            <ol className='list-decimal text-gray-300'>
                {props.items.map(item => (
                    <li key={Date.now()}>{item}</li>
                ))}
            </ol>
            <Button text={props.btnText} />
        </div>
    )
}

export default HeroSide
