import React from 'react'
const people = [
  'Ayush Dixit: Datapro Sir  ',
  'Manthan Jagade: Student',
  'Mandar: Datapro sir',
  'Shrikant Damahe : Student',
  'priya shukla: Datapro Mam',
  'Nalin saini : Student '
];

 function List() {
  const listItems = people.map(person =>
    <li>{person}</li>
  );
  return <ul>{listItems}</ul>;
}
export default List;