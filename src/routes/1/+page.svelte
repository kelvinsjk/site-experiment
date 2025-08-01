<script>
  import { x } from "mathlifier";
  import { Djot } from "svelte-djot-math";
  const djot = x`$$ 1234567890abcdefghijklmnopqrstuvwxyz12345 $$

- $$ 1234567890abcdefghijklmnopqrstuvwxyz12345 $$`;
</script>

<a href="../">Back</a>

<main>
  <div>
    <Djot {djot} />
  </div>
</main>

<style>
  main {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
  }
  div {
    border: 1px solid black;
    padding: 0.5rem;
  }
</style>
