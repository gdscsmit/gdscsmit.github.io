import { fetchFiles } from "./TeamImages";
let filesPromise = fetchFiles();

// define the data of the team members
filesPromise.then(files => {
  domainLeadsData = [
    {
      img: `${files[2].url}`,
      name: "Pooranjoy Bhattacharya",
      domain: "Web Development",
      twitter: "https://john",
      insta: "https://john",
      linkedin: "https://john",
    },
    {
      img: `${files[0].url}`,
      name: "Cloud Computing",
      domain: "Abhijnyan Das",
      twitter: "https://john",
      insta: "https://john",
      linkedin: "https://john",
    },
    {
      img: `${files[25].url}`,
      name: "Madhurjya Dasgupta",
      domain: "Cybersecurity",
      twitter: "https://john",
      insta: "https://john",
      linkedin: "https://john",
    },
    {
      img: `${files[26].url}`,
      name: "Rishav Krishnan",
      domain: "App Development",
      twitter: "https://john",
      insta: "https://john",
      linkedin: "https://john",
    },
    {
      img: `${files[23].url}`,
      name: "Shivam Sourav",
      domain: "AI/ML",
      twitter: "https://john",
      insta: "https://john",
      linkedin: "https://john",
    },
    {
      img: `${files[28].url}`,
      name: "Kuldeep Bora",
      domain: "UI/UX Design",
      twitter: "https://john",
      insta: "https://john",
      linkedin: "https://john",
    },
    {
      img: `${files[5].url}`,
      name: "Dhruv Bhutura",
      domain: "Public Relations",
      twitter: "https://john",
      insta: "https://john",
      linkedin: "https://john",
    },
  ];

  CoreTeamData = [
    {
      img: `${files[20].url}`,
      name: "Toshith Yadav",
      domain: "Web Development",
      twitter: "https://john",
      insta: "https://john",
      linkedin: "https://john",
    },
    {
      img: `${files[13].url}`,
      name: "Seedorf Rai",
      domain: "Web Development",
      twitter: "https://john",
      insta: "https://john",
      linkedin: "https://john",
    },
    {
      img: `${files[24].url}`,
      name: "Girish Sharma",
      domain: "Web Development",
      twitter: "https://john",
      insta: "https://john",
      linkedin: "https://john",
    },
    {
      img: `${files[32].url}`,
      name: "Madhurya Hait",
      domain: "Web Development",
      twitter: "https://john",
      insta: "https://john",
      linkedin: "https://john",
    },
    {
      img: `${files[9].url}`,
      name: "Sneha Supriya",
      domain: "AI/ML",
      twitter: "https://john",
      insta: "https://john",
      linkedin: "https://john",
    },
    {
      img: `${files[4].url}`,
      name: "Om Gupta",
      domain: "AI/ML",
      twitter: "https://john",
      insta: "https://john",
      linkedin: "https://john",
    },
    {
      img: `${files[1].url}`,
      name: "Mayur K T",
      domain: "AI/ML",
      twitter: "https://john",
      insta: "https://john",
      linkedin: "https://john",
    },
    {
      img: `${files[19].url}`,
      name: "Pratham Srivastava",
      domain: "AI/ML",
      twitter: "https://john",
      insta: "https://john",
      linkedin: "https://john",
    },
    {
      img: `${files[6].url}`,
      name: "Neha Sultan",
      domain: "AI/ML",
      twitter: "https://john",
      insta: "https://john",
      linkedin: "https://john",
    },
    {
      img: `${files[33].url}`,
      name: "Indraneel Das",
      domain: "Cybersecurity",
      twitter: "https://john",
      insta: "https://john",
      linkedin: "https://john",
    },
    {
      img: `${files[29].url}`,
      name: "Shayan Vatsa",
      domain: "Cybersecurity",
      twitter: "https://john",
      insta: "https://john",
      linkedin: "https://john",
    },
    {
      img: `${files[17].url}`,
      name: "Gunjan Chakrabartty",
      domain: "Cybersecurity",
      twitter: "https://john",
      insta: "https://john",
      linkedin: "https://john",
    },
    {
      img: `${files[12].url}`,
      name: "Ishaan S. Oshima",
      domain: "Cybersecurity",
      twitter: "https://john",
      insta: "https://john",
      linkedin: "https://john",
    },
    {
      img: `${files[27].url}`,
      name: "Manaswi Jha",
      domain: "UI/UX Design",
      twitter: "https://john",
      insta: "https://john",
      linkedin: "https://john",
    },
    {
      img: `${files[31].url}`,
      name: "Priyanjana Paul",
      domain: "UI/UX Design",
      twitter: "https://john",
      insta: "https://john",
      linkedin: "https://john",
    },
    {
      img: `${files[3].url}`,
      name: "Sneha Seal",
      domain: "Cloud Computing",
      twitter: "https://john",
      insta: "https://john",
      linkedin: "https://john",
    },
    {
      img: `${files[15].url}`,
      name: "Deepak Manda",
      domain: "Cloud Computing",
      twitter: "https://john",
      insta: "https://john",
      linkedin: "https://john",
    },
    {
      img: `${files[7].url}`,
      name: "Prantor J. Bharadwaj",
      domain: "Cloud Computing",
      twitter: "https://john",
      insta: "https://john",
      linkedin: "https://john",
    },
  ];

  leadImg = `${files[34].url}`;
});


export let domainLeadsData = [];
export let CoreTeamData = [];
export let leadImg = '';