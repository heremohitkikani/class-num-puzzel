import React, { Component } from 'react'
import './App.css';

export default class App extends Component {
  // tmp = [];
  constructor() {
    super();
    this.state = {
      puzz: [],
      result:'Result',
    }

    for (var i = 0; i < 9; i++) {

      var ran = Math.floor(Math.random() * 9) + 1;

      if (!this.state.puzz.includes(ran)) {
        this.state.puzz.push(ran)
      } else {
        i--;
      }
    }

    for (var i = 0; i < this.state.puzz.length; i++) {
      if (this.state.puzz[i] == 9) {
        this.state.puzz[i] = '';
      }
    }
  }

  myfunc = (ele, ind) => {
    if (ind == 0) {
      if (this.state.puzz[1] == '') {
        this.state.puzz[1] = this.state.puzz[ind];
        this.state.puzz[ind] = '';
      }
      else if (this.state.puzz[3] === '') {
        this.state.puzz[3] = this.state.puzz[ind];
        this.state.puzz[ind] = '';
      }
      this.setState({
        puzz: this.state.puzz,
      })
      this.resultt();
    }

    else if (ind == 1) {
      if (this.state.puzz[0] == '') {
        this.state.puzz[0] = this.state.puzz[ind];
        this.state.puzz[ind] = '';
      }
      else if (this.state.puzz[2] === '') {
        this.state.puzz[2] = this.state.puzz[ind];
        this.state.puzz[ind] = '';
      }
      else if (this.state.puzz[4] === '') {
        this.state.puzz[4] = this.state.puzz[ind];
        this.state.puzz[ind] = '';
      }
      this.setState({
        puzz: this.state.puzz,
      })
      this.resultt();

    }

    else if (ind == 2) {
      if (this.state.puzz[1] == '') {
        this.state.puzz[1] = this.state.puzz[ind];
        this.state.puzz[ind] = '';
      }
      else if (this.state.puzz[5] === '') {
        this.state.puzz[5] = this.state.puzz[ind];
        this.state.puzz[ind] = '';
      }
      this.setState({
        puzz: this.state.puzz,
      })
      this.resultt();

    }

    else if (ind == 3) {
      if (this.state.puzz[0] == '') {
        this.state.puzz[0] = this.state.puzz[ind];
        this.state.puzz[ind] = '';
      }
      else if (this.state.puzz[4] === '') {
        this.state.puzz[4] = this.state.puzz[ind];
        this.state.puzz[ind] = '';
      }
      else if (this.state.puzz[6] === '') {
        this.state.puzz[6] = this.state.puzz[ind];
        this.state.puzz[ind] = '';
      }
      this.setState({
        puzz: this.state.puzz,
      })
      this.resultt();

    }

    else if (ind == 4) {
      if (this.state.puzz[1] == '') {
        this.state.puzz[1] = this.state.puzz[ind];
        this.state.puzz[ind] = '';
      }
      else if (this.state.puzz[3] === '') {
        this.state.puzz[3] = this.state.puzz[ind];
        this.state.puzz[ind] = '';
      }
      else if (this.state.puzz[5] === '') {
        this.state.puzz[5] = this.state.puzz[ind];
        this.state.puzz[ind] = '';
      }
      else if (this.state.puzz[7] === '') {
        this.state.puzz[7] = this.state.puzz[ind];
        this.state.puzz[ind] = '';
      }
      this.setState({
        puzz: this.state.puzz,
      })
      this.resultt();

    }

    else if (ind == 5) {
      if (this.state.puzz[2] == '') {
        this.state.puzz[2] = this.state.puzz[ind];
        this.state.puzz[ind] = '';
      }
      else if (this.state.puzz[4] === '') {
        this.state.puzz[4] = this.state.puzz[ind];
        this.state.puzz[ind] = '';
      }
      else if (this.state.puzz[8] === '') {
        this.state.puzz[8] = this.state.puzz[ind];
        this.state.puzz[ind] = '';
      }
      this.setState({
        puzz: this.state.puzz,
      })
      this.resultt();

    }

    else if (ind == 6) {
      if (this.state.puzz[3] == '') {
        this.state.puzz[3] = this.state.puzz[ind];
        this.state.puzz[ind] = '';
      }
      else if (this.state.puzz[7] === '') {
        this.state.puzz[7] = this.state.puzz[ind];
        this.state.puzz[ind] = '';
      }
      this.setState({
        puzz: this.state.puzz,
      })
      this.resultt();

    }else if (ind == 7) {
      if (this.state.puzz[4] == '') {
        this.state.puzz[4] = this.state.puzz[ind];
        this.state.puzz[ind] = '';
      }
      else if (this.state.puzz[6] === '') {
        this.state.puzz[6] = this.state.puzz[ind];
        this.state.puzz[ind] = '';
      }
      else if (this.state.puzz[8] === '') {
        this.state.puzz[8] = this.state.puzz[ind];
        this.state.puzz[ind] = '';
      }
      this.setState({
        puzz: this.state.puzz,
      })
      this.resultt();

    }

    else if (ind == 8) {
      if (this.state.puzz[5] == '') {
        this.state.puzz[5] = this.state.puzz[ind];
        this.state.puzz[ind] = '';
      }
      else if (this.state.puzz[7] === '') {
        this.state.puzz[7] = this.state.puzz[ind];
        this.state.puzz[ind] = '';
      }
      this.setState({
        puzz: this.state.puzz,
      })
      this.resultt();

    }
  }

    resultt = () =>{
      if(this.state.puzz[0]==1 && this.state.puzz[1]==2 && this.state.puzz[2]==3 && this.state.puzz[3]==4 && this.state.puzz[4]==5 && this.state.puzz[5]==6 && this.state.puzz[6]==7 && this.state.puzz[7]==8){
          this.setState({
            result : "you won game",
          })
      }
    }

    

  
  render() {
    return (
      <div className='puzzle-main'>
        <div className='puzzle' style={{display:'grid',gridTemplateColumns:'auto auto auto',height:'400px',width:'400px'}}>
          {
            this.state.puzz.map((ele, ind) => {
              return (
                <>
                  <button onClick={(e) => { this.myfunc(ele, ind) }} style={{fontSize:'30px',backgroundColor:'gray',fontWeight:'bold'}} className='puzzle-btn'>{ele}</button>
                </>
              )
            })
          }
        </div>
          <input type='text' value={this.state.result} style={{marginTop:'20px',textAlign:'center',padding:'5px',backgroundColor:'gray',color:'black',fontSize:'20px',fontWeight:'bold',border:'3px solid black'}}></input>
      </div>
    )
  }
}