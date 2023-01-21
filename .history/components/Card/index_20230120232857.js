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
            {firstname}
            {lastname}
            {jobtitle}
        </div>
    )
}