import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching }
    from '../../redux/shop/shop.selectors.js';
import { compose } from 'redux';
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverview from './collections-overview.component';

const MapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
})

//const CollectionsOverviewContainer = 
//          connect(MapStateToProps)(WithSpinner(CollectionsOverview))
const CollectionsOverviewContainer = compose(
    connect(MapStateToProps),
    WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;