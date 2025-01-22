import React, { useState } from 'react'

function Wrapper() {

    const [isOpen, setIsOpen] = useState(false)
    const arr = [
        {
            name: 'John Doe',
            age: 25
        },
        {
            name: 'Jane Doe',
            age: 26
        },
        {
            name: 'John Smith',
            age: 27
        }
    ]

  return (
    <div>Wrapper</div>
  )
}

export default Wrapper