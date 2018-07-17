import React from 'react';
import PropTypes from 'prop-types'

export default class Ranking extends React.Component{
    componentWillMount(){
        this.props.onMount(this.props.categoryId)
    }

    componentWillReceiveProps(nextProps){
        this.props.onUpdate(nextProps.categoryId)
    }

    render(){
        return (
            <div>
                <h2>Ranking</h2>
                <p>カテゴリーID:{this.props.categoryId}</p>
            </div>
        )
    }
}

Ranking.propTypes = {
    categoryId: PropTypes.string
}

Ranking.defaultProps = {
    categoryId: '1'
}