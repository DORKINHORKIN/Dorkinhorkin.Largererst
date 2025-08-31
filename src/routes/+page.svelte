<script lang="ts" context='module'>
  export const prerender = true;
  import svelteSVG from "$lib/assets/Svelte.svg";
  import Button from "$lib/components/button.svelte";

  export interface Link {
    href: string;
    text: string;
    icon: string;
    bgColor: string;
    textColor: string;
  }

  export let links: Link[] = [
    {
      href: "https://twitter.com/dorkinnsfw",
      text: "Twitter Main",
      icon: "fab fa-x-twitter",
      bgColor: "bg-blue-100",
      textColor: "text-blue-900",
    },
    {
      href: "https://x.com/bechdlmcmiggins",
      text: "Twitter Ponies",
      icon: "fas fa-horse",
      bgColor: "bg-pink-100",
      textColor: "text-pink-900",
    },
    {
      href: "https://x.com/largerArtz",
      text: "Twitter HYPER",
      icon: "fas fa-bolt",
      bgColor: "bg-purple-100",
      textColor: "text-purple-900",
    },
    {
      href: "https://bsky.app/profile/dorkinnsfw.bsky.social",
      text: "Bluesky ",
      icon: "fas fa-cloud",
      bgColor: "bg-sky-100",
      textColor: "text-sky-900",
    },
    {
      href: "http://picarto.tv/largerArtz",
      text: "Picarto",
      icon: "fas fa-video",
      bgColor: "bg-teal-100",
      textColor: "text-teal-900",
    },
    {
      href: "http://furaffinity.net/user/largerest",
      text: "FurAffinity",
      icon: "fas fa-paw",
      bgColor: "bg-orange-100",
      textColor: "text-orange-900",
    },
    {
      href: "http://patreon.com/largerartz",
      text: "Patreon",
      icon: "fab fa-patreon",
      bgColor: "bg-red-100",
      textColor: "text-red-900",
    },
    {
      href: "http://ko-fi.com/largerest",
      text: "Ko-fi",
      icon: "fas fa-coffee",
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-900",
    },
  ];

  export let background =
    "https://th.bing.com/th/id/R.53cd7751fba7083d2474fe1c9e91828d?rik=bk1p5EGRBJVyfw&pid=ImgRaw&r=0";
</script>

<svelte:head>
  <title>Dorkin Links</title>
  <meta name="description" content="Welcome to the home page" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
  <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@400;700;900&display=swap" rel="stylesheet" />
</svelte:head>

<div
  class="relative font-[lexend] text-white flex-col items-center min-h-screen w-full"
>
  <img
    src={background}
    class="absolute inset-0 object-cover w-full h-full"
    alt=""
  />
  <div
    class="absolute w-full h-full bg-black opacity-100 [mask-image:radial-gradient(circle_at_50%_50%,transparent_60%,black_100%)] [--tw-mask-image:radial-gradient(circle_at_50%_50%,transparent_60%,black_100%)]"
  />

  <div class="z-10 relative flex-col items-center justify-center flex min-h-screen drop-shadow-lg px-2 sm:px-4">
    <header class="flex flex-col sm:flex-row items-center justify-center p-4 sm:p-8 rounded-full gap-2 sm:gap-4">
      <div class="bg-white rounded-full w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center overflow-hidden p-2 sm:p-3">
        <img src="https://pbs.twimg.com/profile_images/1961808060311060480/ne8KV19A_200x200.jpg" alt="">
      </div>
      <h1 class="text-3xl sm:text-5xl uppercase font-black drop-shadow-lg text-center sm:text-left">
        Dorkin<br/>Largerest
      </h1>
    </header>

    <nav class="w-full flex flex-col items-center justify-center">
      <ul class="flex flex-col gap-3 sm:gap-4 mx-auto w-full max-w-xs sm:max-w-md mb-6 sm:mb-8">
        {#each links as link}
          <li>
            <Button
              href={link.href}
              icon={link.icon}
              text={link.text}
              bgColor={link.bgColor}
              textColor={link.textColor}
            />
          </li>
        {/each}
      </ul>
    </nav>

    <footer class="text-center text-xs sm:text-sm text-white/70 p-4 sm:p-8">
      <p>
        Made with ❤️ with <img src={svelteSVG} alt="SvelteKit Logo" class="inline-block w-4 h-4" /> SvelteKit!
      </p>
    </footer>
  </div>
</div>
