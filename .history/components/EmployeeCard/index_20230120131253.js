export default function EmployeeCard({
    firstname = "none",
    lastname = "none",
    department = "none",
    jobtitle = "none",
    yearsworked = 0,
    description = "none",
    contact = "none",
    color = "pink",
    font = "O",
    image = "icon/personTwo.png"
}) {
    return (
        <div style={{backgroundColor: color, fontSize: 16, lineHeight:1.5}}>
            {
                firstname === "Jane" ? <img style={{objectFit: "cover"}} src={'headshots/photo3.jpeg'} width="300" height="300"/> : 
                firstname === "John" ? <img style={{objectFit: "cover"}} src={'headshots/photo1.jpeg'} width="300" height="300"/> : 
                firstname === "Wendy" ? <img style={{objectFit: "cover"}} src={'headshots/photo2.jpeg'} width="300" height="300"/> : 
                <img src={image} width="300"/>
            }
            
            <h1 style={{textTransform: "lowercase", fontSize: 20}}>{firstname} {lastname}</h1>
            <h1 style={{textTransform: "lowercase", fontSize: 20}}></h1>
            <h2 style={{fontFamily:"'Courier New', Courier, monospace", textTransform: "uppercase", fontSize: 18}}>{jobtitle}</h2>
            <h3 style={{fontFamily:"'Courier New', Courier, monospace", textTransform: "uppercase", fontSize: 16, fontweight:200}}>{department}</h3>
            <h3 style={{fontFamily:"'Courier New', Courier, monospace", textTransform: "lowercase", fontSize: 16, fontweight:500}}>{contact}</h3>
            <h4 style={{textTransform:"lowercase", fontSize:16, fontWeight:100}}>{yearsworked} years producing great media</h4><br></br>
            <p style={{fontFamily: "Arial, Helvetica, sans-serif", marginLeft:"10px"}}>{description}</p><br></br>
        </div>
    )
}