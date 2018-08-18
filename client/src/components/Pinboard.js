import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getAdventure} from '../store/adventure'

class PinBoard extends Component {
    render() {
        const notes = this.props
        return (
            <div id='pinBoard'>
                {notes.map(note => { 
                    return (
                        <div id='note' key={note.id}>
                            {note.title}
                            {note.contents}
                            {note && note.images && note.images.map(image => { 
                                return (
                                    <img src={image.uri} alt='note-img' width='100px' height='100px' />
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapState = state => {
    return {
        adventure: state.adventure,
        notes: state.adventure.notes
    }
}
const mapDispatch = dispatch => {
    return {
        getThisAdventure: (id) => dispatch(getAdventure(id))
    }
}

export default connect(mapState, mapDispatch)(PinBoard)

//to render the PinBoard component, pass it an array of notes in its props
