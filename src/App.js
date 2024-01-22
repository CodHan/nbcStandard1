import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const initialArray = [
    'apple',
    'banana',
    'chrry',
    'elderberry',
    'watermelon',
    'grape',
  ];
  const [array, setArray] = useState(initialArray); //useState 하면 배열이나온다.
  const [result, setResult] = useState('');
  const [query, setQuery] = useState('');

  //함수
  const handleForEach = () => {
    let tempResult = '';
    array.forEach(function (fruit) {
      tempResult += `${fruit} ,`;
    });

    setResult(tempResult.slice(0, -2));
  };

  const handleFilter = () => {
    const filteredList = array.filter(function (fruit) {
      if (fruit.includes(query)) {
        return true;
      } else {
        return false;
      }
    });
    setResult(filteredList.join(', '));
  };
  //MAP은 꼭 리턴을 줘야함 , index도 받을수 있다.
  const handleMap = () => {
    const mapList = array.map(function (fruit) {
      return fruit.toUpperCase();
    });
    setResult(mapList.join(', '));
  };
  //리듀스는 인풋을 두개가진다, 누적된합을 구할때 쓴다. acc+cur
  //acc는 첫번째 인덱스만 실행, cur은 두번째 인덱스부터 계속 실행
  //value는 return에서 정해진다.
  const handlereduce = () => {
    const reducedList = array.reduce(function (acc, cur) {
      return `${acc},${cur}`;
    });
    setResult(reducedList);
  };
  const handlepush = () => {
    const newArr = [...array];
    newArr.push(query);
    setArray(newArr);
    setResult(newArr.join(', '));
  };
  const handlePOP = () => {
    const newArr = [...array];
    newArr.pop();
    setArray(newArr);
    setResult(newArr.join(', '));
  };
  const handleSlice = () => {
    const newArr = [...array];
    const test = newArr.slice(0, newArr.length - 2);
    setArray(test);
    setResult(test.join(', '));
  };
  const handleSplice = () => {
    const newArr = [...array];
    newArr.splice(2, 2, 'kiwi', 'lime');
    setArray(newArr);
    setResult(newArr.join(', '));
  };
  const handleIndexOf = () => {
    const newArr = array.indexOf(query);
    setResult(newArr);
  };
  const handleIncludes = () => {
    const newArr = array.includes(query);
    console.log(newArr);
    setResult(newArr.toString());
  };
  const handleFind = () => {
    const found = array.find((item) => {
      item.includes(query);
    });
    setResult(found || 'NOT FOUND');
  };
  const handleSome = () => {
    const some = array.some((item) => item.includes(query));
    setResult(some.toString());
  };
  const handleEvery = () => {
    const every = array.every((item) => item.length > 2);
    setResult(every.toString());
  };
  const handleSort = () => {
    const sort = array.sort();
    setResult(sort.join(', '));
  };

  return (
    <div>
      <h1>Array API Practice</h1>
      <div>
        <input
          value={query}
          onChange={function (e) {
            setQuery(e.target.value);
          }}
        />
      </div>
      <div>
        <button onClick={handleForEach}>forEach</button>
        <button onClick={handleFilter}>Filter</button>
        <button onClick={handleMap}>Map</button>
        <button onClick={handlereduce}>reduce</button>
        <button onClick={handlepush}>push</button>
        <button onClick={handlePOP}>POP</button>
        <button onClick={handleSlice}>Slice</button>
        <button onClick={handleSplice}>Splice</button>
        <button onClick={handleIndexOf}>IndexOf</button>
        <button onClick={handleIncludes}>Includes</button>
        <button onClick={handleFind}>Find</button>
        <button onClick={handleSome}>Some</button>
        <button onClick={handleEvery}>Every</button>
        <button onClick={handleSort}>Sort</button>
      </div>
      <div>
        <strong>Array : </strong>
        {array.join(',  ')}
      </div>
      <div>
        <strong>Result : </strong>
        {result}
      </div>
    </div>
  );
}

export default App;
