import './App.css'
import './index.css'
function Home({player="Hassan" , pic="https://resources.pulse.icc-cricket.com/players/100364/284/3325.png"}) {
  return (
    <>
     <div className="name">
      My name is {player} and i am from team <span>Pakistan</span>
     </div>
     <div className="image">
      <img src={pic} alt="babar" />
     </div>
    </>
  );
}

function App() {
  return (
    <>
    <div className="container">
      <Home player="Babar Azam" pic="https://akm-img-a-in.tosshub.com/sites/visualstory/wp/2023/10/Babar-Azam-7-4.jpg?size=*:900"/>
      <Home player="Muhammad Rizwan" pic="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_480,q_50/lsci/db/PICTURES/CMS/368700/368728.10.jpg"/>
      <Home player="Saud Shakeel" pic="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_800,q_50/lsci/db/PICTURES/CMS/368300/368356.jpg"/>
      <Home />
      </div>
    </>
  );
}



export default App
