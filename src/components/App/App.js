import React from 'react';
import './App.css';
import { Navbar, Accordion, Card, Button } from 'react-bootstrap';
import Editor from '../Editor/Editor';
import Previewer from '../Previewer/Previewer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: 
`# Welcome to the Markdown Previewer\r
#### Created by Brandon Peebles\r
[Here's a link to this app's GitHub repo](https://github.com/peeblesbrandon/fcc-markdown-previewer)\r
## Enter your GitHub flavored markdown here.\r
## Then, look at the Previewer bar below to see it converted into HTML and rendered.\n
\`Here's some inline code\`\r
\`\`\`
Here's a code block.\r
It goes on multiple lines\n
\`\`\`
* We've got list items\r
* Just like this\n
> And blockquotes\r
> Like this\n
**Last, but not least... we have this floofy dog**\n
![cute dog](https://img.pixers.pics/pho_wat(s3:700/FO/28/69/47/29/700_FO28694729_8534ba4d363506946e6324a7bf2a0111.jpg,639,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,419,650,jpg)/wall-murals-coton-de-tulear-puppy-4-months-old-standing.jpg.jpg)`
    }
    this.handleMarkdownChange = this.handleMarkdownChange.bind(this);
  }

  handleMarkdownChange(markdownText) {
    return this.setState({
      input: markdownText
    });
  }

  render() {
    console.log("This is the process.env", process.env.PUBLIC_URL)
    return (
        <div id="app_body" className="container-fluid">
          <Navbar fixed="sticky" bg="dark" variant="dark">
            <Navbar.Brand className="text-break vw-100">
              <h4 className="d-block">Markdown Previewer</h4>
              <p className="d-block text-light text-muted text-break">To get started converting markdown text, tap below to expand the Editor or Previewer</p>
            </Navbar.Brand>
          </Navbar>
          <Accordion defaultActiveKey="1">
            <Card>
              <Card.Header className="p-0">
                <Accordion.Toggle as={Button} variant="light" eventKey="0">
                  <strong>Editor</strong>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="p-0 m-0">
                  <Editor markdownText={this.state.input} onMarkdownChange={this.handleMarkdownChange}/>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          <Accordion defaultActiveKey="1">
            <Card>
              <Card.Header className="p-0 m-0">
                <Accordion.Toggle as={Button} variant="light" eventKey="0">
                  <strong>Previewer</strong>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
              <Card.Body className="p-0 m-0">
                  <Previewer markdownText={this.state.input} />
              </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          <em id="signature">Created by Brandon Peebles - 2020</em>
        </div>
    );
  }
}

export default App;
