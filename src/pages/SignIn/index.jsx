import { useState } from "react";
import ContainerContent from "../../components/ContainerContent";
import { Container, Content } from "./styles";
import Input from "../../components/Input";
import Logo from "../../components/Logo";
import Button from "../../components/button";
import { Link } from "react-router-dom";
import {FiMail, FiKey} from 'react-icons/fi'
import {useAuth} from '../../hooks/auth'
import { toast, ToastContainer } from "react-toastify";
export default function SignIn(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {signIn, isLoading} = useAuth()

    function handleSignIn(){

        
        event.preventDefault()
       
            
        if(!email && !password){
            toast.error("Informe email e senha")
        }
        else{
            signIn({email, password})
        }
       
    }
    console.log(password)
    return(

        <Container>
               
            <ContainerContent>
                
                <Content>
                <div>
                    <Logo
                    isAnimated={true}
                    />
                </div>
              
                <div>
              <h1>Faça Login</h1>
                 
                 <form>
                 <Input 
                 title="Email"
                 type="email"
                 icon={FiMail}
                 placeholder="Exemplo: exemplo@exemplo.com.br"
                 onChange ={e => setEmail(e.target.value)}
                 />

                 <Input 
                 title="Senha" 
                 icon={FiKey}
                 type="password"
                 placeholder="sua senha"
                 onChange ={e => setPassword(e.target.value)}
                 />
                 <Button 
                 title="Entrar" 
                 btn="primary"
                 onClick = {handleSignIn}
                 disabled={isLoading}
                 />
                <Link to="/signUp"> 
                <Button title="Criar uma conta" btn="transparent" /></Link>
                 </form>
                </div>
                
                </Content>
            </ContainerContent>
            <ToastContainer/>
        </Container>
    )
}