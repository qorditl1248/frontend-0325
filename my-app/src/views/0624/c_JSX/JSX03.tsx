import React from 'react'


export default function JSX03() {
  
  // const url = 'https://cdn.pixabay.com/photo/2013/07/13/01/24/bunny-155674_1280.png'

  const baseUrl = 'https://cdn.pixabay.com/photo/';
  
  // dog 객체로 명시
  const dog = {
    date: '2013/07/13/',
    description: '01/24/',
    imagId: 'bunny-155674_1280',
    name: '토끼',
    theme: {
      backgroundColor: 'gray',
      color: 'pink'
    },
    imageTheme: {
      width: '100px',
      height: '80px'
    }
  }

  return (
    <>
      <div style={dog.theme}>
        <p>{dog.name}'s Picture</p>
        <img 
        src={baseUrl + dog.date + dog.description + dog.imagId + '.png'} 
        alt={dog.name}
        width={dog.imageTheme.width}
        height={dog.imageTheme.height} 
        />
      </div>
    </>

  )
}
