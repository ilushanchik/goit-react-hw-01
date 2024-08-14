import React from "react";
import userData from "./components/Profile/userData.json"
import Profile from "./components/Profile/Profile"
import friends from "./components/Profile/friends.json"
import FriendList from "./components/Profile/FriendList"
import transactions from "./components/Profile/transactions.json"
import TransactionHistory from "./components/Profile/TransactionHistory"
import Section from "./components/Section/Section";


const App = () => {
  return (
    <>
    <Section>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />  
      </Section>

     <Section>
       <FriendList friends={friends} />
      </Section>
<TransactionHistory items={transactions} />

  </>
  );
};

export default App;
