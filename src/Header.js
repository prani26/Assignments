
function Header(){

    let name="Pranita";

    function changeName(){
        name="Thor";
        console.log(name);
    }

    return(
        <div>
        <h1>Header Component</h1>
        <h2>Hello {name} </h2>
        <button onClick={changeName}>click</button>
        </div>
    )
}



export default Header;