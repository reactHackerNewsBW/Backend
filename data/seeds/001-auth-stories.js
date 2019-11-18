
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('auth-stories').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('auth-stories').insert([
        {title: 'Amtrak Could Turn a Profit in 2020 for the First Time Ever', url: "https://www.wbur.org/hereandnow/2019/11/15/amtrak-profit-train-ceo-richard-anderson"},
        {title: 'Turkish coffee destroyed an empire', url: "https://www.1843magazine.com/food-drink/world-in-a-dish/how-turkish-coffee-destroyed-an-empire"},
        {title: 'A foundation course in reading German', url: "A foundation course in reading German"},
        {title: 'Writing userspace USB drivers for abandoned devices', url: "https://blog.benjojo.co.uk/post/userspace-usb-drivers"},
        {title: 'Why 50 Ohms?', url: "https://www.microwaves101.com/encyclopedias/why-fifty-ohms"},
        {title: 'Show HN: Open-Source Alternative to Intercom, Drift, Zendesk, FreshChat', url: "https://github.com/chatwoot/chatwoot"},
        {title: 'Beating C with Common Lisp', url: "http://verisimilitudes.net/2019-11-12"},
        {title: 'Tetrachromats: people who see colors invisible to most of us', url: "https://www.bbc.com/future/article/20140905-the-women-with-super-human-vision"},
        {title: 'Microsoft Incorporates Graphcore AI Chips in Azure Cloud ', url: "https://www.eetimes.com/document.asp?doc_id=1335297"},
        {title: 'Machine Learning Can Help Unlock the World of Ancient Japan', url: "https://thegradient.pub/machine-learning-ancient-japan/"},
        {title: 'A Woman Who Recorded 70k Tapes of American News', url: "https://www.wbur.org/hereandnow/2019/11/14/recorder-the-marion-stokes-project"},
        {title: `Let's Encrypt certificate issuance down`, url: "https://letsencrypt.status.io/pages/incident/55957a99e800baa4470002da/5dd157fd53c977075541890a"},
        {title: 'How do you crack the code to a lost ancient script?', url: "https://pursuit.unimelb.edu.au/articles/how-do-you-crack-the-code-to-a-lost-ancient-script"},
        {title: 'LidarView: The ParaView Lidar App', url: "https://www.paraview.org/lidarview/"},
        {title: 'PSA: Pokemon Sword/Shield causes Roku devices on the same network to crash and enter a boot loop', url: "https://www.reddit.com/r/pokemon/comments/dxc5yg/psa_pokemon_swordshield_causes_roku_devices_on/"},
        {title: 'Remove almost all online garbage using Dnsmasq', url: "https://github.com/notracking/hosts-blocklists"},
        {title: 'Podman and Buildah for Docker Users', url: "https://developers.redhat.com/blog/2019/02/21/podman-and-buildah-for-docker-users/"},
        {title: 'Capture the Flag Competition Aims to Trace Missing Persons', url: "https://www.infosecurity-magazine.com/news/competition-aims-to-trace-missing/"},
        {title: 'Lessons from APL, a “lost” language', url: "https://blog.benjojo.co.uk/post/2014-05-26-APL-the-lost-language.md"},
        {title: 'NUVIA: New Server CPU Startup Going After Intel and AMD', url: "https://www.anandtech.com/show/15115/nuvia-breaks-cover-new-startup-to-take-on-datacenter-cpu-market"},
        {title: 'TEST', url: "TEST"}
      ]);
    });
};
