import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Route from './components/Route';

const items = [
    {
        title : "What is React ? ",
        content : "React is a frontend JavaScript"
    },
    {
        title : "Why use React ? ",
        content : "React is a favorite JS lib among engineers"
    },
    {
        title : "How to use React ? ",
        content : "We use React using components"
    }
];

const options = [
    {
        label : 'The Color Red',
        value : 'red'
    },
    {
        label : 'The Color Green',
        value : 'green'
    },
    {
        label : 'The Color Blue',
        value : 'blue'
    }
];

const App = () => {
    const [selected, setSelected] = useState(options[0]);
  
    return (
      <div>
        <Route path='/'>
            <Accordion items = {items}/>
        </Route>
        <Route path='/list'>
            <Search/>
        </Route>
        <Route path='/dropdown'>
            <Dropdown selected={selected} onSelectedChange={setSelected} options = {options} />
        </Route>
      </div>
    );
  };
  export default App;