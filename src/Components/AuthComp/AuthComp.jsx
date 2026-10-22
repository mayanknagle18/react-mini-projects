import { useState } from 'react';
import LoginComp from './LoginComp'; 
import RegisterComp from './RegisterComp'; 
const AuthComp = () => { 
    const [isLogin, setIsLogin] = useState(true);
    const handleChange = () => { 
        setIsLogin(prev => !prev); 
    };
    return (
        <div className="bw_auth_sec">
            <div className="bw_container">
                <h1>Auth Comp</h1> 
                {isLogin ? (<LoginComp onSwitch={handleChange}/>) : (<RegisterComp onSwitch={handleChange}/>) }
            </div>
        </div>
    )
}

export default AuthComp;