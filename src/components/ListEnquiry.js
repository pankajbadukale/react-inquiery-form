import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ListEnquiry extends React.Component {
    render() {
        
        let allNotes = this.props.list.map((item, index) => (<li key={index}>{item.fname}</li>) )
        return (
            <div>
            <ul>
                {allNotes}            
            </ul>
            <Link role="button" className="btn btn-primary btn-sm" to={'/'} >Continue to homepage</Link>
            </div>
        );
    }
}

export default connect((state) => {
    return { list: state.Enquiryies }
})(ListEnquiry);