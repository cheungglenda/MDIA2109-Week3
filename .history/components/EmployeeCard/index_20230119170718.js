export default function EmployeeCard({
    firstname = "none",
    lastName = "none",
    department = "none",
    jobTitle = "none",
    yearsWorked = 0,
    color = "pink",
    font = "O",
    image = "icon/personTwo.png"
}) {
    return (
        <div style={{backgroundColor: color, fontSize: font}}>
            {
                color === "pink" ? <img src={'icon/person.png'} width="50"/> : 
                color === "blue" ? <img src={'icon/personThree.png'} width="50"/> : 
                <img src={image} width="50"/>
            }
            {department}
            {firstname}
        </div>
    )
}