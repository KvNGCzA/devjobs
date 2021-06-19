const Description = ({ job }) => (
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
        <li key={item}>{item}</li>
      ))}
    </ul>

    <h4>what you will do</h4>
    <p>{job.role.content}</p>
    <ol className='numbered'>
      {job.role.items.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ol>
  </div>
);

export default Description;
