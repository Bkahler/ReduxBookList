import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators} from 'redux';

class BookList extends Component {
  render(){
    return(
      <ul className='list-group col-sm-4'>
        { this.renderList() }
      </ul>
    );
  };

  renderList(){
    if(this.props.books){
      return this.props.books.map((book)=>{
        return(
          <li
            key={ book.title }
            onClick={ ()=> this.props.selectBook(book) }
            className='list-group-item'>{ book.title }
          </li>
        );
      })
    } else{
      return(
        <li key='1' className='list-group-item'>No Books Yet</li>
      )
    }
  };
};

function mapStateToProps(state){
  //Whatever is returned from this fuction will be present on this.props
  //for this particular component. In this case, we want the books data from the
  //state object, to be mapped to this.props.state .

  return {
    books: state.books
  }
};

//Anything returned from this function will end up as props on the booklist
//container.
function mapDispatchToProps(dispatch) {
  //whenever select book is called the result should be passedd to all the
  //reducers.
  return bindActionCreators({selectBook: selectBook}, dispatch)
};

//connect takes a function and a component and returns a container.
//The container is a component with has the global app state mapped to
//it's props.
//
//Promote booklist form a component to a container, it needs to know about this
//new dispatch method 'selectBook', make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
