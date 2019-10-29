import React from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';

import TopBar from '../../components/topBar';

import {
  DataTable,
  DataTableContent,
  DataTableHead,
  DataTableHeadCell,
  DataTableRow,
  DataTableCell,
  DataTableBody
} from '@rmwc/data-table';
import { Checkbox } from '@rmwc/checkbox';
import { IconButton } from '@rmwc/icon-button';

import { ReactComponent as DeleteIcon } from '../../assets/images/cancel-24px.svg';

import {
  findUnarchivedItemsMutation,
  markItemUsedMutation,
  archiveItemMutation
} from '../../common/queries/items';

import './dashboard.css';

function Dashboard() {
  const [markUsed] = useMutation(markItemUsedMutation);
  const [archiveItem] = useMutation(archiveItemMutation);
  const { loading, error, data, refetch } = useQuery(findUnarchivedItemsMutation);

  let component;
  if (loading) component = <div>Loading...</div>;
  else if (error) component = <div>Error...</div>;
  else
    component =
      <div className={'stock-content'}>
        <DataTable>
          <DataTableContent>
            <DataTableHead>
              <DataTableRow>
                <DataTableHeadCell alignMiddle>Name</DataTableHeadCell>
                <DataTableHeadCell alignMiddle>Quantity</DataTableHeadCell>
                <DataTableHeadCell alignMiddle>Used</DataTableHeadCell>
                <DataTableHeadCell alignMiddle>Delete</DataTableHeadCell>
              </DataTableRow>
            </DataTableHead>
            <DataTableBody>
              {data.findUnarchivedItems.map(({ _id, name, quantity, used }) =>
                <DataTableRow key={_id}>
                  <DataTableCell alignMiddle>{name}</DataTableCell>
                  <DataTableCell alignMiddle>x{quantity}</DataTableCell>
                  <DataTableCell>
                    <Checkbox
                      checked={used}
                      onChange={(e) => {
                        markUsed({
                          variables: {
                            _id,
                            used: !used
                          }
                        })
                          .then(() => refetch());
                      }}/>
                  </DataTableCell>
                  <DataTableCell>
                    <IconButton icon={<DeleteIcon/>}
                                onClick={() => {
                                  archiveItem({ variables: { _id } })
                                    .then(() => refetch());
                                }}/>
                  </DataTableCell>
                </DataTableRow>
              )}
            </DataTableBody>
          </DataTableContent>
        </DataTable>
      </div>;

  return (
    <div className={'dashboard'}>
      <TopBar/>
      {component}
    </div>
  );
}

export default Dashboard;


