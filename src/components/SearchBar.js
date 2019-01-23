import React from 'react';

class SearchBar extends React.Component{

    state={ userInput: ''}



    // onFormSubmit is sending the search term to the App component by calling the handleUserSubmnit function that was passed down through the prop by the App component.
    onFormSubmit = (event)=> {
        event.preventDefault();
        this.props.handleUserSubmit(this.state.userInput)
    }

    render(){
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type='text' onChange={(event) => this.setState({userInput : event.target.value})} value={this.state.userInput}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;



// important concepts

// 3 event Handlers:
// onChange
// onChange={e=> console.log(e.target.value)} is an alternative event handler syntax
// onSubmit
// onClick


// Control component vs Uncontrolled component

// Control means that we are storing our information inside of our component state property as opposed to storing information inside the DOM
// we want to centralize all the information inside of our React component
// we want to make sure that React is driving all of the data that is flowing through our app