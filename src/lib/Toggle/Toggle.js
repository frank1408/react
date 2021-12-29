import React from 'react';
import './Toggle.css';

class Toggle extends React.Component {
constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // Este enlace es necesario para hacer que `this` funcione en el callback
    this.handleClick = this.handleClick.bind(this);
} // constructor

handleClick() {
this.setState(prevState => (
        {
            isToggleOn: !prevState.isToggleOn
        }
    )
);
} // handleClick

render() {
return (
<button onClick={ this.handleClick }>
{ this.state.isToggleOn ? 'ON' : 'OFF' }
</button>
);
} // render

} // Toggle

export default Toggle;



/*

<button onClick={ this.handleClick }>

OTRA MANERA DE HACERLO ES...
<button onClick={ () => this.handleClick }>







handleClick() {
    ...
} // handleClick


OTRA MANERA DE HACERLO ES...

handleClick = () => {
    ...
} // handleClick


 */
