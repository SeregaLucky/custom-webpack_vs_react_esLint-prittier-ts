import { Component, FC, useEffect, useState } from 'react';
import styles from './Contacts.module.scss';

// class Contacts extends Component {
//   state = { value: 0 };

//   componentDidMount() {
//     this.setState({ value: 1 });
//   }

//   onClick = () => {
//     this.setState(prevValue => ({ value: prevValue + 1 }));
//   };

//   render() {
//     // const { value } = this.state;

//     return (
//       <div>
//         <h2 className={styles.title}>CONTACTS</h2>
//         {/* <h2>CONTACTS</h2> */}
//       </div>
//     );
//   }
// }

const Contacts: FC = () => {
  const [value, setValue] = useState(0);

  const onClick = () => {
    setValue(prevValue => prevValue + 1);
  };

  const onData = () => {
    import('./data/users').then(console.log);
    import('./heplers/sum').then(data => {
      console.log(data);
      const { sum } = data;
      console.log(sum(1, 2));
    });
  };

  useEffect(() => {
    console.log(value);
    // setValue(1);

    // onClick();
  }, []);

  return (
    <div>
      <button type="button" onClick={onClick}>
        Click
      </button>
      <button type="button" onClick={onData}>
        Data
      </button>

      <h2 className={styles.title}>CONTACTS</h2>
      {/* <h2>CONTACTS</h2> */}
      <p>{value}</p>
    </div>
  );
};

export default Contacts;
