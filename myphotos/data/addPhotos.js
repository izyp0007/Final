// Knex Setup
const env = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[env];  
const knex = require('knex')(config);

let photos = [
  { path: '/photos/grass.jpg',
    description: 'There are no snakes in that grass. I think.',
    attribution: 'Aris Gionis',
    original: 'https://www.flickr.com/photos/aris_gionis/2486451369/in/photolist-4MHHnc-9QMSG1-jA76uk-gwWqzr-gwTJZ1-2YWRbK-dm2Wz8-2YWQXa-nn69RD-yLUNVe-nan35P-8T25jc-9gAGyt-9gFZ3h-k98KEL-HZi9Q9-a9nbDK-oVbgi3-cB22Yu-9iWop3-nQ6zGH-9Bi438-74C5kr-aPceC-dQeqAL-nNBMbS-21TWLWL-diuDYm-cWFriG-24aRn1G-EGWvTZ-5PhMUD-9jzUAj-57v82T-dS1f5p-Eofxc-SqudM-bd2oug-gwVVnw-Gt3gav-ptSZSy-4b81H1-ahXHgB-5KCSgd-d2a44m-5KDeRf-f3ukE1-dnqEnw-d2a2Ny-oe5Ucg'
  },
  { path: '/photos/room.jpg',
    description: 'If you keep adding layers of paint to opposite walls, how many layers are needed until the walls touch?',
    attribution: 'Milestone Management',
    original: 'https://www.flickr.com/photos/milestonemanagement/25515592797/in/photolist-ESJ5MK-25hHzGN-9Y8Kj3-ZUrj48-RND2eC-MaAib7-TSmiVG-248dM7o-RLxy4y-238EuD7-GyW76e-ZKeuZq-naDgAJ-22kjVRF-214EFZx-p5DpWf-238fkxm-WCuCNj-SdfQ3L-WoB1J4-aMWqeR-25YTLeZ-brd3vY-ZTj97t-HLcnXG-25g2HXm-ZSAszF-SrpQCY-YRKz6y-SajyaM-fq2cb5-ZJa5PC-S6H1Vw-EHKudz-D4HUEz-UquNJg-23USMwG-XwhDTC-VNaKxQ-Fxr2Ms-26arWwt-pvzxN6-BKMz8U-f7eW6G-GH86kP-cfrxdL-CyEx7F-U7ArTN-23dvsMb-TkwR8b'
  },
  { path: '/photos/office.jpg',
    description: 'I have only one criteria for our new office space. It needs a mailbox built right into the wall.',
    attribution: 'denisbin',
    original: 'https://www.flickr.com/photos/82134796@N03/39463418854/in/photolist-238fkxm-WCuCNj-SdfQ3L-WoB1J4-aMWqeR-25YTLeZ-brd3vY-ZTj97t-HLcnXG-25g2HXm-ZSAszF-SrpQCY-YRKz6y-SajyaM-fq2cb5-ZJa5PC-S6H1Vw-EHKudz-D4HUEz-UquNJg-23USMwG-XwhDTC-VNaKxQ-Fxr2Ms-26arWwt-pvzxN6-BKMz8U-f7eW6G-GH86kP-cfrxdL-CyEx7F-U7ArTN-23dvsMb-TkwR8b-22gFJ8x-pb4Wcq-ScHwMP-GPPTP4-21GxBwg-J5BJUf-brcR9N-245FnC1-EodbrP-GyW6hF-R4Skp4-rpktUz-ePNjVU-Fdtaxr-24QQ4Nz-21t2T9X'
  },
  { path: '/photos/pool.jpg',
    description: 'The kids said they wanted a house with a swimming pool in the backyard.',
    attribution: 'Andrew',
    original: 'https://www.flickr.com/photos/arg_flickr/41087831562/in/photolist-25AMSR1-ESJ5MK-25hHzGN-9Y8Kj3-ZUrj48-RND2eC-MaAib7-TSmiVG-248dM7o-RLxy4y-238EuD7-GyW76e-ZKeuZq-naDgAJ-22kjVRF-214EFZx-p5DpWf-238fkxm-WCuCNj-SdfQ3L-WoB1J4-aMWqeR-25YTLeZ-brd3vY-ZTj97t-HLcnXG-25g2HXm-ZSAszF-SrpQCY-YRKz6y-SajyaM-fq2cb5-ZJa5PC-S6H1Vw-EHKudz-D4HUEz-UquNJg-23USMwG-XwhDTC-VNaKxQ-Fxr2Ms-26arWwt-pvzxN6-BKMz8U-f7eW6G-GH86kP-cfrxdL-CyEx7F-U7ArTN-23dvsMb'
  },
  { path: '/photos/dogs.jpg',
    description: 'Tough luck kid. We have the balloon now.',
    attribution: 'Rodrigo Valla',
    original: 'https://www.flickr.com/photos/pdelaignorancia/25414018257/in/photolist-EHKudz-D4HUEz-UquNJg-23USMwG-XwhDTC-VNaKxQ-Fxr2Ms-26arWwt-pvzxN6-BKMz8U-f7eW6G-GH86kP-cfrxdL-CyEx7F-U7ArTN-23dvsMb-TkwR8b-22gFJ8x-pb4Wcq-ScHwMP-GPPTP4-21GxBwg-J5BJUf-brcR9N-245FnC1-EodbrP-GyW6hF-R4Skp4-rpktUz-ePNjVU-Fdtaxr-24QQ4Nz-21t2T9X-Z8JFmA-RjyoY1-23xsxfu-E4EZEu-23yiThy-J9qAw1-24PVE4K-6oVRRR-WsrVzw-ErdXQ6-21N3BkR-UoG19q-22wBmM9-GrnnoB-HVPWUC-25m333Z-ZueSx4'
  }
]

let deletePhotos = () => {
  return knex('photos').del();
}

let insertPhotos = () => {
  let promises = [];
  photos.forEach(photo => {
    promises.push(knex('photos').insert(photo));
  });
  return Promise.all(promises);
}


deletePhotos().then(() => {
  return insertPhotos();
}).then(() => {
  console.log("OK, photos inserted");
  knex.destroy();
  process.exit();
});

