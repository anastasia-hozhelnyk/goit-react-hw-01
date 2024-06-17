import './App.css';

import userData from '../../userData.json';
import Profile from '../Profile/Profile';

import friends from '../../friends.json';
import FriendList from '../FriendList/FriendList';

import transactions from '../../transactions.json';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

function App() {
  const { username, tag, location, avatar, stats } = userData;

  return (
    <div className="wrapper">
      <Profile
        name={username}
        tag={tag}
        location={location}
        image={avatar}
        stats={stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
