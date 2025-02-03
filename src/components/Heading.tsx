import { ReactNode, useState } from "react";
import '../Heading.css'
import Button from './Button'

interface HeadingProps {
    imgUrl: string;
    counter: number;
    children: ReactNode;
}
function Heading({imgUrl, counter, children}: HeadingProps) {

  return (
    <nav>
      <div>
        <img src={imgUrl} alt="" />
        {/* <Button title='Register' bgColor='skyblue'></Button>
        <Button title='Login' bgColor='pink'></Button> */}

        {/* show state */}
        <h1>{children}</h1>
        {/* <button onClick={IncreaseCount}>Click to add</button> */}
        {/* <button onClick={DecreaseCount}>Click to minus</button> */}

        {/* <h1>{username}</h1> */}
        {/* <input type="text" onChange={(e) => setUsername(e.target.value)} /> */}
      </div>
    </nav>
  )
}

export default Heading