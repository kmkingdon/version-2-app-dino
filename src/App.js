import React, { Component } from 'react';
import './App.css';
import ProfileList from './components/ProfileList';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {data:[]};
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    fetch('./dinosaurs.json')
      .then(response => response.json())
      .then(response => {
        this.setState({data:response})
      })
  }

  handleClick(e) {
    e.preventDefault();
    if(e.target.parentNode.classList.contains('profile-header')) {
      e.target.parentNode.parentNode.childNodes[1].classList.toggle('hidden')
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <section id="profiles-container">
            <h2>Profiles</h2>
            <ul id="profiles">
              <ProfileList profiles={this.state.data} handleClick={this.handleClick} />
            </ul>
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
