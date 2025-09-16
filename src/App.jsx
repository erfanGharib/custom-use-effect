import { useRef, useState } from 'react'

// TODO: get deps array
const useCustomEffect = (fn, deps) => {
	const isFirstRender = useRef(true);
	const prevDeps = useRef(deps);

	if (isFirstRender.current || prevDeps.current !== deps) {
		fn();
		prevDeps.current = deps;
		isFirstRender.current = false;
	}
}

function App() {
	const [count, setCount] = useState(0);

	useCustomEffect(() => {
		console.log("count", count);
	}, count);

	return (
		<button onClick={() => setCount(count+1)}>{count}</button>
  	)
}

export default App
