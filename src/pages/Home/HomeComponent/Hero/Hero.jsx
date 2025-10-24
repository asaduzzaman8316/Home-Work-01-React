
import HeroSide from './HeroSide'
import HeroImg from './HeroImg'
import HeroTop from '../../../../components/share/Hero/HeroTop'


function Hero(props) {
    
    return (
        <div className='pb-16 '>
            <HeroTop title={props.title} dis={props.para} />

            <div className={`flex justify-between ${props.style}`}>
                <HeroImg img={props.img} />

                <HeroSide dis={props.dis} items={props.list}  btnText={props.btnText}/>
            </div>
        </div>
    )
}

export default Hero
