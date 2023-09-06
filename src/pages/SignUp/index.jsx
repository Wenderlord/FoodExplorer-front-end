import { useState } from "react";
import {api} from "../../services/api"
import ContainerContent from "../../components/ContainerContent";
import { Container, Content } from "./styles";
import Input from "../../components/Input";
import Logo from "../../components/Logo";
import Button from "../../components/button";
import {useAuth} from '../../hooks/auth'
import { Link, useNavigate } from "react-router-dom";
import{FiUser, FiMail, FiKey}from "react-icons/fi"
import { toast, ToastContainer } from "react-toastify";

export default function SignUp(){

    const {isLoading} = useAuth()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    
    function handleSignUp(){
        event.preventDefault()
        if(!name || !email || !password){
            return toast("Preencha todos os campos !")
        }

        if(password.length<=5){
                
            return toast("A senha deve conter no mínimo 6 caracteres")
        }

        api.post("/users", {name, email, password})
        .then(() => {

            alert("Cadastro realizado com sucesso !")
            navigate("/")
        })
        .catch(error => {
            if(error.response){
                toast(error.response.data.message)
            }else{
                toast("não foi possível cadastrar")
            }
        })

        console.log(name,email, password)
    }
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
              <h1>Crie Sua Conta</h1>
                 
                 <form>
                 <Input 
                 title="Seu nome"
                 icon={FiUser}
                 placeholder="Exemplo: Maria da Silva"
                 
                 onChange = {e => setName(e.target.value)}
                 />
                 <Input 
                 title="Email"
                 type="email"
                 icon={FiMail}
                 placeholder="Exemplo: exemplo@exemplo.com.br"
                 onChange = {e => setEmail(e.target.value)}
                 />
                 <Input 
                 title="Senha"
                 icon={FiKey}
                 type="password"
                 placeholder="No mínimo 6 caracteres"
                 onChange = {e => setPassword(e.target.value)}
                 />
                 <Button title="Cadastrar" 
                 btn="primary"
                 disabled={isLoading}
                 onClick = {handleSignUp}
                 />
                 <Link to="/">
                 <Button title="Já tenho conta" btn="transparent"/>
                 </Link>
                 </form>
                </div>
                
                </Content>
                  <ToastContainer
                    position="top-center"
                    autoClose={1500}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                    />
            </ContainerContent>
        </Container>
    )
}