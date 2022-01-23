import { Suspense, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './App.module.scss';
import cat from '../images/cat1.jpg';
import { useRoutesConstants } from '../hooks/useRoutesConstants';
import imgBase64, { ReactComponent as ReactLogo } from '../images/santa.svg';
// import imgBase64, { ReactComponent as ReactLogo } from '/images/santa.svg';
// import imgBase64, { ReactComponent as ReactLogo } from '@/images/santa.svg';
// import { getSum } from './helpers/getSum';
// import { getSum } from '../helpers/getSum';

const App = () => {
  const [value, setValue] = useState<{ id: number; n: string }[]>([]);
  console.log(value);

  const addList = () => setValue([{ id: 1, n: 'Ania' }]);

  const routes = useRoutesConstants();

  // getSum(1, 2);

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink to="contacts">CONTACTS</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <>
        <h2 className={styles.title}>APP 111</h2>

        <div className={styles.contPhotos}>
          <img src={cat} alt="" height={150} width={150} />
          <div className={styles.contCat} />
        </div>

        <button type="button" onClick={addList}>
          ADD
        </button>

        <ul>
          {value.map(({ id, n }) => (
            <li key={id}>{n}</li>
          ))}
        </ul>
      </>

      <ReactLogo />
      <img src={imgBase64} alt="" />

      <Suspense fallback={<div>Загрузка...</div>}>{routes}</Suspense>
    </>
  );
};

export default App;
