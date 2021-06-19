import { useEffect, useState } from 'react';
import './index.scss';
import { ReactComponent as Location } from '../../assets/icons/icon-location.svg';
import { ReactComponent as Search } from '../../assets/icons/icon-search.svg';
import { ReactComponent as Filter } from '../../assets/icons/icon-filter.svg';
import Cards from '../cards';

const Home = () => {
  const [jobData, setjobData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        let data = await fetch('data.json');
        data = await data.json();

        setjobData(data);
      } catch (error) {
        console.log(error);
        setjobData([]);
      }
    };

    getData();
  }, []);

  return (
    <div className='body'>
      <div className='heading'>
        <div>
          <Search className='search-icon-desktop' fill='#5964E0' />
          <input
            type='text'
            placeholder='Filter by title, companies, expertise…'
          />
          <Filter className='filter' fill='#6E8098' />
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
    </div>
  );
};

export default Home;
