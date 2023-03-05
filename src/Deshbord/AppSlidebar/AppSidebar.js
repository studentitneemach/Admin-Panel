import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {  CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'
import { AppSidebarNav } from './AppSidebarNav'
import navigation from './_nav'

const AppSidebar = () => {
    const dispatch = useDispatch()
    const unfoldable = useSelector((state) => state.sidebarUnfoldable)

    const sidebarShow = useSelector((state) => state.changeState.sidebarShow)

    return (
        <CSidebar
            position="fixed"
            unfoldable={unfoldable}
            visible={sidebarShow}
            onVisibleChange={(visible) => {
                dispatch({ type: 'set', sidebarShow: visible })
            }}
        >
        
            <CSidebarBrand className="d-none d-md-flex" >
              
            </CSidebarBrand>

            <CSidebarToggler
              
                onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
                style={{ backgroundColor: "rgb(156,196,196)" }}
            ></CSidebarToggler>
        
            <CSidebarNav>
                
                    <AppSidebarNav items={navigation} />
             
            </CSidebarNav>
   
          
            
        </CSidebar>
    )
}

export default AppSidebar
