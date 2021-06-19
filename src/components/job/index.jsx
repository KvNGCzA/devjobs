import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Logos from '../../assets/logos';
import './index.scss';

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
        <div className='company-info'>
          <div
            className='logo-cont'
            style={{
              backgroundColor: job.logoBackground,
            }}
          >
            <Logos name={job.logo} />
          </div>
          <div className='more-info'>
            <div className='company-meta'>
              <span className='company-name'>{job.company}</span>
              <span className='company-site'>{job.website}</span>
            </div>
            <button className='btn btn--secondary'>company site</button>
          </div>
        </div>

        <div className='job-description'>
          <div className='job-heading'>
            <div>
              <span>{job.postedAt}</span>
              <span>•</span>
              <span>{job.contract}</span>
              <p className='position'>{job.position}</p>
              <p className='location'>{job.location}</p>
            </div>

            <button className='btn btn--default'>apply now</button>
          </div>
          <p className='description'>{job.description}</p>
          <h4>Requirements</h4>
          <p>{job.requirements.content}</p>
          <ul>
            {job.requirements.items.map(item => (
              <li>{item}</li>
            ))}
          </ul>

          <h4>what you will do</h4>
          <p>{job.role.content}</p>
          <ol className='numbered'>
            {job.role.items.map(item => (
              <li>{item}</li>
            ))}
          </ol>
        </div>
      </div>
      <footer>
        <div className='company-info'>
          <div>
            <span className='position'>{job.position}</span>
            <span className='company'>{job.company}</span>
          </div>

          <button className='btn btn--default'>apply now</button>
        </div>
      </footer>
    </div>
  ) : (
    <div></div>
  );
};

export default Job;
