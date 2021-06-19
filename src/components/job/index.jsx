import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './index.scss';
import Description from './description';
import CompanyInfo from './companyInfo';
import Footer from './footer';

const Job = () => {
  const [job, setjob] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        let data = await fetch('../data.json');
        data = (await data.json()).find(current => current.id === +id);

        setjob(data);
      } catch (error) {
        console.log(error);
        setjob({});
      }
    };

    getData();
  }, [id]);

  return job.id ? (
    <div className='page-cont'>
      <div className='job-body'>
        <CompanyInfo job={job} />
        <Description job={job} />
      </div>

      <Footer job={job} />
    </div>
  ) : (
    <div></div>
  );
};

export default Job;
