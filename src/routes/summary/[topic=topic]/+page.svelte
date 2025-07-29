<script lang="ts">
  import { Djot } from "svelte-djot-math";
  import type { PageProps, Snapshot } from "./$types";

  let { data }: PageProps = $props();

  let idx = $state<number>(data.summary.findIndex((item) => item.example) ?? 0);

  export const snapshot: Snapshot<number> = {
    capture: () => idx,
    restore: (value: number) => {
      idx = value;
    },
  };
</script>

<h1>{data.topic}</h1>
<main>
  <div class="techniques-container">
    <h2>Key techniques</h2>
    <div class="techniques-list-container">
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
  </div>
  <div class="example-container">
    <h2>Example</h2>
    <div class="example">
      <h3 class="small">
        <Djot djot={data.summary[idx].shortPoint ?? data.summary[idx].point} />
      </h3>
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
