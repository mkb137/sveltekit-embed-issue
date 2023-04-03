<script lang="ts">

    import AnotherComponent from "./AnotherComponent.svelte";

    let counter = 0

    const handleAdd = () => {
        counter = counter + 1;
    }
    const handleSubtract = () => {
        counter = counter - 1;
    }

    const handleClick = () => {
        console.log('handleClick')
        alert('Hello')
    }
</script>

<div id="embedded-content">
    <div>
        Embedded Page
    </div>
    <button on:click|preventDefault={handleClick}>Click Me</button>
    <div>
        Counter = {counter}
    </div>
    <button type="button" on:click|preventDefault={handleAdd}>+</button>
    <button type="button" on:click|preventDefault={handleSubtract}>-</button>
    {#if counter > 3}
        <AnotherComponent/>
    {/if}
</div>

<style>
    div#embedded-content {
        background-color: lightpink;
    }
</style>
