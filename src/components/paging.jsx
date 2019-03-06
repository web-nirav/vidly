import React, { Component } from 'react';

class Paging extends Component {
    state = {  }
    render() { 
        let paging = '';
        for(var i = 1; i <= this.props.pages; i++){
            paging += <li className="page-item"><a className="page-link" href="/">{i}</a></li>
        }
        return ( 
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                   {paging}
                </ul>
            </nav>
         );
    }
}
 
export default Paging;