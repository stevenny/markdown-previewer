import React, { Component } from 'react';
import './style/markdown-previewer.css';

let marked = require("marked");
marked.setOptions({
    gfm: true,
    breaks: true,
});

const renderer = new marked.Renderer();

renderer.link = function (href, title, text) {
    return `<a target="_blank" href="${href}">${text}` + '</a>';
}

//TODO -  list, blockquote, image, bolded text
const placeholder = "# This is a heading"
    + "\r## This is a subheading"
    + "\r[This](www.google.com) is a link"
    + "\r` here is some inline code` "
    + "\r \`\`\`"
    + "\rand this is a block of multiline code"
    + "\ranother line"
    + "\ranother line "
    + "\r\`\`\`"
    + "\r1. list item 1"
    + "\r2. list item 2"
    + "\r\r>This is a blockquote!"
    + "\rHere is a cat:  \n![a cat picture](https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=150)"
    + "\r**and finally here is some bolded text**"

class MarkdownPreviewer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            markdown: placeholder
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            markdown: event.target.value
        })
    }

    render() {
        return (
            <div class="container">
                <div class="title">
                    <h1 id="title">Markdown Previewer</h1>

                </div>

                <div class="input">
                    <h3>Input: </h3>
                    <div id="editor">
                        <textarea class="editor" value={this.state.markdown} onChange={this.handleChange} />
                    </div>
                </div>
                <div class="output">
                    <h3>Output: </h3>
                    <div id="preview">
                        <div dangerouslySetInnerHTML={{ __html: marked(this.state.markdown) }}></div>
                    </div>


                </div>


            </div>



        )
    }
}

export default MarkdownPreviewer;