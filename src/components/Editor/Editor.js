import React from 'react';
import './Editor.css';

class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onMarkdownChange(event.target.value);
    }

    render() {
        const markdownText = this.props.markdownText;
        return (
            <div className="container-fluid p-0">
                <textarea id="editor" onChange={this.handleChange} value={markdownText} rows="10" className="form-control h-80" />
            </div>
        );
    }
}

export default Editor;