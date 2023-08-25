import { createRoot } from 'react-dom/client';
import './index.css';
import * as React from "react";
import { useEffect } from 'react';
import { updateSampleSection } from './sample-base';
import { registerLicense } from '@syncfusion/ej2-base';
import { DataManager, Query, UrlAdaptor } from '@syncfusion/ej2-data';
import { AppBarComponent, MenuComponent } from '@syncfusion/ej2-react-navigations';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { GridComponent, ColumnsDirective, ColumnDirective, Reorder, Inject, Page, Selection, Inject, Edit, Toolbar, Sort } from '@syncfusion/ej2-react-grids';

registerLicense('ORg4AjUWIQA/Gnt2V1hiQlRPf0BAWXxLflF1VWFTfll6dFdWACFaRnZdQV1rS3tSckRrWn5ecn1U');

import { tasks } from "./data";

const mainMenuItems = [
    {
        text: 'My Clients'
    },
    {
        text: 'SOVs'
    },
    {
        text: 'Grade'
    },
    {
        text: 'Enrich'
    },
    {
        text: 'Engage'
    },
    {
        text: "Tasks"
    }
];

const AppBar = () => {
    useEffect(() => {
        updateSampleSection();
    }, []);
    return (<div className='control-pane'>
            <div className='control-section default-appbar-section'>
                <div className='control appbar-sample'>
                    <div className="default-appbar-container">
                        <AppBarComponent colorMode="Primary">
                            <span className="regular">AON</span>
                            <div className="e-appbar-spacer"></div>
                            <MenuComponent cssClass="e-inherit" items={mainMenuItems}></MenuComponent>
                            <div className="e-appbar-spacer"></div>
                        </AppBarComponent>
                    </div>
                </div>
            </div>
        </div>);
};
export default AppBar;

function Tasks() {
    const selectionsettings = { persistSelection: true };
    let gridInstance;
    const toolbarOptions = ['New', 'Complete', 'Assign'];
    const editSettings = { allowDeleting: true };
    return (
        <div className='control-pane'>
            <div className='control-section'>
                <GridComponent dataSource={tasks} allowReordering={true} ref={grid => gridInstance = grid} enableHover={false} allowPaging={true} pageSettings={{ pageCount: 5 }} selectionSettings={selectionsettings} toolbar={toolbarOptions} editSettings={editSettings} allowSorting={true}>
                    <ColumnsDirective>
                        <ColumnDirective type='checkbox' width='50'></ColumnDirective>
                        <ColumnDirective field='status' headerText='Status'/>
                        <ColumnDirective field='title' headerText='Task' width='340'/>
                        <ColumnDirective field='assignedTo' headerText='Owner'/>
                        <ColumnDirective field='created' headerText='Created'/>
                        <ColumnDirective field='lastUpdated' headerText='Last Updated'/>
                    </ColumnsDirective>
                    <Inject services={[Selection, Toolbar, Sort]}/>
                </GridComponent>
            </div>
        </div>
    )
}
export default Tasks;


function App() {
    return (
      <div>
        <AppBar />
        <Tasks />
      </div>
    );
  }

const root = createRoot(document.getElementById('root'));
root.render(<App />);
