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
              <div class="point-text">
                <Djot djot={item.point} />
              </div>
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
      <div class="example-text">
        <Djot djot={data.summary[idx].example ?? ""} />
      </div>
    </div>
  </div>
</main>

<style>
  ul {
    list-style-type: none;
    display: grid;
    gap: 2rem;
  }
  .point {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 0.5rem;
    align-items: center;
  }
  .point-text > :global(p) {
    margin-block: 0;
  }
  main {
    max-width: 80ch;
    margin-inline: auto;
  }
  @media (min-width: 1200px) {
    main {
      max-width: none;
      width: calc(160ch + 2rem);
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 2rem;
      justify-items: center;
    }
    main > div {
      max-width: 80ch;
      width: 100%;
    }
  }
  h3.small,
  ul {
    margin-block-start: 1rem;
  }
  button:disabled {
    background-color: #ccc;
    opacity: 0.5;
    cursor: not-allowed;
  }
  .example-text {
    margin-block-start: 1rem;
  }
  .example {
    max-width: max-content;
  }

  .example-text :global(.qn) {
    display: relative;
    margin-left: 2.5rem;
    margin-top: 1.25rem;
  }
  .example-text :global(.qn::before) {
    content: "Q";
    font-family: serif; /* or a calligraphic font */
    font-style: italic;
    font-size: 2em; /* adjust to your preference */
    color: rgba(0, 0, 0, 0.25); /* soft overlay effect */
    position: absolute;
    left: 0;
    top: 0;
    transform: translate(-2.5rem, -0.25rem); /* controls the overlap */
    z-index: -1; /* push it behind the text if needed */
    pointer-events: none;
  }
  .example-text :global(.ans) {
    display: relative;
    margin-left: 2.5rem;
    margin-top: 2.25rem;
  }
  .example-text :global(.ans::before) {
    content: "A";
    font-family: serif; /* or a calligraphic font */
    font-style: italic;
    font-size: 2em; /* adjust to your preference */
    color: rgba(0, 0, 0, 0.25); /* soft overlay effect */
    position: absolute;
    left: 0;
    top: 0;
    transform: translate(-2.5rem, -0.25rem); /* controls the overlap */
    z-index: -1; /* push it behind the text if needed */
    pointer-events: none;
  }
</style>
