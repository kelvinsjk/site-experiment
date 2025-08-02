<script lang="ts">
  const click = () => {
    navigator.serviceWorker.controller?.postMessage({
      action: "cacheFiles",
      files: [
        "/",
        "/summary",
        "/summary/pnc",
        "/summary/drv",
        "/summary/probability",
      ],
    });
  };
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the
  documentation
</p>
<ul>
  <li><a href="./1">1</a></li>
  <li><a href="./summary">Summary</a></li>
  <li><a href="./2">2</a></li>
</ul>

<h2>Cache</h2>
<button onclick={click}><span>Cache files</span></button>
