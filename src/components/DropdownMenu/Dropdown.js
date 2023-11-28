// import React, { Component } from 'react';

// class Dropdown extends Component {
//   state = {
//     visible: false,
//   };

//   toggle = () => {
//     this.setState(prevState => ({
//       visible: !prevState.visible,
//     }));
//   };

//   show = () => {
//     this.setState({ visible: true });
//   };

//   hide = () => {
//     this.setState({ visible: false });
//   };

//   render() {
//     return (
//       <div className="Dropdown">
//         <button
//           type="button"
//           className="Dropdown__toggle"
//           onClick={this.toggle}
//         >
//       {this.state.visible ? 'Hide' : 'Open'}
//         </button>

//         {/* <button type="button" className="Dropdown__toggle" onClick={this.hide} >
//         Close
//     </button> */}

//         {this.state.visible && <div className="Dropdown__menu">Menu</div>}
//       </div>
//     );
//   }
// }

// export default Dropdown;
