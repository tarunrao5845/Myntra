// import React, { Component } from 'react'

//  class Tut extends Component {
//   constructor(){
//     super();
//     this.state = {
//         firstname : "tarun",
//         lastname : "rao"
//     }
//   }
//     render() {
//     return (
//       <>
//         hello {this.state.firstname} {this.state.lastname}

//       </>
//     )
//   }
// }
// export default Tut









// import React, { Component } from 'react'

// export default class tut extends Component {
//  constructor(){
//     super();
//     this.state = {
//         seconds : 10 ,
//     }
//  }
//  inc(){
//     this.setState({
//        seconds : this.state.seconds+1
//     })}
//     render() {
//     return (
//       <div>
//         {this.state.seconds} <hr />
//     <button onClick={()=>this.inc()}>Click to change</button> 
//       </div>
//     )
//   }
// }




import React, { Component } from 'react'

 class Tut extends Component {
  constructor(props){
    super(props);
    this.state = {
        firstname : "tarun rao"
    }
  }

    render() {
    return (
      <Content a = {this.state.firstname } />
    )
  }
}
 class Content extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.a}</h1>
      </div>
    )
  }
}

export default Tut