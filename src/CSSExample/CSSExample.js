export default function CSSExample()
{
    var style2 = {color:'red', fontSize:"25px"};
    
    // <>
    // </> - Empty Tag - React Fragments
    return <>
            <h1 style={{color:'blue', fontSize:'30px'}}>Amazon.com</h1>

            <h1 style={style2}>FlipKart.com</h1>

            <h1 className="MyStyle3" >Facebook.com</h1>
            
            <h1 id="MyTag4" >Myntra.com</h1>

            <h2>Nyka.com</h2>
    </>
}