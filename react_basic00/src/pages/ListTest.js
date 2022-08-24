const DATA = [
    { id: 1, name: "채가", age: 27, sleep: false },
    { id: 2, name: "김가", age: 37, sleep: true },
    { id: 3, name: "박가", age: 47, sleep: true },
];

const detail =() => {
    return (
        <h2>DATA[0].title</h2>
    )
}



const ListTest = () => {
  return (
      <ul>
          {
            DATA.map(it => 
            <li key={it.id}>{it.name} {it.age} {it.sleep ? 'sleep' : 'playing'}</li>)
          }      
      </ul>
  );
};



export default ListTest;