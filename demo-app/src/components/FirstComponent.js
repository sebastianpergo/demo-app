import React from 'react'

export const FirstComponent = () => {
    // Create a variable called name and assign it the value of your name
    let name = "Sebastian"
    let lastName = "Perdomo"
    let age = 40

    let cursos = ["React", "Angular", "Vue"]
  
    return (
    <div>About me
        <h1>My Data</h1>
        <p>My name is: {name}</p>
        <p>My last name is: {lastName}</p>
        <p>My age is: {age}</p>
        <h2>My courses</h2>
        <ul>
            {cursos.map((curso, index) => {
                return <li key={index}>{curso}</li>
            })}
        </ul>


    </div>
  )
}

