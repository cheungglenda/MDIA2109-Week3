export default function EmployeeCard({
    firstname = "none",
    lastname = "none",
    department = "none",
    jobtitle = "none",
    yearsworked = 0,
    description = "none",
    color = "pink",
    font = "O",
    image = "icon/personTwo.png"
}) {
    return (
        <div style={{backgroundColor: color, fontSize: font}}>
            {
                firstname === "Jane" ? <img src={'headshots/photo3.jpeg'} width="300"/> : 
                firstname === "John" ? <img src={'headshots/photo1.jpeg'} width="300"/> : 
                firstname === "Wendy" ? <img src={'headshots/photo2.jpeg'} width="300"/> : 
                <img src={image} width="50"/>
            }
            {firstname}
            {lastname}
            {jobtitle}
            {department}
            {yearsworked}
            {description}
        </div>
    )
}