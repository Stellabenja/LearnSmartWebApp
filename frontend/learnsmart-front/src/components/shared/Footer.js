import React, {Component} from 'react';
import '../../styles/App.css';
export default class Footer extends Component {
    render(){
        return (
             <footer class="footer fixed-bottom">
                <div class="container">
                    <span class="text-muted">Place sticky footer content here.</span>
                </div>
            </footer>
        )
    }
}