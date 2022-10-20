import React, { useState } from 'react'
import { Container, Image } from 'react-bootstrap'

const Images = ({name,img,options}) => {
  const [statusClick, setStatusClick] = useState(true);
console.log(name);
  // const clickCol = () => setStatusClick(!statusClick);

  console.log(statusClick);
  return (
    <Container  className='cardDiv' onClick={() => setStatusClick(!statusClick)}>
      {
        statusClick && (
          <Container className='langImage'>
            <Image className="img-logo" src={img} width="70%"></Image>
            <h4 className='text-center'>{name}</h4>
          </Container>
        )

      }

      {
        !statusClick && (
          <ol className=" d-flex flex-column justify-content-center lang" >
            {options.map((item) => {
              return <li className="h5 text-start"> {item} </li>
            })}
          </ol>
        )
      }
      
    </Container>
  )
}

export default Images