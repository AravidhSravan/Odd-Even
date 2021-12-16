import React, { Component } from "react";
import './App.css';

class Numbers extends Component {
    render() {
        var x = 0;
        var min = 1;
        var max = 100;
        var odd = [];
        var even = [];
        var OddNumbers = false;
        var arr = [];

        function getValue(val) {
            x = val.target.x;
        }

        function generateNum() {
            for(let i = 0; i < x; i++){
                var number = min + (Math.random() * (max-min));
                arr[i] = Math.floor(number);
            }
        }

        function oddNumber() {
            OddNumbers = true;
            for (let i = 0; i < x; i++) {
              if (arr[i] % 2 !== 0) {
                odd.push(arr[i]);
              }
            }
            console.log(odd);
        }

        function evenNumbers() {
            OddNumbers = false;
            for (let i = 0; i < x; i++) {
              if (arr[i] % 2 === 0) {
                even.push(arr[i]);
              }
            }
            console.log(even);
        }

        return (
            <div className="center">
                <div className="center">
                  <h1> Number Filter </h1>
                </div>
                <div>
                  <div>
                    <input type="text" placeholder="Enter the number inputs" className="inputfield" onChange={getValue}
                    ></input>
                  </div>
                  <div>
                    <button className="generatebtn" onClick={generateNum}> Generate Random Numbers </button>
                  </div>
                  <div className="button center">
                    <div className="oddEvenbtn">
                      <button className="oddEvenbtns" onClick={oddNumber}> ODD </button>
                    </div>
                    <div className="oddEvenbtn">
                      <button className="oddEvenbtns" onClick={evenNumbers}> EVEN </button>
                    </div>
                  </div>
                  <div><h1> Filtered Array </h1></div>
                  <div> { OddNumbers ? <h2> {odd.join(',')} </h2> :  <h2> {even.join(',')} </h2>} </div>
              </div>
            </div>
        );
    };
}

export default Numbers;