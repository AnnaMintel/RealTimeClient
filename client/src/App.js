import './App.css';
import { EventSourcing } from './EventSourcing';
import { Longpulling } from './Longpulling';
import { WebSock } from './WebSocket';

function App() {
  return (
    <div>
      {/* <Longpulling /> */}
      {/* <EventSourcing /> */}
      <WebSock />
    </div>
  );
}

export default App;
