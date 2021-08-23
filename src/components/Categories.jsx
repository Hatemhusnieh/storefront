import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { loadCategory, handleCategory } from '../store/products';
import { Paper, Tabs, Tab } from '@material-ui/core';
import './category.scss';

function Categories(props) {
  const [value, setValue] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    props.loadCategory();
  }, []);

  const CategoryPick = (props) => {
    return (
      <div className="category">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    );
  };

  function handlePick(name, des) {
    setName(name);
    setDescription(des);
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Paper square>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          {props.categories.categoryList.map((elm) => {
            return (
              <Tab
                label={elm.name}
                onClick={() => {
                  props.handleCategory(elm.name);
                  handlePick(elm.name, elm.description);
                }}
              />
            );
          })}
        </Tabs>
      </Paper>
      {name && <CategoryPick />}
    </div>
  );
}

const stateToProps = (state) => {
  return state;
};
const dispatchToProps = { loadCategory, handleCategory };
export default connect(stateToProps, dispatchToProps)(Categories);
