import './styles/base'

import React from 'react'
import { theme, DocPreview } from 'docz'
import Sidebar from './Sidebar'

const Theme = () => (
    <div style={{
        display: "flex",
        minHeight: "100vh",
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
            padding: '1em'
        }}>
            <DocPreview />
        </div>
    </div>
)

export default theme()(Theme)