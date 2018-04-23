// Knex Setup
const env = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[env];  
const knex = require('knex')(config);

let entries = [
  {
    author: 'Anna Fillmore',
    created: new Date(2018, 4, 20, 14, 0),
    photo: '/static/photos/falls.jpg',
    title: 'Falls',
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc."
  },
  {
    author: 'Emma Tanner',
    created: new Date(2018, 4, 19, 14, 0),
    photo: '/static/photos/autumn.jpg',
    title: 'Autumn in New Zealand',
    text: "Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. "
  },
  {
    author: 'Sarah Lowe',
    created: new Date(2018, 4, 18, 14, 0),    
    photo: '/static/photos/grand-canyon.jpg',
    title: 'My time in the Grand Canyon',
    text: "Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper. Nulla facilisi. "
  }
]

let deleteEntries = () => {
  return knex('entries').del();
}

let insertEntries = () => {
  let promises = [];
  entries.forEach(entry => {
    promises.push(knex('entries').insert(entry));
  });
  return Promise.all(promises);
}


deleteEntries().then(() => {
  return insertEntries();
}).then(() => {
  console.log("OK, entries inserted");
  knex.destroy();
  process.exit();
});

