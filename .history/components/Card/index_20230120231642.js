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
            <img src={image} width="250"></img>
            <h2><i>{firstname}</i></h2>
            <h4>Department:</h4>{department}
            <h4>About {firstname}:</h4>
        </div>
    )
}