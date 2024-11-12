import React from 'react'

interface HeaderProps {
    titleLabel: string
}


const FormHeader = ({titleLabel}: HeaderProps) => {
  return (
    <div className='w-full flex flex-col gap-y-1 items-center justify-center'>
        <h1
        className='text-xl font-semibold'
        >
            ClientTracker
        </h1>
        <p className='text-muted-foreground text-sm'>
            {titleLabel}
        </p>
    </div>
  )
}

export default FormHeader