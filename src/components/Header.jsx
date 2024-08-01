
const Header = () => {
    let customCSS="code";
    const isLoggedIn=true;
    const greeting=isLoggedIn ?<p>Welcome Back!</p>:<p>Please Login.</p>
    const items=["Item 1","Item 2","Item 3"]
  return (
    <>
      <div>
        <h1 className="bannertext">Tutor Manoj</h1>
        <p className="slogan">Learn More Be smart</p>
        <p className={customCSS}>25+45={25+45}</p>
        {greeting}
        <ul>
            {items.map((item,index)=>(<li key={index}>{item}</li>))}
        </ul>
      </div>
    </>
  )
}

export default Header
