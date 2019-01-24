import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar'
import ImageList from './ImageList'


class App extends React.Component{

    state = {
        images: []
    }
    // we pass this callback function down to the child component thorugh the props to obtain the search term.
    
 onSearchSubmit = async (searchTerm)=>{
       const response = await unsplash.get('/search/photos',{
            params:{query: searchTerm},
        });
        this.setState({images: response.data.results})
        console.log(response.data.results)
    }

componentDidMount(){
    this.onSearchSubmit('waterfall')
    }

    render(){
        return (
            <div className="ui container" style={{marginTop:'10px'}}>
                <SearchBar handleUserSubmit={this.onSearchSubmit}/>
                Found: {this.state.images.length} images
                <ImageList images={this.state.images}/>
            </div>
        )
    }
}

export default App;

// add comment