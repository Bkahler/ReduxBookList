// A Reducer is a simple function that is responsible for returning a portion of
// the application's state. For example: this reducer is simply a function that
// returns an array of 'book' objects. When other files in this application
// require this file, it will automatically load the list of books.


export default function(){
  return [
   {title: 'Javascript: The Good Parts'},
   {title: 'Metaprogramming With Ruby'},
   {title: 'Python For Dummies'},
   {title: 'Headfirst Java'}
  ]
}
