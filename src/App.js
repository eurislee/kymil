import React, { Component } from "react";


class App extends Component{
  render(){
    return(
      <div className="App">
        <ContactList contacts={[
            { name: "Michael" },
            { name: "Ryan" },
            { name: "Tyler" }
        ]}/>
        <ContactList contacts={[
            { name: "Euris" },
            { name: "Lee" }

        ]}/>
      </div>
    );
  }
}

export default App;
