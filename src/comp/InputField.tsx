import React from 'react';
import './styles.css'


const inputField = () => {
    return(
        <form className='inputForm' action="">
            <input type="text" placeholder='Enter a task' className='inputTextBox' />
            <button className='inputSubmit' type='submit' >Go</button>

        </form>
    )
};


export default inputField