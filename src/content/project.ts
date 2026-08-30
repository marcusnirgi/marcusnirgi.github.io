export type Project = {
  name: string;
  description: string;
  image: string;
  url: string;
};

export const projects: Project[] = [
  {
    name: "SourceLib",
    description: "Source Engine asset library",
    image: "sourcelib.png",
    url: "https://github.com/marcusnirgi/sourcelib",
  },
  {
    name: "Invendor Gravity",
    description: "Weight-scaling cabinet by Invendor",
    image: "invendor_gravity.webp",
    url: "https://invendor.com/gravity-cabinet/",
  },
  {
    name: "Task.ly",
    description: "Task management mobile app",
    image: "taskly_1.png",
    url: "https://github.com/marcusnirgi/taskly",
  },
  {
    name: "Super Pumpkin",
    description: "2D platformer game",
    image: "superpumpkin.png",
    url: "https://github.com/marcusnirgi/super-pumpkin",
  },
  {
    name: "Luv3D2D",
    description: "Garry's Mod Rendering Library",
    image: "luv3d2d.png",
    url: "https://github.com/marcusnirgi/luv3d2d",
  },
  {
    name: "TTHK API",
    description: "API for viewing TTHK timetable data",
    image: "tthkapi_1.png",
    url: "https://github.com/marcusnirgi/tthk-api",
  },
];
