import React,{ Component } from 'react';
import './PostMethod.css';
import axios from 'axios';

class PostMethod extends React.Component {
constructor( props ){
super(props);
this.state = {
userId: '',
title: '',
body: ''
} // this.state
} // constructor

submitHandler = (e) => {
e.preventDefault();
console.log(this.state);

const URL_TO_POST = 'https://jsonplaceholder.typicode.com/posts';

axios.post(URL_TO_POST, this.state)
    .then( response => { console.log(response) } )
    .catch( error => { console.log(error) } );


} // submitHandler

changeHandler = (e) => {
this.setState( {   [e.target.name]: e.target.value    } );
} // changeHandler


render(){ const { userId, title, body } = this.state ;
return ( <div className='PostMethod'>
<form onSubmit={this.submitHandler}>
<pre>
UserId:<br/>
<input type='text' name='userId' value={ userId } onChange={ this.changeHandler  }  /> <br />
</pre>

<pre>
Title:<br/>
<input type='text' name='title'  value={ title  } onChange={ this.changeHandler  }  /> <br />
</pre>

<pre>
Body:<br/>
<input type='text' name='body'   value={ body   } onChange={ this.changeHandler  }  /> <br />
</pre>

<br /><input type='submit' value='Send'/>
</form>
</div>); // return 
} // render
} // class 

export default PostMethod;
/*
 * https://www.youtube.com/watch?v=x9UEDRbLhJE
 */
