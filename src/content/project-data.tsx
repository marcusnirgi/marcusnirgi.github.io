import type { ReactNode } from "react";

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  name: string;
  description: string;
  details: ReactNode;
  image: string;
  url: string;
  links?: ProjectLink[];
  category: string;
  tags: string[];
};

const projects: Project[] = [
  {
    slug: "openwrt-tp-link-archer",
    name: "OpenWRT TP-Link Archer",
    description:
      "Flashed OpenWrt onto a bridge-mode TP-Link Archer router, turning it into a dedicated switch with network-wide ad blocking and per-device bandwidth throttling.",
    details: (
      <>
        <p>
          The TP-Link Archer in my flat was sitting in bridge mode doing very
          little. Rather than let it pretend to be a router, I flashed OpenWrt
          and gave it a single job: be an excellent switch that the rest of the
          household never has to think about.
        </p>
        <p>
          It is not a second router. It does not run its own network, hand out
          its own addresses, or compete with the main gateway. It is
          deliberately dumb in the ways that would cause confusion and
          deliberately clever in the ways that are invisible: DNS based ad
          blocking for everything behind it, and bandwidth throttling rules
          scoped to specific devices in the house.
        </p>
        <p>
          The throttling is the interesting part. Instead of one blanket limit,
          individual devices can be shaped on their own, so a device that is
          saturating the line gets held back without punishing everyone else.
          Everything is configured once and then left alone, which is exactly
          the point of a good piece of home infrastructure.
        </p>
      </>
    ),
    image: "openwrt_archer.svg",
    url: "https://openwrt.org/",
    links: [{ label: "openwrt.org", href: "https://openwrt.org/" }],
    category: "Infrastructure",
    tags: ["OpenWrt", "Networking", "Linux", "DNS Filtering", "QoS"],
  },
  {
    slug: "koppelbox",
    name: "KoppelBox",
    description:
      "Turned a ThinkCentre M91p into a PS5-style console for my younger siblings, running Void Linux with glibc and runit, a lightweight window manager, the Pegasus frontend, and Steam plus Lutris.",
    details: (
      <>
        <p>
          KoppelBox is a ThinkCentre M91p that refused to become e-waste. It now
          lives under a TV as a console for my younger siblings, which means the
          entire system has to feel like a PS5: turn it on, get a catalogue,
          pick a game, play. No login prompt, no desktop, no configuration
          screen anyone has to understand.
        </p>
        <p>
          The base is Void Linux with glibc and runit. Void is small, starts
          fast, and stays out of the way, and the glibc variant is what makes
          Steam and Lutris reliably work rather than fighting for compatibility
          on musl. runit means boot is a short list of services instead of a
          system that negotiates with itself first.
        </p>
        <p>
          On top of that sits an extremely lightweight window manager and the
          Pegasus frontend, a controller-friendly game launcher that boots
          straight into a full-screen shelf of box art. Behind Pegasus, Steam
          and Lutris do the actual work: Steam for the modern catalogue, Lutris
          for the older games that need their own runner and patches.
        </p>
        <p>
          The hard part was never performance. It was designing a machine that a
          child can operate unsupervised and cannot accidentally break, with a
          single controller and no keyboard in sight.
        </p>
      </>
    ),
    image: "koppelbox.svg",
    url: "https://voidlinux.org/",
    links: [
      { label: "voidlinux.org", href: "https://voidlinux.org/" },
      { label: "pegasus-frontend.org", href: "https://pegasus-frontend.org/" },
    ],
    category: "Gaming",
    tags: ["Void Linux", "Steam", "Lutris", "Pegasus", "Self-Hosted"],
  },
  {
    slug: "sourcelib",
    name: "SourceLib",
    description: "Source Engine asset library",
    details: (
      <>
        <p>
          SourceLib is a browsable library of Source Engine assets, built for
          people who spend their time inside Garry&apos;s Mod and other Source
          games and are tired of hunting through decompiled VPK archives just to
          find one model or texture they half-remember.
        </p>
        <p>
          Rather than dumping raw files, it indexes assets and exposes them with
          the metadata that actually matters: what game or addon they came from,
          how they were intended to be used, and previews so you can tell a
          low-poly prop from a hero asset at a glance.
        </p>
        <p>
          It started as a tool for my own Garry&apos;s Mod work and grew into
          something reusable. Keeping it as a standalone library means the same
          asset layer can back whatever I build on top of it later.
        </p>
      </>
    ),
    image: "sourcelib.png",
    url: "https://github.com/marcusnirgi/sourcelib",
    category: "Library",
    tags: ["Lua", "Source Engine", "Garry's Mod", "Asset Pipeline"],
  },
  {
    slug: "invendor-gravity",
    name: "Invendor Gravity",
    description: "Weight-scaling cabinet by Invendor",
    details: (
      <>
        <p>
          Invendor Gravity is a warehouse dispensing cabinet built around a
          simple idea: instead of someone walking the aisles to collect parts,
          the shelf comes to them, delivered by weight rather than by manual
          picking.
        </p>
        <p>
          Each shelf holds bins of small components, fasteners, and consumables.
          The cabinet tracks what has been taken by weighing what remains, which
          keeps inventory accurate without barcodes, scanners, or a person
          entering counts by hand.
        </p>
        <p>
          My work on it was on the front end of the product: the interface
          people actually see and touch, plus the product design that sits
          around it. The constraint that shaped everything was that it had to be
          obvious to use in thirty seconds by someone who has never operated a
          vending system before.
        </p>
      </>
    ),
    image: "invendor_gravity.webp",
    url: "https://invendor.com/gravity-cabinet/",
    category: "Hardware",
    tags: ["Product Design", "UI", "Industrial", "Web"],
  },
  {
    slug: "taskly",
    name: "Task.ly",
    description: "Task management mobile app",
    details: (
      <>
        <p>
          Task.ly is a task manager built around a daily rhythm instead of a
          never-ending backlog. Most to-do apps try to hold your entire life at
          once and end up as a wall of guilt; this one keeps the surface small
          on purpose.
        </p>
        <p>
          Tasks are grouped by when they matter (today, tomorrow, or a specific
          date), and each task can carry a free-form notes field for the context
          you would otherwise forget: what &quot;walk the dog&quot; actually
          means today.
        </p>
        <p>
          It is my attempt at the cleanest possible flow for adding and
          completing a task on a phone. Adding something should take a few
          seconds and never require opening a settings screen first.
        </p>
      </>
    ),
    image: "taskly_1.png",
    url: "https://github.com/marcusnirgi/taskly",
    category: "App",
    tags: ["Mobile", "Task Management", "UI/UX"],
  },
  {
    slug: "super-pumpkin",
    name: "Super Pumpkin",
    description: "2D platformer game",
    details: (
      <>
        <p>
          Super Pumpkin is a small 2D platformer made for a game jam, built in
          deliberately low resolution with hard edges and chunky sprites. It is
          a nod to the kind of games I grew up with rather than an attempt to do
          anything modern.
        </p>
        <p>
          Jam constraints shaped it heavily: a fixed tile grid, a handful of
          mechanics, and a short loop that you can finish in one sitting. Levels
          are made of jumping, spikes, and blocks that break when you hit them
          from below.
        </p>
        <p>
          Building it end to end, art included, in jam time taught me more about
          scoping than most long-running projects ever did.
        </p>
      </>
    ),
    image: "superpumpkin.png",
    url: "https://github.com/marcusnirgi/super-pumpkin",
    category: "Game",
    tags: ["Game Jam 2023", "Pixel Art", "2D Platformer"],
  },
  {
    slug: "luv3d2d",
    name: "Luv3D2D",
    description: "Garry's Mod rendering library",
    details: (
      <>
        <p>
          Luv3D2D is a Lua rendering library for Garry&apos;s Mod that makes it
          practical to draw things in 3D space while keeping a 2D mindset. The
          engine gives you both, and this library is the missing layer between
          them.
        </p>
        <p>
          It handles the tedious parts of drawing in the 3D2D render pass:
          setting up the view, translating and rotating into world space,
          scaling to a sensible pixel density, and tearing it all down cleanly
          afterward so it composes without leaking state between draws.
        </p>
        <p>
          It is the library I reach for whenever I want a screen element that
          lives in the world, like a signboard, a floating health bar, or an
          in-world interface, instead of another HUD glued to the screen edge.
        </p>
      </>
    ),
    image: "luv3d2d.png",
    url: "https://github.com/marcusnirgi/luv3d2d",
    category: "Library",
    tags: ["Lua", "3D Rendering", "Garry's Mod", "Open Source"],
  },
  {
    slug: "tthk-api",
    name: "TTHK API",
    description: "API for viewing TTHK timetable data",
    details: (
      <>
        <p>
          TTHK API is an unofficial API over the timetable data from Tallinn
          School of Service and Trade. The school publishes schedules in a
          format that is fine for a human and hostile for a program, so this
          wraps it into something predictable.
        </p>
        <p>
          Endpoints expose timetables and timetable changes as JSON, including
          the group, the date range, the raw text of the entry, and whether an
          entry has been hidden by the school. That last flag matters more than
          it sounds: it is how you tell a cancelled lesson from a scheduled one.
        </p>
        <p>
          The API ships an OpenAPI specification so client generators and
          interactive docs both work out of the box, and it is MIT licensed.
        </p>
      </>
    ),
    image: "tthkapi_1.png",
    url: "https://github.com/marcusnirgi/tthk-api",
    category: "API",
    tags: ["TypeScript", "REST API", "OpenAPI", "MIT"],
  },
];

export { projects };
