import React, { useState } from 'react'



const Contador = () => {

const incrementar = () => setNum (num + 1)
	
	const [num, setNum] = useState(0)

	return (
		<div>
			<p>presionaste {num} veces </p>
			<button onClick={incrementar} > 
				Presionar 
			</button>	
		</div>
		)
}

export default Contador