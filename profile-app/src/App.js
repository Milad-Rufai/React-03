import './App.css';
import Profile from './profile';
import Search from './search';

function App() {
  return ([
    <div className='App-body'>
      <Search></Search>
      <div className="App">
        <div className='image-box'>
          <img src='https://randomuser.me/api/portraits/med/women/77.jpg' alt='charlotte'></img>
          <Profile id={"60d0fe4f5311236168a109f5"} title={"ms"} firstName={"Charlotte"} lastName={"Legrand"} ></Profile>
        </div>
        <div className='image-box'>
          <img src='https://randomuser.me/api/portraits/med/women/15.jpg' alt='charlotte'></img>
          <Profile id={"60d0fe4f5311236168a109f6"} title={"miss"} firstName={"Madison"} lastName={"Ambrose"} ></Profile>
        </div>
        <div className='image-box'>
          <img src='https://randomuser.me/api/portraits/med/women/18.jpg' alt='charlotte'></img>
          <Profile id={"60d0fe4f5311236168a109fa"} title={"ms"} firstName={"Ann"} lastName={"Mason"} ></Profile>
        </div>
        <div className='image-box'>
          <img src='https://randomuser.me/api/portraits/med/men/77.jpg' alt='charlotte'></img>
          <Profile id={"60d0fe4f5311236168a109fb"} title={"mr"} firstName={"Sohan"} lastName={"Pierre"} ></Profile>
        </div>
        <div className='image-box'>
          <img src='https://randomuser.me/api/portraits/med/men/10.jpg' alt='charlotte'></img>
          <Profile id={"60d0fe4f5311236168a109fc"} title={"mr"} firstName={"Gonzaga"} lastName={"Ribeiro"} ></Profile>
        </div>

        <div className='image-box'>
          <img src='https://randomuser.me/api/portraits/med/women/3.jpg' alt='charlotte'></img>
          <Profile id={"60d0fe4f5311236168a109ff"} title={"mrs"} firstName={"Josefina"} lastName={"Calvo"} ></Profile>
        </div>
        <div className='image-box'>
          <img src='https://randomuser.me/api/portraits/med/women/75.jpg' alt='charlotte'></img>
          <Profile id={"60d0fe4f5311236168a10a00"} title={"mrs"} firstName={"Els"} lastName={"Ijsseldijk"} ></Profile>
        </div>
        <div className='image-box'>
          <img src='https://randomuser.me/api/portraits/med/men/45.jpg' alt='charlotte'></img>
          <Profile id={"60d0fe4f5311236168a10a01"} title={"mr"} firstName={"Jesus"} lastName={"Riley"} ></Profile>
        </div>
        <div className='image-box'>
          <img src='https://randomuser.me/api/portraits/med/men/57.jpg' alt='charlotte'></img>
          <Profile id={"60d0fe4f5311236168a10a03"} title={"mr"} firstName={"Andri"} lastName={"Leclerc"} ></Profile>
        </div>
        <div className='image-box'>
          <img src='https://randomuser.me/api/portraits/med/men/24.jpg' alt='charlotte'></img>
          <Profile id={"60d0fe4f5311236168a10a04"} title={"mr"} firstName={"Konsta"} lastName={"Manninen"} ></Profile>
        </div>
      </div>
    </div>

]);
}

export default App;
