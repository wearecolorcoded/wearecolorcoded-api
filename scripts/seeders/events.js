'use strict';

module.exports = {
  model: 'Event',
  data: [
    {
      name: 'CREATE AND COFFEE',
      details: 'Come through, work on personal projects, connect with creatives in or out of tech.',
      startDateTime: new Date('September 13, 2017 18:30'),
      endDateTime: new Date('September 13, 2017 20:00'),
      location: {
        name: 'ISL',
        address: '641 S ST NW, FL 1, WASHINGTON, DC 20001',
      },
    },
    {
      name: 'CROSSROADS: INTERSECTIONAL FEMINISM AND UX DESIGN',
      details: `Back by popular demand and taught by <a href="https://twitter.com/@superbhatt">Radhika Bhatt</a>, this workshop will discuss the tenets of user experience design and how they relate to the theory of intersectional feminism. Get ready to learn UX, meet new people, and problem solve!`,
      startDateTime: new Date('September 13, 2017 18:30'),
      endDateTime: new Date('September 13, 2017 20:00'),
      location: {
        name: 'COLONY CLUB',
        address: '3118 GEORGIA AVE NW, WASHINGTON, DC 20010',
      },
    },
    {
      name: 'MEETUP: CREATE AND COFFEE',
      details: 'Come through, work on personal projects, connect with creatives and tech folks. Free coffee and tea + brunch starts at 10:30am.',
      startDateTime: new Date('August 12, 2017 09:00'),
      endDateTime: new Date('August 12, 2017 12:00'),
      location: {
        name: 'LOCALE WORKSPACE',
        address: '1320 H ST NE, WASHINGTON, DC 20002',
      },
    },
    {
      name: 'CROSSROADS: INTERSECTIONAL FEMINISM AND UX DESIGN',
      details: `Taught by <a href="https://twitter.com/@superbhatt">Radhika Bhatt</a>, this workshop will discuss the tenets of user experience design and how they relate to the theory of intersectional feminism. Get ready to learn UX, meet new people, and problem solve!`,
      startDateTime: new Date('August 9, 2017 18:30'),
      endDateTime: new Date('August 9, 2017 20:00'),
      location: {
        name: 'ISL',
        address: '641 S ST NW, FL 1, WASHINGTON, DC 200010',
      },
    },
    {
      name: 'WORKSHOP: INTERVIEW PREP',
      details: `Stay sharp and join us on July 25th for a mock technical interview. Lead engineers will walk us through interview questions and problems. Open to software engineers of all levels.`,
      startDateTime: new Date('July 25, 2017 18:30'),
      endDateTime: new Date('July 25, 2017 20:00'),
      location: {
        name: 'VOX MEDIA',
        address: '1201 CONNECTICUT AVE NW, FL 12, WASHINGTON, DC 20036',
      },
      partners: [
        {
          name: 'Black Code Collective',
          URL: 'https://www.meetup.com/Black-Code-Collective/',
        },
        {
          name: 'VoxMedia',
          URL: 'https://voxmedia.com',
        },
      ],
    },
    {
      name: 'PANEL: HIRING IN TECH & EQUITABLE PRACTICES',
      details: `Join us and AIGA-DC as our panelists discuss hiring and creating safe workspaces in tech.`,
      startDateTime: new Date('April 27, 2017 19:00'),
      endDateTime: new Date('April 27, 2017 20:30'),
      location: {
        name: 'VOX MEDIA',
        address: '1201 CONNECTICUT AVE NW, FL 12, WASHINGTON, DC 20036',
      },
      partners: [
        {
          name: 'AIGA-DC',
          URL: 'https://dc.aiga.org/',
        },
      ],
      sponsors: [
        {
          name: 'VoxMedia',
          URL: 'https://voxmedia.com',
        },
      ],
    },
    {
      name: 'COLOR CODED UNHACKATHON',
      details: `A weekend of stress-free collaboration, creativity, and self-care.`,
      startDateTime: new Date('November 15, 2017 10:00'),
      endDateTime: new Date('November 16, 2017 16:00'),
      location: {
        name: 'ISL',
        address: '641 S ST NW, FL 1, WASHINGTON, DC 20001',
      },
      partners: [
        {
          name: 'VoxMedia',
          URL: 'https://voxmedia.com',
        },
      ],
      sponsors: [
        {
          name: 'VoxMedia',
          URL: 'https://voxmedia.com',
        },
        {
          name: 'General Assembly',
          URL: 'https://generalassemb.ly/',
        },
        {
          name: '&pizza',
          URL: 'https://andpizza.com/',
        },
        {
          name: 'Maketto',
          URL: 'http://maketto1351.com/',
        },
      ],
      recapURL: 'https://vimeo.com/195344837',
    },
    {
      name: 'DESIGN + CSS WORKSHOP',
      details: `Self-love and self-empowerment embedded in design and code.`,
      startDateTime: new Date('February 18, 2017 10:00'),
      endDateTime: new Date('February 19, 2017 16:00'),
      location: {
        name: 'GA DC',
        address: '1133 15TH ST NW, WASHINGTON, DC 20005',
      },
      partners: [
        {
          name: 'AIGA-DC',
          URL: 'https://dc.aiga.org/',
        },
      ],
      sponsors: [
        {
          name: 'VoxMedia',
          URL: 'https://voxmedia.com',
        },
        {
          name: 'General Assembly',
          URL: 'https://generalassemb.ly/',
        },
      ],
      recapURL: 'https://www.facebook.com/wearecolorcoded/photos/?tab=album&album_id=1290425024334515',
    },
    {
      name: 'WORKSHOP: GAME DAY',
      details: `Video game building workshop + friendly Mario Kart tournament with pizza and beverages! Coffee and snacks all day.`,
      startDateTime: new Date('July 29, 2017 9:00'),
      endDateTime: new Date('July 29, 2017 17:00'),
      location: {
        name: 'ISL',
        address: '641 S ST NW, FL 1, WASHINGTON, DC 20001',
      },
      partners: [
        {
          name: 'TAG LABS',
          URL: 'http://taglabs.org/',
        },
        {
          name: 'ISL',
          URL: 'https://isl.co/',
        },
      ],
      sponsors: [
        {
          name: 'VoxMedia',
          URL: 'https://voxmedia.com',
        },
        {
          name: 'General Assembly',
          URL: 'https://generalassemb.ly/',
        },
      ],
      recapURL: 'https://www.facebook.com/wearecolorcoded/photos/?tab=album&album_id=1290425024334515',
    },
    {
      name: 'Unhackathon: Design Thinking w/ IBM and other workshops',
      type: 'Unhackathon',
      details: `Color Coded and IBM are hosting a one day event that’ll mix learning, creating, wellness, and overall good vibes, while empowering women founders, creatives, and ideators.`,
      location: {
        name: 'ISL',
        address: '641 S ST NW, FL 1, WASHINGTON, DC 20001',
      },
      partners: [
        {
          name: 'TAG LABS',
          URL: 'http://taglabs.org/',
        },
        {
          name: 'ISL',
          URL: 'https://isl.co/',
        },
      ],
      sponsors: [
        {
          name: 'VoxMedia',
          URL: 'https://voxmedia.com',
        },
        {
          name: 'General Assembly',
          URL: 'https://generalassemb.ly/',
        },
      ],
      recapURL: 'https://www.facebook.com/wearecolorcoded/photos/?tab=album&album_id=1290425024334515',
      TBD: true,
      imageURL: 'https://dl.dropboxusercontent.com/s/87s0y5onna94uua/blue2x1.jpg?dl=0',
    },
  ],
};
