import './styles/base'

import React from 'react'
import { theme, DocPreview } from 'docz'
import Sidebar from './Sidebar'
import * as components from './components/ui/'
import githubMark from './images/github-mark.png';
import githubText from './images/github-text.png';


const Theme = () => (
    <div style={{
        display: "flex",
        height: "100%",
    }}>
        <Sidebar style={{
            flex: "0 0 auto",
            maxWidth: "15em",
            width: "30%",
            background: "#520B3E",
            padding: '1em 1em 0 1em',
        }} />
        <div style={{
            flex: "1 1 auto",
            padding: '2em',
            overflow: 'auto',
            textAlign: 'center'
        }}>
            <div style={{
                maxWidth: '52em',
                width: '100%',
                display: 'inline-block',
                textAlign: 'left',
                position: "relative"
            }} >
                <div style={{height: "1.8em", position: "absolute", top: 0, right: 0}}>
                    <a href="https://github.com/drcmda/react-three-fiber" target="_blank">
                        <img src={githubMark} style={{ height: '100%' }} />
                        <img src={githubText} style={{ height: '100%' }} />
                    </a>
                </div>
                <DocPreview
                    components={{
                        pre: components.Pre,
                        inlineCode: components.Code,
                        blockquote: components.Blockquote,
                    }}
                />
            </div>
        </div>
    </div>
)

export default theme()(Theme)