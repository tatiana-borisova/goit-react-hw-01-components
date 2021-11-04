// components
import Section from './components/Section';
import ProfileList from './components/ProfileList';
import FriendList from './components/FriendList';
import Statistics from './components/Statistics';
import Statistics2 from './components/Statistics2';
import TransactionHistory from './components/TransactionHistory';
// json
import users from './json/users.json';
import statisticalData from './json/statistical-data.json';
import animalsData from './json/animals-data.json';
import friends from './json/friends.json';
import transactions from './json/transactions.json';

export default function App() {
  return (
    <div>
      <Section title="Our team">
        <ProfileList users={users} />
      </Section>
      <Section title="Upload stats">
        <Statistics stats={statisticalData} />
      </Section>
      <Section>
        <Statistics stats={animalsData} />
      </Section>
      <Section>
        <Statistics2 stats={animalsData} />
      </Section>
      <Section title="Friends">
        <FriendList friends={friends} />
      </Section>
      <Section title="Transactions">
        <TransactionHistory items={transactions} />
      </Section>
    </div>
  );
}
