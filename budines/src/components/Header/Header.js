import Logo from '../Logo/Logo';
import CartWidget from './CartWidget';
function Header (){
    return (
        <header className="App-header">
        <Logo/>
        <CartWidget/>
        
        <img src="/assets/Logo sheilaBudines.png" className="App-logo" alt="logo" />
        </header>
    );
} 


export default Header;