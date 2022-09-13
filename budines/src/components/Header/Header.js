import Logo from '../Logo/Logo';
import CartWidget from './CartWidget';
function Header(){
    let title = "Budines Sheila";
    return (
        <header className="App-header">
        <Logo/>
        <CartWidget/>
        <h1>{title}</h1>
        <img src="/assets/Logo sheilaBudines.png" className="App-logo" alt="logo" />
        </header>
    );
} 


export default Header;