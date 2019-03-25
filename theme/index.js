import './styles/base'

import React from 'react'
import { theme, DocPreview } from 'docz'
import Sidebar from './Sidebar'
import * as components from './components/ui/'

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
            padding: '1em'
        }} />
        <div style={{
            flex: "1 1 auto",
            padding: '2em',
            overflow: 'auto',
            textAlign: 'center'
        }}>
            <div style={{
                maxWidth: '58em',
                width: '100%',
                display: 'inline-block',
                textAlign: 'left',
            }} >
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