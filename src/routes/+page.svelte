<script lang="ts">
  import MarkdownInput from './MarkdownInput.svelte'
  import { testValue } from './testValue '

  let value = testValue
</script>

<div class="h-screen p-4">
  <MarkdownInput bind:value allow_gfm/>
</div>
