<script lang="ts">
  export let icon: string; // FontAwesome class, e.g. "fa-brands fa-twitter"
  export let text: string;
  export let href: string = "#";
  export let bgColor: string = "bg-gray-100";
  export let textColor: string = "text-gray-900";
</script>

<a
  href={href}
  class="relative flex items-center px-5 py-3 rounded-full {bgColor} {textColor} no-underline transition-colors gap-4 hover:bg-gray-200"
  target="_blank"
  rel="noopener noreferrer"
>
  <span class="text-3xl">
    <i class={icon} aria-hidden="true"></i>
  </span>
  <span class="w-full text-center text-2xl absolute inset-0 flex items-center justify-center font-medium">{text}</span>
</a>
