import React     from 'react'     ;
import './Reloj.css';

class Reloj extends React.Component {

constructor( props ){
    super( props );
    this.state = { hora: new Date() };
} // constructor

render(){
    return <div className="miReloj">{ this.state.hora.toLocaleTimeString() }</div> ;
} // render


componentDidMount(){ // despues de render
    this.timerID = setInterval(
        () => this.tick(), 1000
    ); // setInterval
} // componentDidMount


componentWillUnmount(){ // destructor
    clearInterval(this.timerID);
} // componentWillUnmount


tick(){
    this.setState(
        {
            hora: new Date()
        }
    );
} // tick


} // class Reloj


export default Reloj;


