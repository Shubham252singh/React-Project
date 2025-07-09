import User from "./User";
const About =()=>{
 return(<div className = "m-12 p-2">
    <h1 className="m-2 text-3xl">About</h1>
    <h2 className="m-2">This is food deleivery app</h2>
    <p className="m-2">Being among the first few entrants, Localdel has successfully pioneered the hyperlocal commerce industry in India, launching Food Delivery in 2021 and Quick Commerce in 2025. Due to the pioneering status of Localdel, it is well-recognised as a leader in innovation in hyperlocal commerce and as a brand synonymous with the categories it is present in.</p>
    <h3 className="m-2">User Information:</h3>
    <User/>
 </div>);
}
export default About