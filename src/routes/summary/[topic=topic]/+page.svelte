<script lang="ts">
  import { Djot } from "svelte-djot-math";
  import type { PageProps, Snapshot } from "./$types";
  import { scale } from "svelte/transition";
  import { topicToTitle } from "$lib/summary";

  let { data }: PageProps = $props();

  let idx = $state<number>(data.summary.findIndex((item) => item.example) ?? 0);

  export const snapshot: Snapshot<number> = {
    capture: () => idx,
    restore: (value: number) => {
      idx = value;
    },
  };

  const title = $derived(topicToTitle[data.topic].title);
  const shortTitle = $derived(topicToTitle[data.topic].shortTitle ?? title);
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>
<nav>
  <div class="title-container row">
    <h1 class="shortTitle">
      {shortTitle}
    </h1>
    <h1 class="longTitle">{title}</h1>
  </div>
</nav>
<main>
  <article class="techniques-container">
    <h2 id="techniques">Key techniques</h2>
    <div class="techniques-list-container">
      <ul>
        {#each data.summary as item, i}
          <li>
            <div class="point">
              {#if item.example === undefined}
                <button
                  class="square button"
                  class:border={idx !== i}
                  aria-label="select point"
                  disabled={item.example === undefined}
                >
                  <span></span>
                </button>
              {:else}
                <a
                  class="square button"
                  class:border={idx !== i}
                  href="#example"
                  onclick={() => {
                    idx = i;
                  }}
                  aria-label="select point"
                >
                  <span></span>
                </a>
              {/if}
              <div class="point-text">
                <Djot djot={item.point} />
              </div>
            </div>
          </li>
        {/each}
      </ul>
    </div>
  </article>
  <article class="example-container" id="example">
    {#key idx}
      <div in:scale>
        <h2>
          {data.summary[idx].shortPoint}
        </h2>
        <div class="example">
          <div class="example-text" in:scale>
            <Djot djot={data.summary[idx].example ?? ""} />
          </div>
          <a href="#techniques" class="back-to-top">▲ Back to techniques </a>
        </div>
      </div>
    {/key}
  </article>
</main>

<style>
  nav {
    background-color: var(--primary);
    color: var(--secondary);
    display: flex;
    width: 100%;
  }
  ul {
    list-style-type: none;
    display: grid;
    gap: 2rem;
    padding-inline-start: 1rem;
  }
  ul .point {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 0.5rem;
    align-items: center;
  }
  .point-text :global(mrow) {
    border-radius: 0.75rem;
  }
  :global(mrow[notation="box"]) {
    padding: 0.5rem 0.25rem;
  }
  .point-text > :global(p) {
    margin-block: 0;
  }
  main,
  .title-container {
    width: min(100vw, 640px);
    margin-inline: auto;
  }
  h1 {
    padding-top: 1rem;
    padding-inline: 1.5rem;
  }
  h1.longTitle {
    display: none;
  }
  main {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 1rem;
    padding: 1rem 2px;
  }
  .back-to-top {
    margin-block-start: 1rem;
  }
  @media (min-width: 800px) {
    h1.shortTitle {
      display: none;
    }
    h1.longTitle {
      padding-left: 1.5rem;
      display: block;
      white-space: nowrap;
      overflow-x: hidden;
    }
    .title-container,
    main {
      width: min(100vw, 1280px);
    }
    main {
      padding: 0.5rem;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      justify-items: center;
    }
    main > article {
      max-width: 80ch;
      width: 100%;
      margin-block-start: 0;
    }
  }
  ul {
    margin-block-start: 1rem;
  }
  button:disabled {
    background-color: #bbb;
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
    position: relative;
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
    pointer-events: none;
  }
  .example-text :global(.ans) {
    position: relative;
    margin-top: 2.25rem;
    padding-left: 2.25rem;
    overflow: visible;
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
    pointer-events: none;
  }
  :global(ol[type="a"]) {
    list-style-type: lower-alpha;
  }
  .example-text :global(table th),
  .example-text :global(table td) {
    border-block: 1px solid #00000055;
  }
</style>
