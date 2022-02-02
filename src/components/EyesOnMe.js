//https://reactjs.org/docs/events.html#detecting-focus-entering-and-leaving

// function EyesOnMe() {
//     return (
//         <button
//             onFocus={(e) => {
//                 console.log("Good!")
//             }}
//             >Eyes on me
//         </button> 

//     )
// }

// export default EyesOnMe;

function EyesOnMe() {
	return (
		<button
			onFocus={(e) => {
				if (e.currentTarget === e.target) {
			  		console.log('Good!');
				} else {
					console.log('focused child', e.target);
				}
				if (!e.currentTarget.contains(e.relatedTarget)) {
					// Not triggered when swapping focus between children
					console.log('focus entered self');
				}
		 	}}
		  	onBlur={(e) => {
				if (e.currentTarget === e.target) {
					console.log('Hey! Eyes on me!');
				} else {
					console.log('unfocused child', e.target);
				}
				if (!e.currentTarget.contains(e.relatedTarget)) {
					// Not triggered when swapping focus between children
					console.log('focus left self');
				}
		 	}}
		>Eyes on me
		</button> 
	)
}


export default EyesOnMe;
