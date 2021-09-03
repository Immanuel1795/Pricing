import './App.css';
import priceArray from './price';

function App() {
  return (
    <div className="App">
     <section className="pricing py-5" >
  <div className="container">
    <div className="row">
     {priceArray.map((details, index)=>{
     return <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{details.plan}</h5>
            <h6 className="card-price text-center">{details.rate}<span className="period">/month</span></h6>
            <hr />
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{details.user !=="Single User" ? <b>{details.user}</b> : details.user}</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{details.storage}</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{details.publicProjects}</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{details.access}</li>
              {details.restricted === true ?           
                 <><li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{details.privateProjects}</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{details.phoneSupport}</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{details.subDomain}
              </li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{details.statusReports}</li> </> :  
              
              details.partiallyRestricted === true ? <><li><span className="fa-li"><i className="fas fa-check"></i></span>{details.privateProjects}</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{details.phoneSupport}</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{details.subDomain}</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{details.statusReports}</li> </> : 

              details.restricted === false ? <><li><span className="fa-li"><i className="fas fa-check"></i></span>{details.privateProjects}</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{details.phoneSupport}</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span><b>Unlimited </b>{details.subDomain}</li>

              <li><span className="fa-li"><i className="fas fa-check"></i></span>{details.statusReports}</li>
               </> : null
              
              }
              
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
     })}
      
    </div>
  </div>
</section>

    </div>

  );
}

export default App;
