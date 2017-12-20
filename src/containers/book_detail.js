import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

import { bindActionCreators} from 'redux';


class BookDetail extends Component {
  render(){
    let book = this.props.book

    if (book) {
      return (
        <div>
          <h3>Title: {book.title}</h3>
        </div>
      );
    } else {
      return (
        <div>
          <h1>SELECT A BOOK FROM THE LIST</h1>
        </div>
      );
    }
  }
}

function mapStateToProps(state){
  return {
    book: state.activeBook
  };
};

export default connect(mapStateToProps)(BookDetail);
