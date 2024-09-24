import React from 'react'; 
import ReactDOM from 'react-dom';

function Counter(){
  const [count, setCount] = React.useState(0)
  
  return (
      <div>
        <button onClick={() => setCount(count - 1)}>-</button>
        {count}
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    )
}

// class Counter extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       count: 0
//     };
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={() => {
//           this.setState({ count: this.state.count - 1 });
//         }}>-</button>
//         {this.state.count}
//         <button onClick={() => {
//           this.setState({ count: this.state.count + 1 });
//         }}>+</button>
//       </div>
//     );
//   }
// }

const domElement = document.getElementById('root')

ReactDOM.render(<Counter />, domElement)