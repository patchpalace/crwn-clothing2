import shopActionType from './shop.types';
// export const updateCollections = (collectionsMap) => ({
    // type: shopActionType.UPDATE_COLLECTIONS,
    // payload: collectionsMap
// });
// 
import { firestore, convertCollectionsSnapshotToMap }
    from '../../firebase/firebase.utils';

export const fetchCollectionsSuccess = collectionsMap => ({
    type: shopActionType.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
});
export const fetchCollectionsStart = () => ({
    type: shopActionType.FETCH_COLLECTIONS_START,
});
export const fetchCollectionsFailure = errormessage => ({
    type: shopActionType.FETCH_COLLECTIONS_FAILURE,
    payload: errormessage
});
export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());
        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            dispatch(fetchCollectionsSuccess(collectionsMap));   
        }).catch(error => dispatch(fetchCollectionsFailure(error.message)));
    };
}
