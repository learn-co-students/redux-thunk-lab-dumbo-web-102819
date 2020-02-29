// write your CatList component here
import React from 'react'

class CatList extends React.Component {

    mapAllCats = () => {
        if(this.props.catPics.length > 0) {
            return this.props.catPics.map(cat => {
                return <img src={cat.url}/>
            })
        }
    }

    render() {
        return (
            <div>
                {this.mapAllCats()}
            </div>
        )
    }
}

export default CatList