import React from 'react';
import './Components/StyleSheet.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      screenText : "",
      operator : ""
    };

    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleCalculation = this.handleCalculation.bind(this);
    this.GetResult = this.GetResult.bind(this);
    this.ClearText = this.ClearText.bind(this);
  }
  handleButtonClick(event){
    let val = event.target.value;
    if(val == '+' || val == '-' || val == '/' || val == '*' || val == '%'){
      this.setState({operator : val});
    }

    this.setState({
      screenText : this.state.screenText + event.target.value
    });
    
  }
  handleCalculation(number1, number2){
    let res;
    switch(this.state.operator){
      case '+' : 
        res = number1 + number2;
        break;
      case '-' : 
        res = number1 - number2;
        break;
      case '/' : 
        res = number1 / number2;
        break;
      case '*' : 
        res = number1 * number2;
        break;
      case '%' : 
        res = number1 % number2;
        break;
    }
    this.setState({
      screenText : this.state.screenText + '\n' + res
    });
  }
  GetResult(){
    let [num1, num2] = this.state.screenText.split(this.state.operator);
    this.handleCalculation(parseInt(num1, 10), parseInt(num2, 10));
  }
  ClearText(){
    this.setState({
      screenText : "",
      operator : ""
    });
  }

  render(){
    return(
      <div className='wrapper'>
        <div className='display'>
          <textarea className='inputBox' value={this.state.screenText}></textarea>
        </div>
        <hr />
        <div className='buttons'>
          <div className='numButtons'>
            <button className='numbers' value={7} onClick={this.handleButtonClick}>7</button>
            <button className='numbers' value={8} onClick={this.handleButtonClick}>8</button>
            <button className='numbers' value={9} onClick={this.handleButtonClick}>9</button>
            
            <br />
            <button className='numbers' value={4} onClick={this.handleButtonClick}>4</button>
            <button className='numbers' value={5} onClick={this.handleButtonClick}>5</button>
            <button className='numbers' value={6} onClick={this.handleButtonClick}>6</button>
            
            <br />
            <button className='numbers' value={1} onClick={this.handleButtonClick}>1</button>
            <button className='numbers' value={2} onClick={this.handleButtonClick}>2</button>
            <button className='numbers' value={3} onClick={this.handleButtonClick}>3</button>
            
            <br />
            <button className='numbers' value={0} onClick={this.handleButtonClick}>0</button>
          </div>

          <div className='opratorButtons'>
            <button className='clearButton' onClick={this.ClearText}>Clear</button>
            <button className='numbers' value={'*'} onClick={this.handleButtonClick}>*</button>
            <button className='numbers' value={'/'} onClick={this.handleButtonClick}>/</button>
            <br />
            <button className='numbers' value={'+'} onClick={this.handleButtonClick}>+</button>
            <button className='numbers' value={'-'} onClick={this.handleButtonClick}>-</button>
            <br />
            <button className='numbers' value={'.'} onClick={this.handleButtonClick}>.</button>
            <button className='numbers' value={'%'} onClick={this.handleButtonClick}>%</button>
            <br />
            <button className='equalButton' value={'='} onClick={this.GetResult}>=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

