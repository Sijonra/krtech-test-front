import icons from './sprite.svg'
const Icons = () =>{
    return(
        <svg className={'prikiol'}>
            <use href={icons + '#icon' }/>
        </svg>
    )
}

export {Icons}