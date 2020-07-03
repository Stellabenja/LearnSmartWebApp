import React, {Component} from 'react';
import '../../styles/App.css';
export default class Footer extends Component {
    render(){
        return (
             <footer className="footer fixed-bottom">
                <div className="container">
                    <span className="text-muted">LearnSmart</span>
                </div>
            </footer>
        )
    }
}