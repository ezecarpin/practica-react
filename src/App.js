import React, {Fragment, useState} from 'react'

const Listas = () => {

  const [num, setNum] = useState([1,2,3,4,5])

  return (
      <Fragment>
          <ul>
            {
              num.map((item, index) => 
                  <li key={index}>
                      {item} - {index} 
                  </li>
                  )
            }
          </ul>
      </Fragment>
    )
}
export default Listas