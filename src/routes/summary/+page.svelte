<script lang="ts">
  import { topics, topicToTitle } from "$lib/summary";
</script>

<ul>
  {#each topics as topic}
    <li>
      <a class="button" href={`./summary/${topic}`}
        >{topicToTitle[topic].title}</a
      >
    </li>
  {/each}
</ul>

<style>
  ul {
    display: grid;
    row-gap: 1rem;
    list-style: none;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    padding: 0;
  }
  a {
    display: grid;
    text-align: center;
  }
</style>
