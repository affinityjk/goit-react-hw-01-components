import Container from "./components/Container/Container";
import Section from "./components/Section/Section";
import Profile from "./components/SocialProfile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import user from "./data/user.json";
import statisticsData from "./data/statistical-data.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";

const App = () => {
  return (
    <Container>
      <Section title="profile">
        <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      </Section>

      <Statistics title="Upload stats" stats={statisticsData} />

      <Section title="friendlist">
        <FriendList friends={friends} />
      </Section>

      <Section title="transaction history">
        <TransactionHistory items={transactions} />
      </Section>
    </Container>
  );
};

export default App;
