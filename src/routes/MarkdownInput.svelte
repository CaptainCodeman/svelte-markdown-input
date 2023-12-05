<script lang="ts">
  import { createMarkdown } from 'svelte-markdown-input'
  import { gfm, gfmHtml } from 'micromark-extension-gfm'
  import 'github-markdown-css/github-markdown-light.css'

  export let hidden = 'lg:hidden'
  export let shown = 'lg:block'
  export let value = ''
  export let allow_gfm = false

  const markdown = createMarkdown({
    debounce: 60,
    micromark_options: allow_gfm
      ? {
        allowDangerousHtml: true,
        extensions: [gfm()],
        htmlExtensions: [gfmHtml()],
      }
      : undefined,
  })

  let editing = true
</script>

<div class="h-full flex flex-col">
  <div class="{hidden} flex items-center mb-2">
    <button class="px-3 py-1.5 border border-transparent text-sm font-medium rounded-md {editing ? 'text-gray-900 bg-gray-100 hover:bg-gray-200' : 'text-gray-500 hover:text-gray-900 bg-white hover:bg-gray-100'}" role="tab" type="button" on:click={() => editing = true}>Write</button>
    <button class="ml-2 px-3 py-1.5 border border-transparent text-sm font-medium rounded-md {!editing ? 'text-gray-900 bg-gray-100 hover:bg-gray-200' : 'text-gray-500 hover:text-gray-900 bg-white hover:bg-gray-100'}"  role="tab" type="button" on:click={() => editing = false}>Preview</button>
  </div>

  <div class="h-full flex gap-2 overflow-hidden">
    <textarea class="flex-1 m-0.5 border border-gray-200 rounded-md p-4 overflow-scroll font-mono text-sm resize-none {shown}" class:hidden={!editing} use:markdown bind:value></textarea>
    <div class="flex-1 m-0.5 border border-gray-200 rounded-md p-4 overflow-scroll max-w-full {shown} markdown-body" class:hidden={editing}>{@html $markdown}</div>
  </div>
</div>
