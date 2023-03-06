import '../styles/Projects.css';

function Project ({ name, img, alt, link, GitHub }) {
    return (
        <div className='projects'>
            <h3>{name}</h3>
            <img className='proPhoto' src={img} alt={alt}/>
            <a className='web' href={link}>Website Link</a>
            <a className='git' href={GitHub}>GitHub Link</a>
        </div>
    )
}

export default Project;