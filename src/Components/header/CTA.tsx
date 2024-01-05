import './header.css'
import cv from '../../assets/cv.pdf';

const Cta = () => {
    return (
        <div className='cta'>
            <a href={cv} download className='btn'>Download</a>
            <a href="#contact" className='btn btn-primary'>Contact me</a>
        </div>
    )
}

export default Cta;

