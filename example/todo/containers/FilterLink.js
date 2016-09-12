import React from 'react';
import { Link } from 'react-router';

const FilterLink = ({filter, children}) => (
    <Link
        to={ filter ===  'all' ? '' : filter}
        activeStyle={{
            textDecoration: 'none',
            color: 'black',
        }}
    >
    {children}
    </Link>
);

export default FilterLink;

// import { connect } from 'react-redux'
// import { setVisibilityFilter } from '../actions'
// import Link from '../components/Link'
//
// const mapStateToLinkProps = (state, ownProps) => ({
//     active: ownProps.filter === state.visibilityFilter
// });
//
// const mapDispatchToLinkProps = (dispatch, ownProps) => ({
//     onClick() {
//         dispatch(setVisibilityFilter(ownProps.filter))
//     }
// });
//
// const FilterLink = connect(mapStateToLinkProps, mapDispatchToLinkProps)(Link);
//
// export default FilterLink
