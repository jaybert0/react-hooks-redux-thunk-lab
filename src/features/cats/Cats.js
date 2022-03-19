import React, {useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux',
import {fetchCats} from './catsSlice';

function Cats() {
  const catsPics = useSelector((state) => state.entities)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCats())
  }, [])
  return (
    <div>
      <h1>CatBook</h1>
      <CatList catPics={catsPics} />
    </div>
  );
}

export default Cats;
