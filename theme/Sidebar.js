import React from 'react'
import { Docs, Link } from 'docz'
import Logo from './images/Logo.js';

const getTitle = string => {
    return string
            .replace(/[0-9\.]+\-+/, "")
            .replace(/\.mdx/, "")
            .replace(/\-/g, " ");
}

const Sidebar = ({style}) => (
    <Docs>
        {({ docs }) => {

            let menuItems = []
            let menuItemIds = new Set()
            docs.forEach(doc => {
                const folders = doc.filepath.split("/")
                let prevItem = null
                folders.forEach((name, i) => {
                    const isLink = !folders[i + 1]
                    const currentItem = {
                        name: name,
                        parent: prevItem ? prevItem.name : null,
                        id: (prevItem ? prevItem.id : '') + name,
                        type: isLink ? "link" : "menu",
                        doc: isLink ? doc : null
                    }
                    if (!menuItemIds.has(currentItem.id)) {
                        menuItems.push(currentItem)
                        menuItemIds.add(currentItem.id)
                    }
                    prevItem = currentItem
                })
            })
            return <div className="sidebar" style={{
                display: 'flex',
                flexDirection: 'column',
                fontSize: '1.1em',
                ...style
            }}>
                <div style={{marginBottom: "1em", fontSize: "1.2em", flex: '0 0 auto'}}>
                    <Logo style={{ width: "100px" }} />
                    <div>react-three-fiber</div>
                </div>
                <div style={{flex: '1 1 auto', overflowY: 'auto', overflowX: 'hidden'}}>
                    {menuItems.filter(mi => !mi.parent).sort((a,b) => a.name.localeCompare(b.name)).map(item => {
                        return <MenuItem item={item} level={0} menuItems={menuItems} />
                    })}
                </div>
                <div style={{ marginTop: "1em", flex: '0 0 auto' }} >
                    <a href="https://github.com/drcmda/react-three-fiber" target="_blank">Github -></a>
                </div>
            </div>
        }}
    </Docs>
)

const MenuItem = ({item, level, menuItems}) => (
    item.type === "link" ?
        <SidebarLink name={item.name} doc={item.doc} level={level} />
    :
        <div>
            <FolderTitle name={item.name} level={level} />
            {menuItems.filter(mi => mi.parent === item.name)
                .sort((a, b) => a.name.localeCompare(b.name)).map(mi => (
                    <MenuItem item={mi} level={level + 1} menuItems={menuItems} />
                )
            )}
        </div>
)

const FolderTitle = ({ name, level }) => (
    <div style={{ fontSize: "0.9em", marginLeft: `${0.5 * level}em`, textTransform: 'capitalize'}}>
        {getTitle(name)}
    </div>
)

const SidebarLink = ({name, doc, level}) => (
    <div style={{ fontSize: "0.9em", marginLeft: `${0.5 * level}em`, textTransform: 'capitalize'}}>
        <Link key={doc.id} to={doc.route}>
            {getTitle(name)}
        </Link>
    </div>
)

export default Sidebar