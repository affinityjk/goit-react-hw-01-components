import Profile from './components/SocialProfile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import user from './data/user.json';
import statisticsData from './data/statistical-data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

const App = () => {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      {/* <Statistics title="Upload stats" stats={statisticsData} />;
      <Statistics stats={statisticsData} />;

      <FriendList friends={friends} />;

      <TransactionHistory items={transactions} />; */}
    </div>
  );
}

export default App;
