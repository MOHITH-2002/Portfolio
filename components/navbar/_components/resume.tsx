import { Button } from '@/components/ui/button'
import React from 'react'

const Resume = () => {
  return (
    <>
    <div className="flex md:hidden">
        <a href="https://firebasestorage.googleapis.com/v0/b/dev-chat-78c3f.appspot.com/o/Mohith%20B%20A%20Resume.pdf?alt=media&token=6f57643d-30ac-42db-ae2f-47900cad9645" download="Mohith B A resume.pdf" >

      <Button className="flex w-56 text-sm "
        >Resume</Button>
        </a>
    </div>
    <div className="hidden md:flex">
        <a href="https://firebasestorage.googleapis.com/v0/b/dev-chat-78c3f.appspot.com/o/Mohith%20B%20A%20Resume.pdf?alt=media&token=6f57643d-30ac-42db-ae2f-47900cad9645" download="Mohith B A resume.pdf" >

      <Button className="flex text-sm "
        >Resume</Button>
        </a>
    </div>
        </>
  )
}

export default Resume
