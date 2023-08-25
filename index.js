import { createRoot } from 'react-dom/client';
import './index.css';
import * as React from "react";
import { useEffect } from 'react';
import { updateSampleSection } from './sample-base';
import { registerLicense } from '@syncfusion/ej2-base';
import { DataManager, Query, UrlAdaptor } from '@syncfusion/ej2-data';
import { AppBarComponent, MenuComponent } from '@syncfusion/ej2-react-navigations';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { GridComponent, ColumnsDirective, ColumnDirective, Reorder, Inject } from '@syncfusion/ej2-react-grids';

registerLicense('ORg4AjUWIQA/Gnt2V1hiQlRPf0BAWXxLflF1VWFTfll6dFdWACFaRnZdQV1rS3tSckRrWn5ecn1U');

import { data } from "./data";

const mainMenuItems = [
    {
        text: 'Clients'
    },
    {
        text: 'SOV'
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
    return (
        <div className='control-pane'>
            <div className='control-section'>
                <GridComponent dataSource={data} allowReordering={true}>
                    <ColumnsDirective>
                        <ColumnDirective field='EmployeeID' headerText='Employee ID' width='120' textAlign="Right"></ColumnDirective>
                        <ColumnDirective field='FirstName' headerText='Name' width='140'></ColumnDirective>
                        <ColumnDirective field='Title' headerText='Title' width='170' />
                        <ColumnDirective field='HireDate' headerText='Hired Date' width='120' format='yMd' textAlign="Right" />
                        <ColumnDirective field='ReportsTo' headerText='Reports To' width='120'></ColumnDirective>
                    </ColumnsDirective>
                    <Inject services={[Reorder]} />
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
