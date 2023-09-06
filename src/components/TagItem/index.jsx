/* eslint-disable react/prop-types */
import { FiPlus, FiX} from 'react-icons/fi'
import { Container } from './styles'



export function TagItem({isNew, value, onClick, animation, ...rest}){

       
 
    return(
        <Container isNew={isNew} className={animation}>
    
        <input
        type='text'
        id='AddTag'
        readOnly={!isNew}
        placeholder={isNew && "Adicionar"}
        {...rest}
        value={value}
        />

        {isNew ? "" : value}
        
        <button
            type='button'
            className={isNew ? 'button-add' : 'button-delete'}
            onClick={onClick}
        >
            {isNew ? <FiPlus/> : <FiX/> }
        </button>
        
        </Container>
    )
}