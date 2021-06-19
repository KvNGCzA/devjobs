import { useEffect, useState } from 'react';

import './index.scss';
import Heading from './heading';
import Cards from '../cards';
import Modal from '../modal';

const Home = () => {
  const [jobData, setJobData] = useState([]);
  const [showModal, setshowModal] = useState(false);
  const [checked, setChecked] = useState(false);
  const [byTitle, setByTitle] = useState('');
  const [byLocation, setByLocation] = useState('');

  useEffect(() => {
    const filterData = jobs => {
      let result = jobs;

      if (byTitle.trim()) {
        const regex = new RegExp(byTitle.trim(), 'gi');
        result = result.filter(
          job =>
            regex.test(job.position) ||
            regex.test(job.company) ||
            regex.test(job.role.content) ||
            regex.test(job.description)
        );
      }

      if (byLocation.trim()) {
        const regex = new RegExp(byLocation.trim(), 'gi');
        result = result.filter(job => regex.test(job.location));
      }

      if (checked) {
        result = result.filter(
          job => job.contract.toLowerCase() === 'full time'
        );
      }

      setJobData(result);
    };

    const getData = async () => {
      try {
        let data = await fetch('data.json');
        data = await data.json();

        filterData(data);
      } catch (error) {
        console.log(error);
        setJobData([]);
      }
    };

    getData();
  }, [byTitle, byLocation, checked]);

  const handleCloseOverlay = e => {
    e.target.classList[0] === 'modal-overlay' && setshowModal(false);
  };

  const handleByTitle = e => {
    setByTitle(e.target.value);
  };

  const handleByLocation = e => {
    setByLocation(e.target.value);
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
        handleByTitle={handleByTitle}
        handleByLocation={handleByLocation}
        byTitle={byTitle}
        byLocation={byLocation}
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
        handleByLocation={handleByLocation}
        byLocation={byLocation}
      />
    </div>
  );
};

export default Home;
