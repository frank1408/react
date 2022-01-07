import React, {Component} from 'react';
import axios from 'axios';
import './GetList.css';

class GetList extends React.Component {

constructor( props ){
super( props );

this.state = {
    publicaciones: [],
    errorMsg: ""
} // state

} // constructor

componentDidMount(){ // 1

    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then( response => {
        console.log(response);
        this.setState( { publicaciones: response.data } )
    })
    .catch( error => {
        console.log(error);
    })

} // componentDidMount

componentWillUnmount(){ // 2 
} // componentWillUnmount

render(){

const { publicaciones, errorMsg } = this.state

return (<div className='GetList'>
{
publicaciones.length ? publicaciones.map(post => <div key={post.id} className='item'><h1 className='tituloItem'>{post.title}</h1>{post.body}</div>) : null
}
{
errorMsg ? <div>{errorMsg}</div> : null
}

</div>);} // render

} // class GetList
export default GetList;
