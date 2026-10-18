import React from 'react'

function ContainerComp({children}:{children:React.ReactNode}) {
  return (
    <div className='container px-0 flex justify-center '>
      {children}
    </div>
  )
}

export default ContainerComp
