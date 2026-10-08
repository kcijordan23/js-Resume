// ---------------------------------------------------------------------------
// All the words on the site live in this one file.
// Edit the text here and every page updates — you shouldn't need to touch
// the page or component files to change your content.
//
// Anything marked "TODO" is a placeholder that still needs your real details.
// Leave a field as "" (or an empty list []) to hide it on the site.
// ---------------------------------------------------------------------------

export const site = {
  name: "Christian Adamson",
  initials: "FS", // shown in the round logo at the top of every page
  company: "FluidSenses Ltd",

  // TODO: confirm this is how you want to describe yourself
  role: "Cloud & Infrastructure Engineer",

  // Used by search engines and link previews
  description:
    "Christian Adamson — director of FluidSenses Ltd. Cloud infrastructure, automation and Microsoft 365.",

  email: "cadamson@fluidsenses.co.uk",

  // Put your CV in the /public folder (e.g. public/cv.pdf) and set this to "/cv.pdf".
  // While it's empty the "Download CV" button stays hidden.
  cvUrl: "",

  social: {
    github: "https://github.com/kcijordan23",
    linkedin: "", // TODO: paste your LinkedIn profile URL to show the icon
  },
};

export const home = {
  headline: "Building Reliable Cloud Infrastructure That Just Works.",
  // TODO: rewrite in your own words
  intro:
    "I design, automate and look after cloud infrastructure on Microsoft Azure — from Terraform and Bicep deployments to serverless APIs and everyday automation. Have a look at some of the things I've built.",
};

export const about = {
  headline: "Infrastructure As Code, Built To Last.",
  // TODO: rewrite in your own words — each string is one paragraph
  bio: [
    "I'm Christian Adamson, director of FluidSenses Ltd in London. I work on the plumbing that keeps modern businesses running: cloud platforms, networks, identity and the automation that ties them together.",
    "I like infrastructure that is written down as code, deployed the same way every time and easy for the next person to understand. Most of my work lives in Microsoft Azure and Microsoft 365, with Terraform, Bicep and GitHub Actions doing the heavy lifting.",
  ],

  // Shown as tags in the Skills section — add or remove freely
  skills: [
    "Microsoft Azure",
    "Terraform",
    "Bicep",
    "Azure Functions",
    "GitHub Actions",
    "C# / .NET",
    "Microsoft 365",
    "Networking",
    "Next.js",
    "Tailwind CSS",
  ],

  // Newest first. Copy a block to add another job.
  experience: [
    {
      position: "Director",
      company: "FluidSenses Ltd",
      companyLink: "",
      time: "TODO: start year – Present",
      place: "London, UK",
      work: "TODO: one or two sentences on what you do through FluidSenses — the kind of clients, projects and results.",
    },
    // {
    //   position: "Job title",
    //   company: "Company name",
    //   companyLink: "https://company-website.com",
    //   time: "2020 – 2023",
    //   place: "London, UK",
    //   work: "What you did there and what you achieved.",
    // },
  ],

  // Newest first. Leave the list empty to hide the Education section.
  education: [
    // {
    //   type: "Certification or degree",
    //   time: "2023",
    //   place: "Institution",
    //   info: "Short description.",
    // },
  ],
};

export const projects = {
  headline: "Things I've Built.",
  list: [
    {
      featured: true,
      type: "Serverless API",
      title: "Serverless Resume API on Azure",
      summary:
        "An HTTP-triggered Azure Function written in C# that serves a résumé as JSON from Blob Storage. Infrastructure is defined in Bicep and deployed through a GitHub Actions pipeline, with a ready-made dev container for Codespaces.",
      tags: ["Azure Functions", "C# / .NET", "Blob Storage", "Bicep", "GitHub Actions"],
      img: "/images/projects/serverless-resume-api.png",
      github: "https://github.com/kcijordan23/fluid-serverless-resume-api",
      link: "",
    },
    {
      type: "Infrastructure as Code",
      title: "Azure Linux VM with Terraform",
      summary:
        "A complete Azure environment from scratch: resource group, virtual network and subnet, network security group and rules, public IP, network interface and a Linux virtual machine with custom data and SSH templates.",
      tags: ["Terraform", "Azure", "Networking", "Linux"],
      img: "",
      github: "https://github.com/kcijordan23/Terraformtest",
      link: "",
    },
    {
      type: "Infrastructure as Code",
      title: "Static Website Hosting with Terraform",
      summary:
        "Terraform that provisions an Azure Storage account configured for static website hosting and uploads the site's index page to the $web container.",
      tags: ["Terraform", "Azure Storage"],
      img: "",
      github: "https://github.com/kcijordan23/Terraform_Storage-Account",
      link: "",
    },
    {
      type: "Website",
      title: "This Website",
      summary:
        "My personal site, built with Next.js, Tailwind CSS and Framer Motion, with light and dark modes and all content kept in a single file.",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
      img: "",
      github: "https://github.com/kcijordan23/js-Resume",
      link: "https://kcijordan23.github.io/js-Resume/",
    },
  ],
};
