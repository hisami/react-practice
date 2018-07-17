import React from 'react'
import {Route, Link} from 'react-router-dom';
import Ranking from './containers/Ranking'

export default class App extends React.Component {
    render() {
        return (
            <div className="App">
                <ul>
                    <li><Link to="/all">すべてのカテゴリ</Link></li>
                    <li><Link to="/category/2502">パソコン、周辺機器</Link></li>
                    <li><Link to="/category/10002">本、雑誌、コミック</Link></li>
                </ul>

                <Route path="/all" component={Ranking}/>
                <Route
                    path="/category/:id"
                    render={
                        ({match}) => <Ranking categoryId={match.params.id}/>
                    }
                />
            </div>
        )
    }
}