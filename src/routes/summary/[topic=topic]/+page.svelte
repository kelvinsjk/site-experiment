<script lang="ts">
  import { Djot } from "svelte-djot-math";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();

  let idx = $state<number>(data.summary.findIndex((item) => item.example) ?? 0);
</script>

<h1>{data.topic}</h1>
<main>
  <div>
    <h2>Key techniques</h2>
    <ul>
      {#each data.summary as item, i}
        <li>
          <div class="point">
            <button
              class="square"
              class:border={idx !== i}
              onclick={() => {
                idx = i;
              }}
              aria-label="select point"
              disabled={item.example === undefined}
            >
              <span></span>
            </button>
            <Djot djot={item.point} />
          </div>
        </li>
      {/each}
    </ul>
  </div>
  <div>
    <h2>Example</h2>
    <div>
      <h3 class="small"><Djot djot={data.summary[idx].point} /></h3>
      <Djot djot={data.summary[idx].example ?? ""} />
    </div>
  </div>
</main>

<style>
  ul {
    list-style-type: none;
  }
  .point {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
  main {
    max-width: 80ch;
    margin-inline: auto;
  }
  button:disabled {
    background-color: #ccc;
    opacity: 0.5;
    cursor: not-allowed;
  }
</style>
