import React from 'react';
import {
    GridComponent,
    ColumnsDirective,
    ColumnDirective,
    Page,
    Selection,
    Inject,
    Edit,
    Toolbar,
    Sort,
    Filter,
} from '@syncfusion/ej2-react-grids';

import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';

const Customers = () => {
    const selectionsettings = { persistSelection: true };
    const toolbarOptions = ['Delete'];
    const editing = { allowDeleting: true, allowEditing: true };

    return (
        <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
            <Header category='Page' title='Customers' />
            <GridComponent
                dataSource={customersData}
                allowSorting
                allowPaging
                enableHover={false}
                selectionSettings={selectionsettings}
                toolbar={toolbarOptions}
                editSettings={editing}
                pageSettings={{ pageCount: 5 }}
            >
                <ColumnsDirective>
                    {customersGrid.map((item, idx) => (
                        <ColumnDirective key={idx} {...item} />
                    ))}
                </ColumnsDirective>
                <Inject services={[Page, Toolbar, Sort, Selection, Edit, Filter]} />
            </GridComponent>
        </div>
    );
};

export default Customers;
