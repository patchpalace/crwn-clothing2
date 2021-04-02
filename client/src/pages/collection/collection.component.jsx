
import React, { useState } from 'react';
import { connect } from 'react-redux';
import CollectionItem
    from '../../components/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selectors';
import { SearchBox }
    from '../../components/collection-search-box/collection-search.component';
import {
    CollectionPageContainer,
    CollectionTitle,
    CollectionItemContainer,
    CollectionSearchbox
} from './collection.styles';

const CollectionPage = ({ collection }) => {
    const [searchField, setSearchField] = useState('');
    console.log(collection);
    const { title, items } = collection;
    const onSearchChange = ({ target }) => setSearchField(target.value);
    const filteredCollections = items.filter(item =>
        item.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
        <CollectionPageContainer>
            <CollectionTitle>{title}</CollectionTitle>
            <CollectionSearchbox>
                <SearchBox
                    placeholder="Search Collections"
                    onChange={onSearchChange} />
            </CollectionSearchbox>
            <CollectionItemContainer>
                {filteredCollections.map(item => (
                    <CollectionItem key={item.id} item={item} />)
                )}
            </CollectionItemContainer>
        </CollectionPageContainer>
    );
};
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)
        (state)
});
export default connect(mapStateToProps)(CollectionPage);
