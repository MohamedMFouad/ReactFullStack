import Header from './Header'
import React from'react'

 
class App extends  React.Component{
    state ={
        pageHeader :'React'
    }
   componentDidMount(){
       console.log('CDM');
       debugger;
   }
   componentWillUnmount(){
       console.log("unmounted");
       debugger;
   }
   
    render(){
        return(
            <div className="App">
              <Header massage={this.state.pageHeader} />
                <div>
                 ...---
               </div>
             </div>  
         );
    }
};
export default App;