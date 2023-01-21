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
        <div style={{backgroundColor: color, fontSize: font}}>
            {
                firstname === "Yi" ? <img src={'icon/person.png'} width="300"/> : 
                firstname === "Jennifer" ? <img src={'icon/personThree.png'} width="300"/> : 
                <img src={image} width="50"/>
            }

            {firstname} 
            {lastname}
        </div>
    )
}