import logo from './logo.svg';
import './App.css';
import HeaderFunctionalComponent from './FunctionalComponent/HeaderFunctionalComponent';
import StatefullVariablePropsAndEvents from './FunctionalComponent/StatefullVariablePropsAndEvents';

import { BrowserRouter } from 'react-router-dom';

//Routing
import RoutingConfig from './Routing/RoutingConfig';
import Menu from './Routing/Menu';

//Import Export
//1-Default Import
import Sample1 from './ImportExport/ImportExportExample';

//2-Named Import
import { ImportExportExample1 } from './ImportExport/ImportExportExample';
import { ImportExportExample3 } from './ImportExport/ImportExportExample';

//3-UNivertsal Import
import * as UniversalImportExport from './ImportExport/ImportExportExample';

import CSSExample from './CSSExample/CSSExample';

import CalculatorUsingCC from './ClassComponent/CalculatorUsingCC';
// import CalculatorUsingFC from './FunctionalComponent/CalculatorUsingFC';

//CRUD Operation
import CRUDMenu from './CRUDOperation/CRUDMenu';
import CRUDRouterHome from './CRUDOperation/CRUDRouterHome';

function App() {
  return (
      <div className="App">
        
        {/* <HeaderFunctionalComponent></HeaderFunctionalComponent> */}
        {/* <StatefullVariablePropsAndEvents ></StatefullVariablePropsAndEvents> */}
        {/* <StatefullVariablePropsAndEvents productName3="Poco" productModel3="poco111" productPrice3="25000"></StatefullVariablePropsAndEvents> */}

        {/* <BrowserRouter>
          <Menu></Menu>
          <RoutingConfig></RoutingConfig>
        </BrowserRouter> */}

        {/* <h2>1-Default Import</h2> */}
        {/* <ImpExp></ImpExp> */}
        {/* <Sample1></Sample1> */}
        

        {/* <h2>2-Named Import</h2>
        <ImportExportExample1></ImportExportExample1>
        <ImportExportExample3></ImportExportExample3>

        <h2>3-UNivertsal Import</h2>
        <UniversalImportExport.ImportExportExample1></UniversalImportExport.ImportExportExample1>
        <UniversalImportExport.ImportExportExample3></UniversalImportExport.ImportExportExample3>
        <UniversalImportExport.default></UniversalImportExport.default> */}
            
        {/* <CSSExample></CSSExample> */}

        {/* <CalculatorUsingCC></CalculatorUsingCC> */}

        {/* <CalculatorUsingFC></CalculatorUsingFC> */}

        <BrowserRouter>
            <CRUDMenu></CRUDMenu>
            <CRUDRouterHome></CRUDRouterHome>
        </BrowserRouter>

      </div>
    
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>

  );
}

export default App;
