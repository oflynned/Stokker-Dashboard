import gql from 'graphql-tag';

export const findUnarchivedItemsQuery = gql`
    query FindUnarchivedItems {
        findUnarchivedItems {
            _id
            name
            quantity
            used
        }
    }
`;

export const findUnusedItemsQuery = gql`
    query FindUnusedItems {
        findUnusedItems {
            _id
            name
            quantity
            used
        }
    }
`;

export const onItemDataChangedSubscription = gql`
    subscription OnItemDataChanged {
        onItemDataChanged {
            _id
            name
            quantity
            used
        }
    }
`;

export const markItemUsedMutation = gql`
    mutation MarkItemUsed($_id: String!, $used: Boolean!) {
        modifyItem(_id: $_id, used: $used) {
            _id
        }
    }
`;


export const archiveItemMutation = gql`
    mutation DestroyItem($_id: String!) {
        deleteItem(_id: $_id) {
            _id
        }
    }
`;
