/* ============================================================
   FILE: js/data.js
   Central content store — single source of truth.
   ============================================================ */

window.JVA_DATA = {
  services: [
    {
      id: 'photography',
      icon: 'bi-camera',
      accent: 'peach',
      title: 'Photography',
      tagline: 'We capture details, emotions, and moments in high-definition stillness.',
      text: 'From family portraiture to grand wedding sessions, our images tell a compelling narrative.',
      applicableEvents: ['Weddings', 'Introductions', 'Schools', 'Birthdays', 'Studio Sessions (Portraits)', 'Softcopy Photoshoots'],
      packages: [
        { name: 'Photography - Silver Package', description: 'Photography package for small celebrations and intimate events.', price: 'UGX 500,000' },
        { name: 'Photography - Diamond Package', description: 'Photography package for polished event coverage and memorable moments.', price: 'UGX 1,000,000' },
        { name: 'Photography - Golden Package', description: 'Photography package for premium event coverage and cinematic memories.', price: 'UGX 1,500,000' },
        { name: 'Photography - Ultimate Package', description: 'Photography package for complete coverage of your most important celebrations.', price: 'UGX 2,000,000' },
        { name: 'Studio Portrait Session', description: 'Professional high-quality portraits or individual softcopy headshots in-studio.', price: 'UGX 200,000' },
        { name: 'Passport Express', description: 'Instant professional passport shooting and high-quality printing.', price: 'UGX 20,000' }
      ]
    },
    {
      id: 'videography',
      icon: 'bi-camera-reels',
      accent: 'rose',
      title: 'Videography',
      tagline: 'Cinematic filming and high-quality motion production.',
      text: 'We record every detail of your event, creating short videos and full documentaries with clear audio and creative angles.',
      applicableEvents: ['Weddings', 'Introductions', 'Schools', 'Other Celebrations'],
      packages: [
        { name: 'Standard Package', badge: 'VIDEO INCLUDED', description: 'Includes: Sticker Album, Photobook, Soft Copies, Short Video, 1 Camera, 3+ A3 Prints, 3+ A4 Prints. Great value choice.', price: 'UGX 1,000,000' },
        { name: 'Premium Package', badge: 'VIDEO INCLUDED', description: 'Includes: Photobook, Soft Copies, Full Video, 3 Cameras, 1 Drone, 3 A3 Prints, 3 A4 Prints. Elite event coverage.', price: 'UGX 1,500,000' },
        { name: 'Ultimate Package', badge: 'VIDEO INCLUDED', description: 'Includes: Sticker Album, Photobook, Soft Copies, Full Video, 3 Cameras, 1 Drone, 5 A3 Prints, 5 A4 Prints. The absolute complete coverage experience.', price: 'UGX 2,000,000' }
      ]
    },
    {
      id: 'decoration',
      icon: 'bi-flower1',
      accent: 'gold',
      title: 'Decoration',
      tagline: 'We design elegant spaces that elevate the atmosphere.',
      text: 'Our premium setup covers stage layout, light styling, floral configurations, and overall venue theme decoration.',
      applicableEvents: ['Weddings', 'Introductions', 'Okukyala'],
      packages: [
        { name: 'Wedding - Golden Package', description: 'Wedding decoration package: UGX 10M and above.', price: 'UGX 10,000,000' },
        { name: 'Wedding - Diamond Package', description: 'Wedding decoration package: UGX 5M - 10M.', price: 'UGX 5,000,000' },
        { name: 'Wedding - Silver Package', description: 'Wedding decoration package: UGX 1.5M - 5M.', price: 'UGX 1,500,000' },
        { name: 'Introduction - Gold Package', description: 'Introduction decoration package: UGX 10M and above.', price: 'UGX 10,000,000' },
        { name: 'Introduction - Diamond Package', description: 'Introduction decoration package: UGX 5M - 10M.', price: 'UGX 5,000,000' },
        { name: 'Introduction - Silver Package', description: 'Introduction decoration package: UGX 1.5M - 5M.', price: 'UGX 1,500,000' },
        { name: 'Pre-wed - Golden Package', description: 'Pre-wed decoration package: UGX 5M and above.', price: 'UGX 5,000,000' },
        { name: 'Pre-wed - Diamond Package', description: 'Pre-wed decoration package: UGX 2M - 5M.', price: 'UGX 2,000,000' },
        { name: 'Pre-wed - Silver Package', description: 'Pre-wed decoration package: UGX 500k - 2M.', price: 'UGX 500,000' },
        { name: 'Birthday Party - Golden Package', description: 'Birthday Party decoration package: UGX 1.5M - 5M.', price: 'UGX 1,500,000' },
        { name: 'Birthday Party - Diamond Package', description: 'Birthday Party decoration package: UGX 500k - 1.5M.', price: 'UGX 500,000' },
        { name: 'Birthday Party - Silver Package', description: 'Birthday Party decoration package: UGX 250k - 500k.', price: 'UGX 250,000' },
        { name: 'Baby Shower - Golden Package', description: 'Baby Shower decoration package: UGX 1.5M - 5M.', price: 'UGX 1,500,000' },
        { name: 'Baby Shower - Diamond Package', description: 'Baby Shower decoration package: UGX 700k - 1.5M.', price: 'UGX 700,000' },
        { name: 'Baby Shower - Silver Package', description: 'Baby Shower decoration package: UGX 250k - 700k.', price: 'UGX 250,000' }
      ]
    }
  ],

  gallery: [
    { id: 1,  service: 'photography', src: 'assets/Introduction.jpeg', alt: 'Couple at an introduction ceremony', caption: 'Introduction Celebration' },
    { id: 2,  service: 'photography', src: 'assets/introduction%20(2).jpeg', alt: 'Guests celebrating at an event', caption: 'Celebration Moments' },
    { id: 3,  service: 'photography', src: 'assets/introduction%20(4).jpeg', alt: 'Portrait at a decorated event', caption: 'Portrait Session' },
    { id: 4,  service: 'photography', src: 'assets/introduction%20(3).jpeg', alt: 'Couple portrait at an introduction ceremony', caption: 'Couple Portrait' },
    { id: 5,  service: 'photography', src: 'assets/photoshoots%20(2).jpeg', alt: 'Photographer capturing an event', caption: 'Behind the Camera' },
    { id: 6,  service: 'photography', src: 'assets/Founder.jpeg', alt: 'Founder portrait', caption: 'Founder Portrait' },
    { id: 7,  service: 'photography', src: 'assets/introduction%20(2).jpeg', alt: 'Event guests posing for a photograph', caption: 'Event Portraits' },
    { id: 8,  service: 'photography', src: 'assets/introduction%20(4).jpeg', alt: 'Woman posing at a celebration', caption: 'Celebration Portrait' },
    { id: 9,  service: 'photography', src: 'assets/AT%20WORK.jpeg', alt: 'Photographer working with a camera', caption: 'At Work' },
    { id: 10, service: 'photography', src: 'assets/photoshoots%20(2).jpeg', alt: 'Camera coverage at an event', caption: 'Event Coverage' },
    { id: 11, service: 'photography', src: 'assets/Introduction.jpeg', alt: 'Introduction ceremony portrait', caption: 'Ceremony Portrait' },
    { id: 12, service: 'photography', src: 'assets/introduction%20(3).jpeg', alt: 'Couple celebrating together', caption: 'Together in the Moment' }
  ],

  team: [
    {
      name: 'Julio Rivera',
      role: 'Founder & Lead Photographer',
      bio: 'Started the studio in 2013 with one camera and a lot of nerve. Julio still shoots every wedding personally and cries at every first dance.',
      image: 'assets/Founder.jpeg'
    },
    {
      name: 'Amara Okafor',
      role: 'Photographer',
      bio: 'Amara brings a calm, patient energy to family and newborn sessions. She has never met a toddler she couldn’t win over.',
      image: 'assets/introduction%20(4).jpeg'
    },
    {
      name: 'Liam Chen',
      role: 'Photographer & Editor',
      bio: 'Liam handles editorial and brand work, and edits every gallery by hand. He is quietly obsessed with colour grading.',
      image: 'assets/AT%20WORK.jpeg'
    },
    {
      name: 'Sofia Marchetti',
      role: 'Studio Manager',
      bio: 'Sofia is the person who replies to your emails, remembers your date, and makes sure nothing falls through the cracks. The studio would collapse without her.',
      image: 'assets/Introduction.jpeg'
    }
  ],

  testimonials: [
    {
      name: 'Maya & Tom',
      event: 'Riverside Wedding',
      quote: 'We were both so nervous about being photographed, but Julio made us forget the camera was even there. We laughed the whole time and the photos show it.',
      image: 'assets/introduction%20(2).jpeg'
    },
    {
      name: 'Elena R.',
      event: 'Personal Branding Session',
      quote: 'I have never liked photos of myself. These are the first ones I have ever actually wanted to share. That says everything.',
      image: 'assets/introduction%20(4).jpeg'
    },
    {
      name: 'The Henderson Family',
      event: 'Family Session',
      quote: 'Three kids, one very patient photographer, and somehow everyone is looking at the camera and smiling. We still don’t know how they did it.',
      image: 'assets/introduction%20(3).jpeg'
    },
    {
      name: 'Priya & Sam',
      event: 'Engagement Celebration',
      quote: 'The sneak peek arrived in 24 hours and we spent the whole evening looking at it. Worth every penny and then some.',
      image: 'assets/Introduction.jpeg'
    },
    {
      name: 'Loom & Clay',
      event: 'Brand Photography',
      quote: 'Our website finally looks like us. The images are warm, consistent and exactly the mood we wanted. Booked again for next season.',
      image: 'assets/photoshoots%20(2).jpeg'
    },
    {
      name: 'Nadia & Chris',
      event: 'Wedding',
      quote: 'The getting-ready photos are some of our favourites. Julio caught moments we didn’t even know were happening. Forever grateful.',
      image: 'assets/Founder.jpeg'
    }
  ]
};