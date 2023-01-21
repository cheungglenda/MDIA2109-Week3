export default function Card({
    firstname = "none",
    lastname = "none",
    department = "none",
    jobtitle = "none",
    yearsworked = 0,
    description = "none",
    contact = "none",
    color = "pink",
    font = "O",
    image = "icon/person.png"
}) {
    return (
        <div>
        {
            firstname === "Yi" ? <img style={{objectFit: "cover"}} src={'yi.jpeg'} width="300" height="300"/> : 
            firstname === "Jennifer" ? <img style={{objectFit: "cover"}} src={'jennifer.jpeg'} width="300" height="300"/> :             <img src={image} width="300"/>
        }
            <h1 style={{fontFamily:"'Courier New', Courier, monospace", textTransform: "lowercase", fontSize: 20}}>{firstname} {lastname}</h1>
            <h2 style={{fontFamily:"'Courier New', Courier, monospace", textTransform: "uppercase", fontSize: 18}}>{jobtitle}</h2>
            <p style={{fontFamily: "'Courier New', Courier, monospace", margin:"10px"}}>{description}</p><br></br>
        </div>
    )
}