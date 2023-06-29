/** @jsx preserve */
/** @jsxFrag Fragment */
/** @jsxImportSource solid-js */
import { createSignal } from "solid-js"

export default function () {
	
    const [count, setCount] = createSignal(0)

	return <>
        <button onClick={ () => setCount(x => x - 1) }>-</button>
        <span>{ count() }</span>
        <button onClick={ () => setCount(x => x + 1) }>+</button>
    </>
}
