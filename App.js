import './App.css';
import Card from './components/Card'

function App() {

  let data =[{
    Plan:"FREE",
    Price:0,
    User:"Single User",
    UserEnabler:true,
    Storage:"5GB Storage",
    StorageEnabler:true,
    PublicProjects:"Unlimited Public Projects",
    PublicProjectsEnabler:true,
    CommunityAccess:"Community Access",
    CommunityAccessEnabler:true,
    PrivateProjects: "Unlimited Private Projects",
    PrivateProjectsEnabler:false,
    PhoneSupport:"Dedicated Phone Support",
    PhoneSupportEnabler:false,
    Subdomain:"Free Subdomain",
    SubdomainEnabler:false,
    Reports:"Monthly Status Reports",
    ReportsEnabler:false
  
  },

  {
    Plan:"pro",
    Price:9,
    User:"5 User",
    UserEnabler:true,
    Storage:"50GB Storage",
    StorageEnabler:true,
    PublicProjects:"Unlimited Public Projects",
    PublicProjectsEnabler:true,
    CommunityAccess:"Community Access",
    CommunityAccessEnabler:true,
    PrivateProjects: "Unlimited Private Projects",
    PrivateProjectsEnabler:true,
    PhoneSupport:"Dedicated Phone Support",
    PhoneSupportEnabler:true,
    Subdomain:"Free Subdomain",
    SubdomainEnabler:true,
    Reports:"Monthly Status Reports",
    ReportsEnabler:false
    ,
  },

    {
      Plan:"plus",
      Price:49,
      User:"Unlimited  User",
      UserEnabler:true,
      Storage:"150GB Storage",
      StorageEnabler:true,
      PublicProjects:"Unlimited Public Projects",
      PublicProjectsEnabler:true,
      CommunityAccess:"Community Access",
      CommunityAccessEnabler:true,
      PrivateProjects: "Unlimited Private Projects",
      PrivateProjectsEnabler:true,
      PhoneSupport:"Dedicated Phone Support",
      PhoneSupportEnabler:true,
      Subdomain:"  Free Subdomain",
      SubdomainEnabler:true,
      Reports:"Monthly Status Reports",
      ReportsEnabler:true
    }
    ,
  

    ]
  return <>
  <section className="pricing py-5">
  <div className="container">
    <div className="row">
    <Card data ={data[0]}/>
    <Card data ={data[1]}/>
    <Card data ={data[2]}/> 

    
  
  
    
    </div>
  </div>
</section>
</>
 
}

export default App;
