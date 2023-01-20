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
                color === "pink" ? <img src={'icon/person.png'} width="50"/> : 
                color === "blue" ? <img src={'headshots/photo1.jpeg'} width="50"/> : 
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