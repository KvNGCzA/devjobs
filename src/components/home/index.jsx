import { useEffect, useState } from 'react';

import './index.scss';
import Cards from '../cards';
import { ReactComponent as Location } from '../../assets/icons/icon-location.svg';
import { ReactComponent as Search } from '../../assets/icons/icon-search.svg';
import { ReactComponent as Filter } from '../../assets/icons/icon-filter.svg';

const Home = () => {
  const [jobData, setJobData] = useState([]);
  const [modalState, setModalState] = useState(false);

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
    e.target.classList[0] === 'modal-overlay' && setModalState(false);
  };

  return (
    <div className='body'>
      <div className='heading'>
        <div>
          <Search className='search-icon-desktop' fill='#5964E0' />
          <input
            type='text'
            placeholder='Filter by title, companies, expertise…'
          />
          <Filter
            className='filter'
            fill='#6E8098'
            onClick={() => setModalState(!modalState)}
          />
          <button className='search-icon-mobile'>
            <Search fill='#FFF' />
          </button>
        </div>

        <div>
          <Location />
          <input type='text' placeholder='Filter by location…' />
        </div>

        <div className='checkbox-cont'>
          <div className='checkbox'>
            <input type='checkbox' />
          </div>
          <span>full time only</span>
          <button className='btn btn--default'>search</button>
        </div>
      </div>

      <div className='main'>
        <Cards data={jobData} />
        <button className='btn btn--default load-more'>load more</button>
      </div>

      <div
        className='modal-overlay'
        style={{
          display: modalState ? 'flex' : 'none',
        }}
        onClick={handleCloseOverlay}
      >
        <div className='modal'>
          <div className='filter-cont'>
            <Location />
            <input type='text' placeholder='Filter by location…' />
          </div>

          <div>
            <div className='checkbox-cont'>
              <div className='checkbox'>
                <input type='checkbox' />
              </div>
              <span>full time only</span>
            </div>
            <button
              className='btn btn--default'
              onClick={() => setModalState(!modalState)}
            >
              search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
