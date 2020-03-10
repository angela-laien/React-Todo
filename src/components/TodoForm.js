import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            item: ''
        };
    }

    // update state with each keystroke
    handleChanges = e => {
        this.setState({
            item: e.target.value
        });
    };

    // class property to submit form
    handleSubmit = e => {
        e.preventDefault();
        this.props.addItem(this.state.item)
        this.setState({
            item: ''
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="item"
                    value={this.state.item}
                    onChange={this.handleChanges}
                    placeholder="Enter task..."
                />
                <button className='add-btn' type='submit'>Add</button>
            </form>
        );
    }
}

export default TodoForm;