
import { Container, UploadButton } from "./styles";
import {FiUpload} from "react-icons/fi"
export default function Input({title, TextArea = false, isUploadButton = false, icon: Icon, onChange,value, children, price,...rest}){

  let displayHidden = ""

  if(title == undefined){
     displayHidden = 'displayHidden'
    
  }
  
return(
    <>
    {
      isUploadButton
      ?


      <Container {...rest}>
         <label>{title}</label>

        <UploadButton className={displayHidden} htmlFor="uploadImage" >

         <div >
          {value ?  '' : <FiUpload/>}
          {value ? value : "Adicionar imagem"}
          <input 
          id="uploadImage"
          type="file"
          {...rest}
          onChange={onChange}
          />
         </div>
        </UploadButton>
        {children}
    </Container>

    : // se nao for  ai faz isso

    <Container {...rest}>

      <label 
      className={displayHidden}
      >
        {title}

      </label>

      <>
       
      </>
      <div
      
      >
        {Icon && <Icon size={20}/>}
        {price && <span>R$</span>}
        {TextArea ? 
        <textarea 
        onChange={onChange} 
        value={value}
        {...rest}
        />
        : 
        <input 
        onChange = {onChange}
        value={value}
        {...rest}
        /> 
        } 
        </div>
    </Container>
    }

    
    </>
)

}