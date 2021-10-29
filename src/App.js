import ProfileList from './components/ProfileList';
import users from './json/users.json';
import Section from './components/Section';

export default function App() {
  return (
    <div>
      <Section title="Our team">
        <ProfileList users={users} />
      </Section>
    </div>
  );
}
