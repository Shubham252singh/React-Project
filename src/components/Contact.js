const Contact=()=>{
    return (<div className="my-12 mx-8">
        <h1 className="p-0.5 text-2xl">If you face any problem Contact Us on 8211xxxxxxx or email us on dghsh@dhbs.com</h1>
       <div className ="flex mx-2  my-4 gap-2 items-center">
        <label htmlFor="username">UserName :</label>
        <input id="username" placeholder ="name" className ="rounded-lg border-2 p-2"></input>
        <label htmlFor="feedback">Feedback :</label>
        <input id="feedback" placeholder ="Feedback"className ="rounded-lg border-2 p-2"></input>
        <button className = "rounded-lg border-2 border-white bg-green-400 text-white p-2">Submit</button>
       </div>
    </div>)
}

export default Contact;