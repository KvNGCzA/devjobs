import { useEffect, useState } from 'react';

import './index.scss';
import Heading from './heading';
import Cards from '../cards';
import Modal from '../modal';

const Home = () => {
  const [jobData, setJobData] = useState([]);
  const [showModal, setshowModal] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        let data = await fetch('data.json');
        data = await data.json();

        setJobData(data);
      } catch (error) {
        console.log(error);
        setJobData([]);
      }
    };

    getData();
  }, []);

  const handleCloseOverlay = e => {
    e.target.classList[0] === 'modal-overlay' && setshowModal(false);
  };

  const handleCheckbox = () => {
    setChecked(!checked);
  };

  return (
    <div className='body'>
      <Heading
        setshowModal={setshowModal}
        showModal={showModal}
        checked={checked}
        handleCheckbox={handleCheckbox}
      />

      <div className='main'>
        <Cards data={jobData} />
        <button className='btn btn--default load-more'>load more</button>
      </div>

      <Modal
        showModal={showModal}
        handleCloseOverlay={handleCloseOverlay}
        checked={checked}
        handleCheckbox={handleCheckbox}
        setshowModal={setshowModal}
      />
    </div>
  );
};

export default Home;
