import React from "react";
import '../main.css'


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      borderVisible1: false,
      borderVisible2: false,
      borderVisible3: false,
      borderVisible4: false,
      borderVisible5: false,
      borderVisible6: false,
      borderVisible7: false,
      borderVisible8: false,
      borderVisible9: false,
      borderVisible10: false,
      borderVisible11: false,
      borderVisible12: false,
    }
  }
toggleBorder1 = () => {
  this.setState({
    borderVisible1:!this.state.borderVisible1
  })
}
toggleBorder2 = () => {
  this.setState({
    borderVisible2:!this.state.borderVisible2
  })
}
toggleBorder3 = () => {
  this.setState({
    borderVisible3:!this.state.borderVisible3
  })
}
toggleBorder4 = () => {
  this.setState({
    borderVisible4:!this.state.borderVisible4
  })
}
toggleBorder5 = () => {
  this.setState({
    borderVisible5:!this.state.borderVisible5
  })
}
toggleBorder6 = () => {
  this.setState({
    borderVisible6:!this.state.borderVisible6
  })
}
toggleBorder7 = () => {
  this.setState({
    borderVisible7:!this.state.borderVisible7
  })
}
toggleBorder8 = () => {
  this.setState({
    borderVisible8:!this.state.borderVisible8
  })
}
toggleBorder9 = () => {
  this.setState({
    borderVisible9:!this.state.borderVisible9
  })
}
toggleBorder10 = () => {
  this.setState({
    borderVisible10:!this.state.borderVisible10
  })
}
toggleBorder11 = () => {
  this.setState({
    borderVisible11:!this.state.borderVisible11
  })
}
toggleBorder12 = () => {
  this.setState({
    borderVisible12:!this.state.borderVisible12
  })
}

render(){
  let className1 = this.state.borderVisible1 ? "border" : null
  let className2 = this.state.borderVisible2 ? "border" : null
  let className3 = this.state.borderVisible3 ? "border" : null
  let className4 = this.state.borderVisible4 ? "border" : null
  let className5 = this.state.borderVisible5 ? "border" : null
  let className6 = this.state.borderVisible6 ? "border" : null
  let className7 = this.state.borderVisible7 ? "border" : null
  let className8 = this.state.borderVisible8 ? "border" : null
  let className9 = this.state.borderVisible9 ? "border" : null
  let className10 = this.state.borderVisible10 ? "border" : null
  let className11 = this.state.borderVisible11 ? "border" : null
  let className12 = this.state.borderVisible12 ? "border" : null
  return (
    <div className="main">
      <div className="top">
        <img
          className="banner"
          border="0"
          alt="banner"
          src ={process.env.PUBLIC_URL + 'images/desktop/banner.png'}
          height="300px"
        />
        <img
          className="banner2"
          border="0"
          alt="banner"
          src ={process.env.PUBLIC_URL + 'images/mobile/mobilebanner.png'}
          height="300px"
        />
        <h2> Menu of the Week: Sept 22-28 </h2>
      </div>
      <div className="cards">

        <div className={"card div " + className1}>
          <img
            className="card"
            border="0"
            alt="card"
            src ={process.env.PUBLIC_URL + 'images/desktop/food1.png'}
            height="300px"
          />
        <button
          onClick={this.toggleBorder1}
          >add / remove</button>
        </div>
        <div className={"card div " + className2}>
          <img
            className="card"
            border="0"
            alt="card"
            src ={process.env.PUBLIC_URL + 'images/desktop/food2.png'}
            height="300px"
          />
        <button onClick={this.toggleBorder2}>add / remove</button>
        </div>
        <div className={"card div " + className3}>
          <img
            className="card"
            border="0"
            alt="card"
            src ={process.env.PUBLIC_URL + 'images/desktop/food3.png'}
            height="300px"
          />
        <button onClick={this.toggleBorder3}>add / remove</button>
        </div>
        <div className={"card div " + className4}>
          <img
            className="card"
            border="0"
            alt="card"
            src ={process.env.PUBLIC_URL + 'images/desktop/food4.png'}
            height="300px"
          />
        <button onClick={this.toggleBorder4}>add / remove</button>
        </div>
        <div className={"card div " + className5}>
          <img
            className="card"
            border="0"
            alt="card"
            src ={process.env.PUBLIC_URL + 'images/desktop/food5.png'}
            height="300px"
          />
        <button onClick={this.toggleBorder5}>add / remove</button>
        </div>
        <div className={"card div " + className6}>
          <img
            className="card"
            border="0"
            alt="card"
            src ={process.env.PUBLIC_URL + 'images/desktop/food6.png'}
            height="300px"
          />
        <button onClick={this.toggleBorder6}>add / remove</button>
        </div>
        <div className={"card div " + className7}>
          <img
            className="card"
            border="0"
            alt="card"
            src ={process.env.PUBLIC_URL + 'images/desktop/food7.png'}
            height="300px"
          />
        <button onClick={this.toggleBorder7}>add / remove</button>
        </div>
        <div className={"card div " + className8}>
          <img
            className="card"
            border="0"
            alt="card"
            src ={process.env.PUBLIC_URL + 'images/desktop/food8.png'}
            height="300px"
          />
        <button onClick={this.toggleBorder8}>add / remove</button>
        </div>
        <div className={"card div " + className9}>
          <img
            className="card"
            border="0"
            alt="card"
            src ={process.env.PUBLIC_URL + 'images/desktop/food9.png'}
            height="300px"
          />
        <button onClick={this.toggleBorder9}>add / remove</button>
        </div>
        <div className={"card div " + className10}>
          <img
            className="card"
            border="0"
            alt="card"
            src ={process.env.PUBLIC_URL + 'images/desktop/food10.png'}
            height="300px"
          />
        <button onClick={this.toggleBorder10}>add / remove</button>
        </div>
        <div className={"card div " + className11}>
          <img
            className="card"
            border="0"
            alt="card"
            src ={process.env.PUBLIC_URL + 'images/desktop/food11.png'}
            height="300px"
          />
        <button onClick={this.toggleBorder11}>add / remove</button>
        </div>
        <div className={"card div " + className12}>
          <img
            className="card"
            border="0"
            alt="card"
            src ={process.env.PUBLIC_URL + 'images/desktop/food12.png'}
            height="300px"
          />
        <button onClick={this.toggleBorder12}>add / remove</button>
        </div>
      </div>
    </div>
  )
}
}

export default Main;
