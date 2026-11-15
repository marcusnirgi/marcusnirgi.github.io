---
title: "Why I Switched to Void Linux"
description: "Why I moved away from mainstream distros and systemd in search of a simpler, more transparent setup."
pubDate: 2026-11-14
---

I have been using Linux for years now. Like a lot of people, my journey started with Linux Mint, moved to Ubuntu, then KDE-based setups, and eventually landed on CachyOS paired with the Niri scrollable tiling window manager. That setup was great, and I settled into it for quite a while.

Eventually, though, I developed an itch to understand Linux on a deeper level.

## The Problem with the Monolith

For as long as I have used Linux, systemd was just there. I worked with it, wrote basic service files, and accepted it as the default. But the more I learned about how Linux systems actually fit together, the more systemd started to bother me.

The classic Unix philosophy is simple: write programs that do one thing and do it well. Systemd started out as an init system and process supervisor, which is fine, but over the years it expanded into a sprawling monolith. It absorbed logging, device management, DNS resolution, network configuration, and user sessions. When something goes wrong, you are suddenly digging through binary logs and tangled dependencies instead of dealing with clear, simple configuration files.

I wanted my system to do as little as possible behind my back. I wanted to understand every piece of it rather than treating it like a mysterious black box. That curiosity made me wonder what life without systemd actually looked like.

Enter Void Linux.

## Testing the Waters on the KoppelBox

I had heard about Void Linux on and off for a while. Before committing to putting it on my main laptop, I decided to test it on my family KoppelBox project (an ancient Lenovo ThinkCentre M91p that I converted into a TV console for my younger siblings).

Setting up Void on that machine with runit was surprisingly pleasant. It booted fast, stayed out of the way, and felt rock solid. Seeing how well it performed on older hardware convinced me to take the plunge and install it on my everyday laptop.

## What Makes Void Click

After making the switch on my daily driver, a few things immediately stood out:

- **XBPS is ridiculously fast.** The package manager is lightweight, snappy, and does its job without any noticeable overhead.
- **Runit makes service management trivial.** Instead of dealing with complex configuration formats, a service in runit is just a directory with an executable script. Enabling a service is literally creating a symlink into the service directory. If a process dies, runit restarts it. Simple, predictable, and transparent.
- **No background bloat or daemons.** I really do not like background daemons that quietly sit in user space running tasks you never asked for. Software should default to small, one-shot programs that execute, finish their job, and exit. Daemons have their place, but an init system does not need to become an operating system of its own.

## Learning to Build from Source

Another side effect of switching to Void is that it forced me to stop being lazy.

On Arch-based distros, it is way too easy to blindly pull packages from the AUR without looking at what they are actually doing. Void pushed me to write xbps-src templates and compile software myself when something was not available in the official repositories.

Having to inspect build instructions and compile things on my own means I actually know where files land and how they run. It takes slightly more effort, but knowing every corner of my machine scratches that nerd itch in the best possible way.
