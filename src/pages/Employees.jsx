import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Inject, Search, Toolbar } from '@syncfusion/ej2-react-grids';

import { employeesData, employeesGrid } from '../data/dummy';
import { Header } from '../components';

const Employees = () => {
    const editing = { allowDeleting: true, allowEditing: true };
    const toolbarOptions = ['Search'];

    return (
        <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
            <Header category='Page' title='Employees' />
            <GridComponent
                allowPaging
                allowSorting
                width='auto'
                dataSource={employeesData}
                editSettings={editing}
                pageSettings={{ pageCount: 5 }}
                toolbar={toolbarOptions}
            >
                <ColumnsDirective>
                    {employeesGrid.map((item, idx) => (
                        <ColumnDirective key={item.idx} {...item} />
                    ))}
                </ColumnsDirective>
                <Inject services={[Search, Page, Toolbar]} />
            </GridComponent>
        </div>
    );
};

export default Employees;
