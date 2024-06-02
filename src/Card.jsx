import cat509 from './assets/509.jfif'
function Card(){
    return(
        <div className="card">
            <img className='card-image' src={cat509} alt="error" />
            <h2>Welcome</h2>
            <p>This is error response</p>
        </div>
    )
}
export default Card