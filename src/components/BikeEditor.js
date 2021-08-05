import React, { Component } from 'react';
import { connect } from 'react-redux';

import bikeOperations from '../redux/bikes/operations';

const NotUnicId = (allBikes, newId) => {
  const findId = allBikes.find(bike => bike.id === newId);
  return findId;
};

class BikeEditor extends Component {
  state = {
    id: '',
    name: '',
    type: '',
    color: '',
    wheelSize: '',
    price: '',
    description: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
      this.setState({
        [name]: value,
      });
  };

clearForm =()=>{
  this.setState({
    id: '',
    name: '',
    type: '',
    color: '',
    wheelSize: '',
    price: '',
    description: '',
  });
}
  handleSubmit = e => {
    e.preventDefault();
     const find = NotUnicId(this.props.items, this.state.id);
    if (find) {
      alert(`Id ${this.state.id} is already in use!!!`);
      return
    } else
    this.props.onAddBike(this.state);
    this.clearForm()
  };

  render() {
    const {  id,
      name,
      type,
      color,
      wheelSize,
      price,
      description } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          placeholder='Name'
          value={name}
          onChange={this.handleChange}
          required='required'
          name="name"
        />

        <input
          type='text'
          placeholder='Type'
          value={type}
          onChange={this.handleChange}
          required='required'
          name="type"
        />

        <input
          type='text'
          placeholder='Color'
          value={color}
          onChange={this.handleChange}
          required='required'
          name="color"
        />

        <input
          type='text'
          placeholder='Wheel size'
          value={wheelSize}
          onChange={this.handleChange}
          required='required'
          name="wheelSize"

        />

        <input
          type='text'
          placeholder='Price'
          value={price}
          onChange={this.handleChange}
          required='required'
          name="price"

        />

        <input
          type='text'
          placeholder='ID(slug)XXXXX'
          value={id}
          onChange={this.handleChange}
          required='required'
          name="id"

        />

        <textarea
          placeholder='Description'
          id='description'
          name='description'
          rows='5'
          cols='33'
          onChange={this.handleChange}
          value={description}
          required='required'
        >
          {description}
        </textarea>
        <div className='cover btns'>
          <button className='save' type='submit'>
            SAVE
          </button>
          <button className='clear' onClick={this.clearForm}>
            CLEAR
          </button>
        </div>      
        </form>
      </>
    );
  }
}
const mapStateToProps = state => {
  return state.bikes;
};

const mapDispatchToProps = {
  onAddBike: bikeOperations.addBike,
};

export default connect(mapStateToProps, mapDispatchToProps)(BikeEditor);
