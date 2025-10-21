class YouTubeChannel {
  constructor() {
    this.subscribers = [];
  }

  totalSubscribers(){
     return `subscribers list - ${this.subscribers.map(sub => sub.name).join(', ')}`;
  }

  subscribe(user) {
    this.subscribers.push(user);
    user.update(`${user.name} subscribe the channel`);
  }
  unsubscribe(user) {
    this.subscribers = this.subscribers.filter((sub) => sub !== user);
    user.update(`${user.name} unsubscribe the channel`);
  }
  notify(message) {
    this.subscribers.forEach(sub => sub.update(message))
  }
}

class User {
  constructor(name) {
    this.name = name;
  }

  update(data) {
    console.log(`${this.name}, ${data}`);
  }
}

const bidhanChannel = new YouTubeChannel();
const user1 = new User("Ram");
const user2 = new User("Hari");

bidhanChannel.subscribe(user1);
bidhanChannel.subscribe(user2);
bidhanChannel.notify("We are going live...");

const totalSubs = bidhanChannel.totalSubscribers();
console.log(totalSubs);


