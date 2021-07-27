import {useState} from 'react';

const StockInput = () => {

    const [ticker, setTicker] = useState('')

   
    const handleSubmit = (e) => {
         e.preventDefault();

         console.log(ticker)

         const body = {value : ticker}
    
        fetch(`http://localhost:5000/api/ticker/`, {
             method: 'POST',
             headers: {"Content-Type": "application/json"},
             body: JSON.stringify(body)
         })
    }

    return (
        <form onSubmit = {handleSubmit}>

            <input 
                type='text' 
                onChange={(e) => setTicker(e.target.value)}
                name='tickerInput'
                value={ticker}
            />
            <button>Submit</button>
        </form>
    );
}

export default StockInput;








// import React, {useState} from 'react';
// import axios from 'axios'

// const StockInput = () => {

//     const [inputData, setInputData] = useState({})

//     console.log(inputData)

//     let handleSubmit = (e) => {

//         console.log('submitted!!!!')
//         e.preventDefault()
//         fetch(`http://localhost:5000/api/ticker`, {
//             method: 'POST',
//             headers: {"Content-Type": "application/json"},
//             body: JSON.stringify(inputData)
//         }).then(() => {
//             console.log('new ticker found!!!')
//         })

//         //axios.post('http://localhost:5000/ticker', inputData)


//     }

//     let handleChange = (e) => {
//         setInputData({ [e.target.name]: e.target.value })
//     }

//     return (
//         <form onSubmit = {handleSubmit}>

//             <input 
//             type='text' 
//             onChange={handleChange}
//             name='tickerInput'
//             />
//             <button  >Submit</button>
//         </form>
//     );
// }

// export default StockInput;
