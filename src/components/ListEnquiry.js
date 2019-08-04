import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ListEnquiry extends React.Component {
    render() {
        let list = this.props.list;
        list.sort(function (a, b) {
            var textA = a.fname.toUpperCase();
            var textB = b.fname.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
        let allNotes = list.map((item, index) => (<li key={index}>{item.fname} from {item.country} asked "{item.message}"</li>))
        return (
            <div>
                <h2>List is order by Full name</h2>
                <ol>
                    {allNotes}
                </ol>
                <Link role="button" className="btn btn-primary btn-sm" to={'/'} >Continue to homepage</Link>
            </div>
        );
    }
}

export default connect((state) => {
    return { list: state.Enquiryies }
})(ListEnquiry);