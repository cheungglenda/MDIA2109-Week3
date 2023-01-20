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
        <div style={{backgroundColor: color, fontSize: font, fontFamily: "Arial, Helvetica, sans-serif"}}>
            {
                firstname === "Jane" ? <img src={'headshots/photo3.jpeg'} width="300"/> : 
                firstname === "John" ? <img src={'headshots/photo1.jpeg'} width="300"/> : 
                firstname === "Wendy" ? <img src={'headshots/photo2.jpeg'} width="300"/> : 
                <img src={image} width="300"/>
            }
            
            <h1 style={{fontFamily:"'Courier New', Courier, monospace"}}>{firstname}</h1>
            <h1 style={{fontFamily:"'Courier New', Courier, monospace"}}>{lastname}</h1>
            <h2 style={{fontFamily:"'Courier New', Courier, monospace"}}>{jobtitle}</h2>
            <h3>{department}</h3>
            <h4>Years at D3 Company:</h4>{yearsworked}<br></br><br></br>
            {description}
        </div>
    )
}