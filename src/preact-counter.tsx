/** @jsx react-jsx */
/** @jsxFrag Fragment */
/** @jsxImportSource preact */
import { useState } from "preact/hooks"

export default function () {
	
    const [count, setCount] = useState(0)

	return <>
        <button onClick={ () => setCount(x => x - 1) }>-</button>
        <span>{ count }</span>
        <button onClick={ () => setCount(x => x + 1) }>+</button>
    </>
}
