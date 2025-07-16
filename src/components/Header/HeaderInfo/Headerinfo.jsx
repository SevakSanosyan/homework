import { Button } from '../Button/Button'
import './Headerinfo.css'

export function Headerinfo() {
    return(

        <div className='container'>
            <div className='Header-Info'>

                    
                    <h1>Սովորի՛ր <span style={{ fontWeight: 500 }}>ծրագրավորում</span>
                    <br/>
                    Դարձի՛ր <span style={{ fontWeight: 500 }}>պահանջված մասնագետ</span></h1>
                    
                    <p className='Header-Info-text'>    
            Որակյալ ուսուցում, անվճար պրակտիկա, երաշխավորված աշխատանք։
            </p>

            <div className='header-action'>
        <Button content = 'Սկսել ուսումը' />
        <Button content ="Տեսանյութ" className ="second-button" />
        

        </div>

            </div>

        <img src='https://smartcode.am/public/image/header.svg' alt='S-C' className='image'/>
            


        </div>
    )
}