import logo from './logo.svg';
import './App.css';


const users = [
  {
    id: 1,
    name: 'Hedy Lamarr',
    imgUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imgSize: 120,
  },
  {
    id: 2,
    name: 'Ada Lovelace',
    imgUrl: 'https://i.imgur.com/SKnAwd5s.jpg',
    imgSize: 120,
  },
  {
    id: 3,
    name: 'Grace Hopper',
    imgUrl: 'https://i.imgur.com/1A9iV4H.jpg',
    imgSize: 120,
  }
];

function App() {
  return (
    <div>
      <h1 class="title">Introduction</h1>
      <div>
        {users.map((user)=>(
          
          <div key={user.id} class="card">
            <h1>{user.name}</h1>
            <img
            src={user.imgUrl}
            style={{
              width:user.imgSize,
              height:user.imgSize
            }}>
            </img>
          </div>
        ))}
        
        
      </div>
    </div>
  );
}

export default App;
