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
        <div style={{ backgroundColor: colour, fontSize: font, width: 400, padding: padding, borderRadius: 10, boxShadow: "5px 10px var(--grey)" }}>
            <img src={image} width="250"></img>
            <h2><i>{firstName}</i></h2>
            <h4>Degree:</h4>{degree}
            <h4>Department:</h4>{department}
            <h4>GPA:</h4>{gpa}
            <h4>Graduating Year:</h4>{graduted}
            <h4>About {firstName}:</h4>{bio}
        </div>
    )
}