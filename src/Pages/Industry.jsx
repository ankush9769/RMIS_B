import Card from '../Components/Card';
import array from '../Json/Industry.json';
import './Style/Industry.css';

export default function Industry() {

  return (
    <div className='industry'>
      <div className='indusGrid'>
        {array.map((data) => {
          return <div className="indusCard">
            <Card icon={data.icon} title={data.title} description={data.description} mobileIcon={data.mobileIcon}/>
          </div>
        })}
      </div>
    </div>
  )
}
