import React from 'react';

export default class ThemedDecoration extends React.Component {
    render () {
        const className = this.props.theme
        const children = React.Children.map(this.props.children, child => {
            return (
                    React.cloneElement(child, {
                    className: className
                })
            )
        })
        return <div>{children}</div>
    }
} 