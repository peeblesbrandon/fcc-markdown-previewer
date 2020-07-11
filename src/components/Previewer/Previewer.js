import React from 'react';
import './Previewer.css';
import marked from 'marked';

class Previewer extends React.Component {
    constructor(props) {
        super(props);
    }

    convertMarkdown(text) {
        return;
    }

    render() {
        marked.setOptions({
            gfm: true
        });
        const convertedText = marked(this.props.markdownText);
        return (
            <div>
                <td dangerouslySetInnerHTML={{ __html: convertedText }} />
            </div>
            );
    }
}

export default Previewer;