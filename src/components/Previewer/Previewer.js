import React from 'react';
import './Previewer.css';
import marked from 'marked';

class Previewer extends React.Component {
    // remove constructor bc not needed
    // constructor(props) {
    //     super(props);
    // }

    render() {
        marked.setOptions({
            gfm: true
        });
        const convertedText = marked(this.props.markdownText);
        console.log(convertedText);
        return (
            <div>
                <td id="preview" dangerouslySetInnerHTML={{ __html: convertedText }}></td>
            </div>
            );
    }
}

export default Previewer;